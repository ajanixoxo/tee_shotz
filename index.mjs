import { google } from 'googleapis';
import fs from 'fs'

const auth = new google.auth.GoogleAuth({
  keyFile: 'service.json',
  scopes: ['https://www.googleapis.com/auth/drive.readonly'],
});

async function getDriveClient() {
  const client = await auth.getClient();
  return google.drive({ version: 'v3', auth: client });
}

async function listFoldersAndFiles(drive, parentId) {
  const res = await drive.files.list({
    q: `'${parentId}' in parents and trashed = false`,
    fields: 'files(id, name, mimeType)',
  });
  return res.data.files;
}

async function traverse(drive, folderId, pathArray = []) {
  const entries = await listFoldersAndFiles(drive, folderId);
  const result = {};

  for (const entry of entries) {
    if (entry.mimeType === 'application/vnd.google-apps.folder') {
      // It's a folder — go deeper
      const subTree = await traverse(drive, entry.id, [...pathArray, entry.name]);
      if (Object.keys(subTree).length) {
        const [currentCategory, ...rest] = pathArray.concat(entry.name);
        let current = result;

        if (rest.length === 0) {
          current[currentCategory] = { ...(current[currentCategory] || {}), ...subTree };
        } else {
          current[currentCategory] = current[currentCategory] || {};
          let ref = current[currentCategory];
          for (const sub of rest) {
            ref[sub] = ref[sub] || {};
            ref = ref[sub];
          }
          Object.assign(ref, subTree);
        }
      }
    } else if (entry.mimeType.startsWith('image/')) {
      // It's an image
      const [category, subfolder] = pathArray;
      result[category] = result[category] || {};
      result[category][subfolder] = result[category][subfolder] || [];

      result[category][subfolder].push({
        id: entry.id,
        name: entry.name,
        url: `https://drive.google.com/thumbnail?id=${entry.id}`,
      });
    }
  }

  return result;
}

// ENTRY POINT
async function fetchStructuredImages(rootPortfolioFolderId) {
  const drive = await getDriveClient();
  const structuredImages = await traverse(drive, rootPortfolioFolderId);

  const output = JSON.stringify(structuredImages, null, 2);
  fs.writeFileSync('portfolio-output.txt', output, 'utf8');
  console.log('✅ Image data saved to portfolio-output.txt');

  // (you can still return it if you want)
  return structuredImages;
}

fetchStructuredImages('1L2LEWlx7PzD6XpqYmz0z9VU_a4Mb7MaO')
  .catch(console.error);

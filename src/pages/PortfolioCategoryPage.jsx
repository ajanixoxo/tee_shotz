import { useParams } from 'react-router-dom';
import SectionTitle from '../components/SectionTitle';
import ImageGallery from '../components/ImageGallery';
import portfolioData from '../../portfolio-output.json';

function getLargeGoogleImageUrl(originalUrl, size = 990) {
  const match = originalUrl.match(/id=([^&]+)/);
  if (!match) return originalUrl;
  const fileId = match[1];
  return `https://lh3.googleusercontent.com/d/${fileId}=s${size}`;
}

function getCategoryImages(data, categorySlug) {
  if (!data || !data.PICTURES || !data.PICTURES.PICTURES) return [];
  const mainCategories = Object.keys(data.PICTURES.PICTURES);
  const mainCat = mainCategories.find(cat => cat.toLowerCase().replace(/\s+/g, '-') === categorySlug);
  if (!mainCat) return [];
  let images = [];
  function collectImages(obj) {
    if (Array.isArray(obj)) {
      images = images.concat(obj);
    } else if (typeof obj === 'object' && obj !== null) {
      for (const key in obj) {
        collectImages(obj[key]);
      }
    }
  }
  collectImages(data.PICTURES.PICTURES[mainCat]);
  // Map url to src and pick up to 40 random images
  const shuffled = images.slice().sort(() => 0.5 - Math.random());
  return shuffled.slice(0, 40).map(img => ({
    ...img,
    src: getLargeGoogleImageUrl(img.url, 990),
    alt: img.name || mainCat,
  }));
}

const PortfolioCategoryPage = () => {
  const { category } = useParams();
  const images = getCategoryImages(portfolioData, category);
  const displayName = category.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());

  return (
    <>
      <section className="relative pt-32 pb-20 bg-black text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h1 className="handwriting text-5xl md:text-6xl font-bold mb-6" data-aos="fade-up">
            {displayName}
          </h1>
        </div>
      </section>
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <SectionTitle title={`Gallery: ${displayName}`} center={true} />
          <ImageGallery images={images} category={displayName} />
        </div>
      </section>
    </>
  );
};

export default PortfolioCategoryPage; 
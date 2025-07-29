/* eslint-disable react-hooks/exhaustive-deps */
"use client"

import { useState, useEffect } from "react"
import { useLocation } from "react-router-dom"
import SectionTitle from "../components/SectionTitle"
import VideoGallery from "../components/VideoGallery"
import portfolioData from '../../portfolio-output.json'; // You may need to convert this to JSON or import as needed

function getRandomItems(arr, n) {
  const shuffled = arr.slice().sort(() => 0.5 - Math.random());
  return shuffled.slice(0, n);
}

function getGoogleDriveEmbedUrl(originalUrl) {
  // Extract the file ID from Google Drive URL
  let fileId = '';
  
  // Handle different Google Drive URL formats
  if (originalUrl.includes('/file/d/')) {
    const match = originalUrl.match(/\/file\/d\/([a-zA-Z0-9-_]+)/);
    if (match) fileId = match[1];
  } else if (originalUrl.includes('id=')) {
    const match = originalUrl.match(/id=([^&]+)/);
    if (match) fileId = match[1];
  }
  
  if (!fileId) return originalUrl; // fallback
  
  // Return Google Drive embed URL for videos
  return `https://drive.google.com/file/d/${fileId}/preview`;
}

function flattenVideoPortfolioData(data) {
  if (!data || !data.VIDEOS || !data.VIDEOS.VIDEOS) return {};
  // Recursively collect all videos under each main category
  const result = {};
  const mainCategories = Object.keys(data.VIDEOS.VIDEOS);
  for (const mainCat of mainCategories) {
    let videos = [];
    function collectVideos(obj) {
      if (Array.isArray(obj)) {
        videos = videos.concat(obj);
      } else if (typeof obj === 'object' && obj !== null) {
        for (const key in obj) {
          collectVideos(obj[key]);
        }
      }
    }
    collectVideos(data.VIDEOS.VIDEOS[mainCat]);
    // Map url to embedUrl for video embedding
    result[mainCat] = getRandomItems(videos, 10).map(video => ({
      ...video,
      embedUrl: getGoogleDriveEmbedUrl(video.url),
      title: video.name || mainCat,
      description: video.description || '',
    }));
  }
  return result;
}

const portfolioVideos = flattenVideoPortfolioData(portfolioData);
const categories = [
  { id: 'all', name: 'All Videos' },
  ...Object.keys(portfolioVideos).map(cat => ({ id: cat.toLowerCase().replace(/\s+/g, '-'), name: cat }))
];

const VideoPortfolioPage = () => {
  const location = useLocation();
  const [activeCategory, setActiveCategory] = useState('all');

  useEffect(() => {
    const hash = location.hash.replace('#', '');
    if (hash && categories.some((cat) => cat.id === hash)) {
      setActiveCategory(hash);
      setTimeout(() => {
        const element = document.getElementById(hash);
        if (element) {
          const headerOffset = 100;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
          window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
        }
      }, 100);
    }
  }, [location, categories]);

  const getFilteredVideos = () => {
    if (activeCategory === 'all') {
      return Object.entries(portfolioVideos).reduce((acc, [category, videos]) => {
        return [...acc, ...videos.map((video) => ({ ...video, category }))];
      }, []);
    }
    // Find the main category by id
    const mainCat = Object.keys(portfolioVideos).find(cat => cat.toLowerCase().replace(/\s+/g, '-') === activeCategory);
    return portfolioVideos[mainCat] || [];
  };

  return (
    <>
      {/* Video Portfolio Hero */}
      <section className="relative pt-32 pb-20 bg-gray-700 text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h1 className="handwriting text-5xl md:text-6xl font-bold mb-6" data-aos="fade-up">
            Video Portfolio
          </h1>
          <p className="text-xl max-w-2xl mx-auto mb-12" data-aos="fade-up" data-aos-delay="100">
            Discover our creative video work across various categories and projects
          </p>

          {/* Category Navigation */}
          <div className="flex flex-wrap justify-center gap-4 mb-8" data-aos="fade-up" data-aos-delay="200">
            {categories.map((category) => (
              <button
                key={category.id}
                className={`px-4 py-2 rounded-full transition-colors ${
                  activeCategory === category.id
                    ? 'bg-white text-black'
                    : 'bg-transparent border border-white text-white hover:bg-white hover:bg-opacity-10'
                }`}
                onClick={() => setActiveCategory(category.id)}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Video Portfolio Categories */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          {activeCategory === 'all' ? (
            categories
              .filter((cat) => cat.id !== 'all')
              .map((category) => {
                const mainCat = Object.keys(portfolioVideos).find(catName => catName.toLowerCase().replace(/\s+/g, '-') === category.id);
                return (
                  <div key={category.id} id={category.id} className="mb-20">
                    <SectionTitle title={category.name} center={true} />
                    <VideoGallery videos={portfolioVideos[mainCat] || []} category={category.name} />
                    <div className="text-center mt-4">
                      <a
                        href={`/video-portfolio/${category.id}`}
                        className="inline-flex items-center px-6 py-2 bg-gray-700 hover:bg-gray-900 text-white rounded-md transition-colors"
                      >
                        See All Videos
                      </a>
                    </div>
                  </div>
                );
              })
          ) : (
            <div id={activeCategory}>
              <SectionTitle title={categories.find((cat) => cat.id === activeCategory)?.name || ''} center={true} />
              <VideoGallery
                videos={getFilteredVideos()}
                category={categories.find((cat) => cat.id === activeCategory)?.name || ''}
              />
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default VideoPortfolioPage;
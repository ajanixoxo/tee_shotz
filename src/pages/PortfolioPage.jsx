/* eslint-disable react-hooks/exhaustive-deps */
"use client"

import { useState, useEffect } from "react"
import { useLocation } from "react-router-dom"
import SectionTitle from "../components/SectionTitle"
import ImageGallery from "../components/ImageGallery"
import portfolioData from '../../portfolio-output.json'; // You may need to convert this to JSON or import as needed

function getRandomItems(arr, n) {
  const shuffled = arr.slice().sort(() => 0.5 - Math.random());
  return shuffled.slice(0, n);
}

function getLargeGoogleImageUrl(originalUrl, size = 990) {
  // Extract the file ID from the original URL
  const match = originalUrl.match(/id=([^&]+)/);
  if (!match) return originalUrl; // fallback
  const fileId = match[1];
  return `https://lh3.googleusercontent.com/d/${fileId}=s${size}`;
}

function flattenPortfolioData(data) {
  if (!data || !data.PICTURES || !data.PICTURES.PICTURES) return {};
  // Recursively collect all images under each main category
  const result = {};
  const mainCategories = Object.keys(data.PICTURES.PICTURES);
  for (const mainCat of mainCategories) {
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
    // Map url to src for compatibility with ImageCard/ImageGallery, use high quality
    result[mainCat] = getRandomItems(images, 10).map(img => ({
      ...img,
      src: getLargeGoogleImageUrl(img.url, 990),
      alt: img.name || mainCat,
    }));
  }
  return result;
}

const portfolioImages = flattenPortfolioData(portfolioData);
const categories = [
  { id: 'all', name: 'All Work' },
  ...Object.keys(portfolioImages).map(cat => ({ id: cat.toLowerCase().replace(/\s+/g, '-'), name: cat }))
];

const PortfolioPage = () => {
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

  const getFilteredImages = () => {
    if (activeCategory === 'all') {
      return Object.entries(portfolioImages).reduce((acc, [category, images]) => {
        return [...acc, ...images.map((img) => ({ ...img, category }))];
      }, []);
    }
    // Find the main category by id
    const mainCat = Object.keys(portfolioImages).find(cat => cat.toLowerCase().replace(/\s+/g, '-') === activeCategory);
    return portfolioImages[mainCat] || [];
  };

  return (
    <>
      {/* Portfolio Hero */}
      <section className="relative pt-32 pb-20 bg-gray-700 text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h1 className="handwriting text-5xl md:text-6xl font-bold mb-6" data-aos="fade-up">
            Portfolio
          </h1>
          <p className="text-xl max-w-2xl mx-auto mb-12" data-aos="fade-up" data-aos-delay="100">
            Explore our diverse collection of photography work across various categories
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

      {/* Portfolio Categories */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          {activeCategory === 'all' ? (
            categories
              .filter((cat) => cat.id !== 'all')
              .map((category) => {
                const mainCat = Object.keys(portfolioImages).find(catName => catName.toLowerCase().replace(/\s+/g, '-') === category.id);
                return (
                  <div key={category.id} id={category.id} className="mb-20">
                    <SectionTitle title={category.name} center={true} />
                    <ImageGallery images={portfolioImages[mainCat] || []} category={category.name} />
                    <div className="text-center mt-4">
                      <a
                        href={`/portfolio/${category.id}`}
                        className="inline-flex items-center px-6 py-2 bg-gray-700 hover:bg-gray-900 text-white rounded-md  transition-colors"
                      >
                        See All
                      </a>
                    </div>
                  </div>
                );
              })
          ) : (
            <div id={activeCategory}>
              <SectionTitle title={categories.find((cat) => cat.id === activeCategory)?.name || ''} center={true} />
              <ImageGallery
                images={getFilteredImages()}
                category={categories.find((cat) => cat.id === activeCategory)?.name || ''}
              />
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default PortfolioPage;


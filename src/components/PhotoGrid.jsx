import React, { useEffect, useState } from 'react';

// Sample images - in a real application, these would be your actual photography images
const sampleImages = [
  { src: "/placeholder.svg?width=600&height=400", alt: "Wedding photography" },
  { src: "/placeholder.svg?width=500&height=500", alt: "Portrait photography" },
  { src: "/placeholder.svg?width=600&height=400", alt: "Event photography" },
  { src: "/placeholder.svg?width=400&height=600", alt: "Graduation photography" },
  { src: "/placeholder.svg?width=500&height=400", alt: "Birthday photography" },
  { src: "/placeholder.svg?width=600&height=500", alt: "Commercial photography" },
  { src: "/placeholder.svg?width=400&height=400", alt: "Casual photography" },
  { src: "/placeholder.svg?width=600&height=400", alt: "Family photography" },
  { src: "/placeholder.svg?width=500&height=600", alt: "Fashion photography" },
  { src: "/placeholder.svg?width=400&height=500", alt: "Travel photography" },
  { src: "/placeholder.svg?width=600&height=400", alt: "Product photography" },
  { src: "/placeholder.svg?width=500&height=500", alt: "Food photography" },
  { src: "/placeholder.svg?width=400&height=600", alt: "Architecture photography" },
  { src: "/placeholder.svg?width=600&height=500", alt: "Nature photography" },
  { src: "/placeholder.svg?width=500&height=400", alt: "Sports photography" },
  { src: "/placeholder.svg?width=400&height=400", alt: "Street photography" },
  { src: "/placeholder.svg?width=600&height=500", alt: "Black and white photography" },
  { src: "/placeholder.svg?width=500&height=600", alt: "Landscape photography" },
  { src: "/placeholder.svg?width=400&height=500", alt: "Macro photography" },
  { src: "/placeholder.svg?width=600&height=400", alt: "Night photography" },
  { src: "/placeholder.svg?width=500&height=500", alt: "Wildlife photography" },
  { src: "/placeholder.svg?width=400&height=600", alt: "Underwater photography" },
  { src: "/placeholder.svg?width=600&height=500", alt: "Aerial photography" },
  { src: "/placeholder.svg?width=500&height=400", alt: "Documentary photography" },
  { src: "/placeholder.svg?width=400&height=400", alt: "Fine art photography" },
];

const PhotoGrid = ({ className, images = sampleImages }) => {
  const [gridImages, setGridImages] = useState([]);
  
  useEffect(() => {
    // Generate a varied grid of images with different sizes
    const generateGridLayout = () => {
      const sizes = [
        { cols: 1, rows: 1 }, // small square
        { cols: 2, rows: 1 }, // wide
        { cols: 1, rows: 2 }, // tall
        { cols: 2, rows: 2 }, // large square
      ];
      
      // Shuffle the images array to get a random order
      const shuffledImages = [...images].sort(() => Math.random() - 0.5);
      
      // Assign random sizes to images
      const processedImages = shuffledImages.map((image, index) => {
        const size = sizes[Math.floor(Math.random() * sizes.length)];
        return {
          id: index,
          src: image.src,
          alt: image.alt || `Photography image ${index + 1}`,
          cols: size.cols,
          rows: size.rows,
        };
      });
      
      setGridImages(processedImages);
    };
    
    generateGridLayout();
  }, [images]);
  
  return (
    <div className={`w-full h-full overflow-hidden ${className}`}>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-1 w-[120%] h-[120%] -ml-[10%] -mt-[10%]">
        {gridImages.map((image) => (
          <div 
            key={image.id}
            className={`relative overflow-hidden`}
          >
            <img
              src={image.src || "/placeholder.svg"}
              alt={image.alt}
              className="w-full h-full object-cover filter grayscale "
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PhotoGrid;

import { useState } from "react";
import { Play, Volume2, VolumeX } from "lucide-react";

const VideoCard = ({ video, onClick, category }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleLoad = () => {
    setIsLoading(false);
    setHasError(false);
  };

  const handleError = () => {
    setIsLoading(false);
    setHasError(true);
  };

  return (
    <div 
      className="group relative bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:-translate-y-1"
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Video Container */}
      <div className="relative aspect-video bg-gray-200">
        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-600"></div>
          </div>
        )}
        
        {hasError ? (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-100 text-gray-500">
            <Play size={32} className="mb-2" />
            <span className="text-sm">Video unavailable</span>
          </div>
        ) : (
          <iframe
            src={video.embedUrl}
            className="absolute inset-0 w-full h-full object-contain"
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
            title={video.title}
            onLoad={handleLoad}
            onError={handleError}
            style={{ pointerEvents: 'none' }} // Prevent interaction in card view
          />
        )}

        {/* Overlay */}
        <div className={`absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center transition-opacity duration-300 ${
          isHovered ? 'opacity-100' : 'opacity-0'
        }`}>
          <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-full p-4">
            <Play size={32} className="text-white ml-1" />
          </div>
        </div>

        {/* Category Badge */}
        {category && (
          <div className="absolute top-3 left-3 bg-black bg-opacity-70 text-white px-2 py-1 rounded text-xs font-medium">
            {category}
          </div>
        )}
      </div>

      {/* Video Info */}
      <div className="p-4">
        <h3 className="font-semibold text-gray-800 mb-1 line-clamp-2 group-hover:text-gray-600 transition-colors">
          {video.title || 'Untitled Video'}
        </h3>
        {video.description && (
          <p className="text-gray-600 text-sm line-clamp-2">
            {video.description}
          </p>
        )}
      </div>

      {/* Hover Effect Border */}
      <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-blue-500 to-purple-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
    </div>
  );
};

export default VideoCard;
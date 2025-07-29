import { useEffect } from "react";
import { X, ChevronLeft, ChevronRight, Maximize2 } from "lucide-react";

const VideoModal = ({ video, onClose, onNext, onPrev, hasNext, hasPrev }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      switch (e.key) {
        case 'Escape':
          onClose();
          break;
        case 'ArrowLeft':
          if (hasPrev) onPrev();
          break;
        case 'ArrowRight':
          if (hasNext) onNext();
          break;
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [onClose, onNext, onPrev, hasNext, hasPrev]);

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div 
      className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center p-4"
      onClick={handleBackdropClick}
    >
      {/* Close Button */}
      <button
        className="absolute top-4 right-4 z-50 bg-black bg-opacity-50 hover:bg-opacity-70 text-white p-2 rounded-full transition-colors"
        onClick={onClose}
        aria-label="Close video"
      >
        <X size={24} />
      </button>

      {/* Navigation Buttons */}
      {hasPrev && (
        <button
          className="absolute left-4 top-1/2 transform -translate-y-1/2 z-50 bg-black bg-opacity-50 hover:bg-opacity-70 text-white p-3 rounded-full transition-colors"
          onClick={onPrev}
          aria-label="Previous video"
        >
          <ChevronLeft size={24} />
        </button>
      )}

      {hasNext && (
        <button
          className="absolute right-4 top-1/2 transform -translate-y-1/2 z-50 bg-black bg-opacity-50 hover:bg-opacity-70 text-white p-3 rounded-full transition-colors"
          onClick={onNext}
          aria-label="Next video"
        >
          <ChevronRight size={24} />
        </button>
      )}

      {/* Video Container */}
      <div className="relative w-full max-w-6xl mx-auto">
        <div className="relative aspect-video bg-black rounded-lg overflow-hidden">
          <iframe
            src={video.embedUrl}
            className="w-full h-full"
            frameBorder="0"
            allow="autoplay; encrypted-media; fullscreen"
            allowFullScreen
            title={video.title}
          />
        </div>

        {/* Video Info */}
        <div className="mt-4 text-white">
          <h2 className="text-2xl font-bold mb-2">{video.title || 'Untitled Video'}</h2>
          {video.description && (
            <p className="text-gray-300 text-lg leading-relaxed">{video.description}</p>
          )}
          {video.category && (
            <div className="mt-3">
              <span className="inline-block bg-white bg-opacity-20 text-white px-3 py-1 rounded-full text-sm font-medium">
                {video.category}
              </span>
            </div>
          )}
        </div>
      </div>

      {/* Controls Info */}
      <div className="absolute bottom-4 left-4 text-white text-sm opacity-70">
        <p>Press ESC to close • Use arrow keys to navigate</p>
      </div>
    </div>
  );
};

export default VideoModal;
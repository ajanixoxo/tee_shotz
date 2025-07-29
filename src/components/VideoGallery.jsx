import { useState } from "react";
import VideoCard from "./VideoCard";
import VideoModal from "./VideoModal";

const VideoGallery = ({ videos, category }) => {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (video) => {
    setSelectedVideo(video);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedVideo(null);
    setIsModalOpen(false);
  };

  const navigateVideo = (direction) => {
    if (!selectedVideo) return;
    
    const currentIndex = videos.findIndex(video => video.url === selectedVideo.url);
    let newIndex;
    
    if (direction === 'next') {
      newIndex = (currentIndex + 1) % videos.length;
    } else {
      newIndex = currentIndex === 0 ? videos.length - 1 : currentIndex - 1;
    }
    
    setSelectedVideo(videos[newIndex]);
  };

  if (!videos || videos.length === 0) {
    return (
      <div className="text-center py-20">
        <p className="text-gray-500 text-lg">No videos available in this category.</p>
      </div>
    );
  }

  return (
    <>
      <div 
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        {videos.map((video, index) => (
          <VideoCard 
            key={video.url || index} 
            video={video} 
            onClick={() => openModal(video)}
            category={category}
          />
        ))}
      </div>

      {isModalOpen && selectedVideo && (
        <VideoModal
          video={selectedVideo}
          onClose={closeModal}
          onNext={() => navigateVideo('next')}
          onPrev={() => navigateVideo('prev')}
          hasNext={videos.length > 1}
          hasPrev={videos.length > 1}
        />
      )}
    </>
  );
};

export default VideoGallery;
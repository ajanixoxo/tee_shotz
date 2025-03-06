"use client"

import { useState } from "react"
import ImageCard from "./ImageCard"
import { X, ChevronLeft, ChevronRight } from "lucide-react"

const ImageGallery = ({ images, category }) => {
  const [selectedImage, setSelectedImage] = useState(null)
  const [currentIndex, setCurrentIndex] = useState(0)

  const openModal = (image, index) => {
    setSelectedImage(image)
    setCurrentIndex(index)
    document.body.style.overflow = "hidden"
  }

  const closeModal = () => {
    setSelectedImage(null)
    document.body.style.overflow = "auto"
  }

  const navigateImage = (direction) => {
    const newIndex = currentIndex + direction
    if (newIndex >= 0 && newIndex < images.length) {
      setCurrentIndex(newIndex)
      setSelectedImage(images[newIndex])
    }
  }

  const handleKeyDown = (e) => {
    if (e.key === "Escape") {
      closeModal()
    } else if (e.key === "ArrowLeft") {
      navigateImage(-1)
    } else if (e.key === "ArrowRight") {
      navigateImage(1)
    }
  }

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {images.map((image, index) => (
          <ImageCard
            key={index}
            src={image.src || "https://placehold.co/600x400.svg"}
            alt={image.alt}
            category={category}
            onClick={() => openModal(image, index)}
          />
        ))}
      </div>

      <div
        className={`gallery-modal ${selectedImage ? "open" : ""}`}
        onClick={closeModal}
        onKeyDown={handleKeyDown}
        tabIndex={0}
      >
        {selectedImage && (
          <>
            <button
              className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
              onClick={closeModal}
            >
              <X className="h-8 w-8" />
            </button>

            <button
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 transition-colors"
              onClick={(e) => {
                e.stopPropagation()
                navigateImage(-1)
              }}
              disabled={currentIndex === 0}
            >
              <ChevronLeft className={`h-10 w-10 ${currentIndex === 0 ? "opacity-50" : ""}`} />
            </button>

            <img
              src={selectedImage.src || "/placeholder.svg"}
              alt={selectedImage.alt}
              onClick={(e) => e.stopPropagation()}
            />

            <button
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 transition-colors"
              onClick={(e) => {
                e.stopPropagation()
                navigateImage(1)
              }}
              disabled={currentIndex === images.length - 1}
            >
              <ChevronRight className={`h-10 w-10 ${currentIndex === images.length - 1 ? "opacity-50" : ""}`} />
            </button>
          </>
        )}
      </div>
    </>
  )
}

export default ImageGallery


"use client"

import { useState, useEffect, useRef } from "react"

const ImageCard = ({ src, alt, category, onClick }) => {
  const [isLoaded, setIsLoaded] = useState(false)
  const [isInView, setIsInView] = useState(false)
  const imageRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsInView(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1 },
    )

    if (imageRef.current) {
      observer.observe(imageRef.current)
    }

    return () => {
      if (imageRef.current) {
        observer.disconnect()
      }
    }
  }, [])

  const handleImageLoad = () => {
    setIsLoaded(true)
  }

  return (
    <div
      ref={imageRef}
      className="image-card rounded-lg overflow-hidden shadow-md cursor-pointer"
      data-aos="fade-up"
      onClick={onClick}
    >
      {isInView && (
        <>
          <div className="wind-path"></div>
          <img
            src={src || "https://placehold.co/600x400.svg"}
            alt={alt || `${category} photography by Tee_Shotz`}
            className={`w-full h-64 object-cover lazy-image ${isLoaded ? "loaded" : ""}`}
            onLoad={handleImageLoad}
          />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4 z-10">
            <h3 className="handwriting text-white text-xl">{category}</h3>
          </div>
        </>
      )}
      {!isInView && <div className="w-full h-64 bg-gray-200 animate-pulse"></div>}
    </div>
  )
}

export default ImageCard


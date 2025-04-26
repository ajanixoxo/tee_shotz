"use client"

import { useState, useEffect } from "react"
import { useLocation } from "react-router-dom"
import SectionTitle from "../components/SectionTitle"
import ImageGallery from "../components/ImageGallery"

const PortfolioPage = () => {
  const location = useLocation()
  const [activeCategory, setActiveCategory] = useState("all")

  // Categories for the portfolio
  const categories = [
    { id: "all", name: "All Work" },
    { id: "weddings", name: "Weddings" },
    { id: "convocation", name: "Convocation" },
    { id: "birthday", name: "Birthday" },
    { id: "casual", name: "Casual" },
    { id: "events", name: "Events" },
    { id: "FP", name: "Family Portraits" },
  ]
  // Sample images for each category
  const portfolioImages = {
    weddings: Array(6)
      .fill()
      .map((_, i) => ({
        src: `/images/weddings/weddings (${i+1}).jpg`,
        alt: `Wedding photography sample ${i + 1}`,
      })),
    convocation: Array(6)
      .fill()
      .map((_, i) => ({
        src: `/images/convocation/convocation (${i+1}).jpg`,
        alt: `Graduation photography sample ${i + 1}`,
      })),
    birthday: Array(3)
      .fill()
      .map((_, i) => ({
        src: `/images/birthday/birthday (${i+1}).jpg`,
        alt: `Birthday photography sample ${i + 1}`,
      })),
    casual: Array(6)
      .fill()
      .map((_, i) => ({
        src: `/images/causal/causal (${i+1}).jpg`,
        alt: `Casual photography sample ${i + 1}`,
      })),
    events: Array(6)
      .fill()
      .map((_, i) => ({
        src: `/images/events/event (${i+3}).JPG`,
        alt: `Event photography sample ${i + 1}`,
      })),
    FP: Array(6)
      .fill()
      .map((_, i) => ({
        src: `/images/FP/FP (${i+1}).jpg`,
        alt: `Commercial photography sample ${i + 1}`,
      })),
  }

  // Handle hash changes to set active category
  useEffect(() => {
    const hash = location.hash.replace("#", "")
    if (hash && categories.some((cat) => cat.id === hash)) {
      setActiveCategory(hash)

      // Scroll to the category section with offset for the fixed header
      setTimeout(() => {
        const element = document.getElementById(hash)
        if (element) {
          const headerOffset = 100
          const elementPosition = element.getBoundingClientRect().top
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset

          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth",
          })
        }
      }, 100)
    }
  }, [location, categories])

  // Get all images or filtered by category
  const getFilteredImages = () => {
    if (activeCategory === "all") {
      return Object.entries(portfolioImages).reduce((acc, [category, images]) => {
        return [...acc, ...images.map((img) => ({ ...img, category }))]
      }, [])
    }

    return portfolioImages[activeCategory] || []
  }

  return (
    <>
      {/* Portfolio Hero */}
      <section className="relative pt-32 pb-20 bg-black text-white">
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
                    ? "bg-white text-black"
                    : "bg-transparent border border-white text-white hover:bg-white hover:bg-opacity-10"
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
          {activeCategory === "all" ? (
            // Display all categories when "All Work" is selected
            categories
              .filter((cat) => cat.id !== "all")
              .map((category) => (
                <div key={category.id} id={category.id} className="mb-20">
                  <SectionTitle title={category.name} center={true} />
                  <ImageGallery images={portfolioImages[category.id] || []} category={category.name} />
                </div>
              ))
          ) : (
            // Display only the selected category
            <div id={activeCategory}>
              <SectionTitle title={categories.find((cat) => cat.id === activeCategory)?.name || ""} center={true} />
              <ImageGallery
                images={getFilteredImages()}
                category={categories.find((cat) => cat.id === activeCategory)?.name || ""}
              />
            </div>
          )}
        </div>
      </section>
    </>
  )
}

export default PortfolioPage


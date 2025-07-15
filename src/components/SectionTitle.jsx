const SectionTitle = ({ title, subtitle, center = false }) => {
    return (
      <div className={`mb-12 ${center ? "text-center" : ""}`} data-aos="fade-up">
        <h2 className="handwriting text-4xl md:text-5xl font-bold mb-4">{title}</h2>
        {subtitle && <p className="text-gray-600 max-w-2xl mx-auto">{subtitle}</p>}
        <div className="w-24 h-1 bg-[#C9A66B] mt-4 mb-2 mx-auto"></div>
      </div>
    )
  }
  
  export default SectionTitle
  
  
import { Star } from "lucide-react"

const TestimonialCard = ({ name, role, image, rating, testimonial }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md" data-aos="fade-up">
      <div className="flex items-center mb-4">
        <img src={image || "https://placehold.co/600x400.svg"} alt={name} className="w-16 h-16 rounded-full object-cover mr-4" />
        <div>
          <h4 className="font-semibold">{name}</h4>
          <p className="text-sm text-gray-600">{role}</p>
          <div className="flex mt-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className={`w-4 h-4 ${i < rating ? "text-yellow-500 fill-yellow-500" : "text-gray-300"}`} />
            ))}
          </div>
        </div>
      </div>
      <p className="italic text-gray-700">"{testimonial}"</p>
    </div>
  )
}

export default TestimonialCard


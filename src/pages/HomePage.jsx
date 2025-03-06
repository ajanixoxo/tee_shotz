"use client"
import { Link } from "react-router-dom"
import {
  Camera,
  Award,
  Clock,
  Heart,
  ArrowRight,
  MapPin,
  Phone,
  Mail,
  Instagram,
  Facebook,
  Twitter,
} from "lucide-react"
import SectionTitle from "../components/SectionTitle"
import BookingForm from "../components/BookingForm"
import ContactForm from "../components/ContactForm"
import TestimonialCard from "../components/TestimonialCard"
import ImageCard from "../components/ImageCard"
import PhotoGrid from "../components/PhotoGrid"

const heroImages = [
    // Replace these with your actual image paths
    { src: "/images/img (2).jpg", alt: "Wedding couple" },
    { src: "/images/img (25).jpg", alt: "Graduation ceremony" },
    { src: "/images/img (42).jpg", alt: "Birthday celebration" },
    { src: "/images/img (15).jpg", alt: "Portrait session" },
    { src: "/images/img (56).jpg", alt: "Corporate event" },
    { src: "/images/img (1).jpg", alt: "Family portrait" },
    { src: "/images/img (65).jpg", alt: "Product photography" },
    { src: "/images/img (59).jpg", alt: "Fashion shoot" },
    { src: "/images/img (70).jpg", alt: "Landscape" },
    { src: "/images/img (34).jpg", alt: "Street photography" },
    { src: "/images/img (22).jpg", alt: "Architecture" },
    { src: "/images/img (32).jpg", alt: "Food photography" },
    { src: "/images/img (13).jpg", alt: "Travel photography" },
    { src: "/images/img (56).jpg", alt: "Sports event" },
    { src: "/images/img (32).jpg", alt: "Concert photography" },
    { src: "/images/img (54).jpg", alt: "Pet photography" },
    { src: "/images/img (63).jpg", alt: "Nature close-up" },
    { src: "/images/img (34).jpg", alt: "Beach wedding" },
    { src: "/images/img (62).jpg", alt: "Newborn photography" },
    { src: "/images/img (34).jpg", alt: "Engagement shoot" },
    { src: "/images/img (42).jpg", alt: "Engagement shoot" },
    { src: "/images/img (12).jpg", alt: "Engagement shoot" },
    { src: "/images/img (24).jpg", alt: "Engagement shoot" },
    { src: "/images/img (14).jpg", alt: "Engagement shoot" },
  ]
  
const HomePage = () => {
  // Sample portfolio images for preview section
  const portfolioPreview = [
    {
      src: "/images/img (76).jpg",
      alt: "Wedding photography",
      category: "Weddings",
    },
    {
      src: "/images/img (36).jpg",
      alt: "Graduation photography",
      category: "Convocation",
    },
    {
      src: "/images/img (29).jpg",
      alt: "Birthday photography",
      category: "Birthday",
    },
    {
      src: "/images/img (5).jpg",
      alt: "Casual photography",
      category: "Casual",
    },
    {
      src: "/images/img (1).jpg",
      alt: "Event photography",
      category: "Events",
    },
    {
      src: "/images/img (52).jpg",
      alt: "Behind the scenes",
      category: "BTS",
    },
  ]

  // Sample testimonials
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Bride",
      image: "https://placehold.co/100x100",
      rating: 5,
      testimonial:
        "Tee_Shotz captured our wedding day perfectly. Every emotion, every detail was beautifully preserved. We couldn't be happier with the results!",
    },
    {
      name: "Michael Chen",
      role: "Corporate Client",
      image: "https://placehold.co/100x100",
      rating: 5,
      testimonial:
        "Professional, punctual, and incredibly talented. Our company event photos exceeded expectations and were delivered ahead of schedule.",
    },
    {
      name: "Jessica Williams",
      role: "Graduate",
      image: "https://placehold.co/100x100",
      rating: 4,
      testimonial:
        "My graduation photos are absolutely stunning! Tee_Shotz has a unique eye for composition and made me feel so comfortable during the shoot.",
    },
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
        <PhotoGrid images={heroImages} className="animate-slow-pan" />
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center text-white">
          <h1 className="handwriting text-5xl md:text-7xl font-bold mb-6" data-aos="fade-up">
            Capturing Moments, Creating Memories
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto" data-aos="fade-up" data-aos-delay="100">
            Professional photography services by Tee_Shotz
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4" data-aos="fade-up" data-aos-delay="200">
            <Link
              to="/portfolio"
              className="px-8 py-3 bg-white text-black rounded-md hover:bg-gray-200 transition-colors"
            >
              View Portfolio
            </Link>
            <a
              href="#book"
              className="px-8 py-3 bg-transparent border-2 border-white rounded-md hover:bg-white hover:bg-opacity-10 transition-colors"
            >
              Book a Session
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div data-aos="fade-right">
              <img
                src="/images/img (52).jpg"
                alt="Photographer portrait"
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>

            <div data-aos="fade-left">
              <SectionTitle title="About Tee_Shotz" center={false} />

              <p className="mb-6 text-gray-700">
                With over 10 years of experience in photography, I've dedicated my career to capturing life's most
                precious moments with creativity and passion. My journey began with a simple love for freezing time
                through the lens, and has evolved into a professional pursuit of visual storytelling.
              </p>

              <p className="mb-6 text-gray-700">
                I specialize in wedding photography, portraits, events, and commercial work. My style blends classic
                elegance with contemporary flair, ensuring timeless images that you'll treasure for generations.
              </p>

              <p className="mb-8 text-gray-700">
                Every client and every shoot is unique. I take the time to understand your vision and work
                collaboratively to exceed your expectations. My goal is not just to take pictures, but to create art
                that resonates with your personal story.
              </p>

              <div className="grid grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <div className="bg-gray-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Camera className="h-8 w-8" />
                  </div>
                  <h3 className="font-semibold">Quality</h3>
                </div>

                <div className="text-center">
                  <div className="bg-gray-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Award className="h-8 w-8" />
                  </div>
                  <h3 className="font-semibold">Experience</h3>
                </div>

                <div className="text-center">
                  <div className="bg-gray-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Heart className="h-8 w-8" />
                  </div>
                  <h3 className="font-semibold">Passion</h3>
                </div>
              </div>

              <a
                href="#contact"
                className="inline-flex items-center px-6 py-3 bg-black text-white rounded-md hover:bg-gray-800 transition-colors"
              >
                Get in Touch
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Preview Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <SectionTitle
            title="Portfolio Highlights"
            subtitle="A glimpse into my diverse photography collection"
            center={true}
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {portfolioPreview.map((item, index) => (
              <Link to={`/portfolio#${item.category.toLowerCase()}`} key={index}>
                <ImageCard
                  src={item.src || "/placeholder"}
                  alt={item.alt}
                  category={item.category}
                  onClick={() => {}}
                />
              </Link>
            ))}
          </div>

          <div className="text-center" data-aos="fade-up">
            <Link
              to="/portfolio"
              className="inline-flex items-center px-8 py-3 bg-black text-white rounded-md hover:bg-gray-800 transition-colors"
            >
              View Full Portfolio
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <SectionTitle
            title="Photography Services"
            subtitle="Professional photography tailored to your needs"
            center={true}
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm" data-aos="fade-up">
              <div className="bg-black w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <Heart className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Wedding Photography</h3>
              <p className="text-gray-700 mb-4">
                Capturing your special day with elegance and emotion. From preparation to reception, every moment
                preserved.
              </p>
              <Link to="/portfolio#weddings" className="inline-flex items-center text-black hover:underline">
                Learn more
                <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg shadow-sm" data-aos="fade-up" data-aos-delay="100">
              <div className="bg-black w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <Award className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Event Coverage</h3>
              <p className="text-gray-700 mb-4">
                Professional coverage for corporate events, parties, and special occasions. Documenting the atmosphere
                and key moments.
              </p>
              <Link to="/portfolio#events" className="inline-flex items-center text-black hover:underline">
                Learn more
                <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg shadow-sm" data-aos="fade-up" data-aos-delay="200">
              <div className="bg-black w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <Camera className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Portrait Sessions</h3>
              <p className="text-gray-700 mb-4">
                Individual and family portraits that capture personality and connections. Studio or location options
                available.
              </p>
              <Link to="/portfolio#portraits" className="inline-flex items-center text-black hover:underline">
                Learn more
                <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg shadow-sm" data-aos="fade-up">
              <div className="bg-black w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <Clock className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Graduation Photography</h3>
              <p className="text-gray-700 mb-4">
                Commemorate your academic achievements with professional graduation and convocation photography
                services.
              </p>
              <Link to="/portfolio#convocation" className="inline-flex items-center text-black hover:underline">
                Learn more
                <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg shadow-sm" data-aos="fade-up" data-aos-delay="100">
              <div className="bg-black w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <Camera className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Commercial Photography</h3>
              <p className="text-gray-700 mb-4">
                High-quality product and brand photography to showcase your business. Perfect for websites, social
                media, and marketing.
              </p>
              <Link to="/portfolio#commercial" className="inline-flex items-center text-black hover:underline">
                Learn more
                <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg shadow-sm" data-aos="fade-up" data-aos-delay="200">
              <div className="bg-black w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <Heart className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Birthday Photography</h3>
              <p className="text-gray-700 mb-4">
                Celebrate life's milestones with professional birthday photography. Capturing joy, laughter, and special
                moments.
              </p>
              <Link to="/portfolio#birthday" className="inline-flex items-center text-black hover:underline">
                Learn more
                <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="reviews" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <SectionTitle
            title="Client Testimonials"
            subtitle="What our clients say about our photography services"
            center={true}
          />

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={index}
                name={testimonial.name}
                role={testimonial.role}
                image={testimonial.image}
                rating={testimonial.rating}
                testimonial={testimonial.testimonial}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Booking Section */}
      <section id="book" className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div data-aos="fade-right">
              <SectionTitle title="Book a Session" center={false} />

              <p className="mb-6 text-gray-700">
                Ready to capture your special moments? Fill out the form to book a photography session with Tee_Shotz.
                We'll get back to you within 24 hours to discuss your requirements and confirm your booking.
              </p>

              <div className="bg-gray-50 p-6 rounded-lg mb-6">
                <h4 className="font-semibold mb-3">Why Book With Us?</h4>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <div className="bg-black rounded-full p-1 mr-3 mt-1">
                      <svg
                        className="w-3 h-3 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                    <span>Professional equipment and expertise</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-black rounded-full p-1 mr-3 mt-1">
                      <svg
                        className="w-3 h-3 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                    <span>Customized photography packages</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-black rounded-full p-1 mr-3 mt-1">
                      <svg
                        className="w-3 h-3 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                    <span>Quick turnaround time for edited photos</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-black rounded-full p-1 mr-3 mt-1">
                      <svg
                        className="w-3 h-3 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                    <span>Flexible scheduling options</span>
                  </li>
                </ul>
              </div>
            </div>

            <div data-aos="fade-left">
              <BookingForm />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <SectionTitle title="Get in Touch" subtitle="Have questions? Reach out to us" center={true} />

          <div className="grid md:grid-cols-2 gap-12">
            <div data-aos="fade-right">
              <ContactForm />
            </div>

            <div data-aos="fade-left">
              <div className="bg-white p-6 rounded-lg shadow-md h-full">
                <h3 className="handwriting text-2xl font-bold mb-6">Contact Information</h3>

                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-black rounded-full p-2 mr-4">
                      <MapPin className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Studio Address</h4>
                      <p className="text-gray-700">123 Photography Lane, Creative City</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-black rounded-full p-2 mr-4">
                      <Phone className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Phone</h4>
                      <p className="text-gray-700">+1 (555) 123-4567</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-black rounded-full p-2 mr-4">
                      <Mail className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Email</h4>
                      <p className="text-gray-700">info@teeshotz.com</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-black rounded-full p-2 mr-4">
                      <Clock className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Business Hours</h4>
                      <p className="text-gray-700">Monday - Friday: 9am - 6pm</p>
                      <p className="text-gray-700">Saturday: 10am - 4pm</p>
                      <p className="text-gray-700">Sunday: Closed (Except for events)</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  <h4 className="font-semibold mb-3">Follow Us</h4>
                  <div className="flex space-x-4">
                    <a href="#" className="bg-black text-white p-2 rounded-full hover:bg-gray-800 transition-colors">
                      <Instagram className="h-5 w-5" />
                    </a>
                    <a href="#" className="bg-black text-white p-2 rounded-full hover:bg-gray-800 transition-colors">
                      <Facebook className="h-5 w-5" />
                    </a>
                    <a href="#" className="bg-black text-white p-2 rounded-full hover:bg-gray-800 transition-colors">
                      <Twitter className="h-5 w-5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default HomePage


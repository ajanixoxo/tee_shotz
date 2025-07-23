import { Link } from "react-router-dom"
import { Camera, Instagram, Facebook, Twitter, Mail, Phone, MapPin } from "lucide-react"

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-700 text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <Link to="/" className="flex items-center mb-4">
              <Camera className="h-8 w-8 mr-2" />
              <span className="handwriting text-2xl font-bold">Tee_Shotz</span>
            </Link>
            <p className="mb-4">Capturing life's precious moments with an artistic touch. Every frame tells a story.</p>
            <div className="flex space-x-4">
              <a href="https://www.instagram.com/tee_shotz_/" className="hover:text-gray-300 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="https://web.facebook.com/fagbeji.tboy" className="hover:text-gray-300 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="http://x.com/@tee_shotz_ " className="hover:text-gray-300 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="handwriting text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:text-gray-300 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <a href="/#about" className="hover:text-gray-300 transition-colors">
                  About
                </a>
              </li>
              <li>
                <Link to="/portfolio" className="hover:text-gray-300 transition-colors">
                  Portfolio
                </Link>
              </li>
              <li>
                <a href="/#reviews" className="hover:text-gray-300 transition-colors">
                  Reviews
                </a>
              </li>
              <li>
                <a href="/#book" className="hover:text-gray-300 transition-colors">
                  Book a Session
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="handwriting text-xl font-bold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/portfolio#weddings" className="hover:text-gray-300 transition-colors">
                  Wedding Photography
                </Link>
              </li>
              <li>
                <Link to="/portfolio#events" className="hover:text-gray-300 transition-colors">
                  Event Coverage
                </Link>
              </li>
              <li>
                <Link to="/portfolio#portraits" className="hover:text-gray-300 transition-colors">
                  Portrait Sessions
                </Link>
              </li>
              <li>
                <Link to="/portfolio#casual" className="hover:text-gray-300 transition-colors">
                  Casual Photoshoots
                </Link>
              </li>
              <li>
                <Link to="/portfolio#commercial" className="hover:text-gray-300 transition-colors">
                  Commercial Photography
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="handwriting text-xl font-bold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-2 mt-0.5" />
                <span>Lagos State</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-2" />
                <span>+234 906 560 8632/+234 809 077 1265(Whatsapp)</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-2" />
                <span>Fagbejipaul@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p>&copy; {currentYear} Tee_Shotz Photography. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer


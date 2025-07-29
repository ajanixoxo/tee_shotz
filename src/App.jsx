import { Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import HomePage from "./pages/HomePage"
import PortfolioPage from "./pages/PortfolioPage"
import PortfolioCategoryPage from './pages/PortfolioCategoryPage';
import ScrollToTop from "./components/ScrollToTop"
import VideoPortfolioPage from "./components/VideoPortfolio"
function App() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <main className="min-h-screen ">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/portfolio/:category" element={<PortfolioCategoryPage />} />
          <Route path="/video-portfolio" element={<VideoPortfolioPage />} />
          <Route path="/video-portfolio/:category" element={<VideoPortfolioPage />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}

export default App


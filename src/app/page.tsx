import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";

export default function () {
  return (
    <>
    <div className="flex flex-col bg-gradient-to-r from-gray-200 to-blue-300 gap-4 min-h-screen">
      <Navbar />
      <HeroSection/>
    </div>
  
    </>
  )
}
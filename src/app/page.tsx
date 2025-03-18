import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";

export default function () {
  return (
    <>
    <div className="flex flex-col gap-4 min-h-screen">
      <Navbar />
      <HeroSection/>
    </div>
    </>
  )
}
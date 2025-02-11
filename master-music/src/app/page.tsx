import CarouselCard from "@/components/CarouselCard";
import FeaturedCourses from "@/components/FeaturedCourses";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Instructor from "@/components/Instructor";
import UpcomingWebinars from "@/components/UpcomingWebinars";
import Image from "next/image";

export default function Home() {
  return (
    <main className="main-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.2]">
      <HeroSection />
      <FeaturedCourses/>
      <CarouselCard/>
      <UpcomingWebinars/>
      <Instructor/>
      <Footer/>
    </main>
  );
}

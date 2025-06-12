import Layout from "../components/Layout.jsx";
import WhyChooseUs from "./WhyChooseUs.jsx";
import ResearchPage from "./ResearchPage.jsx";
import EventsPage from "./EventsPage.jsx";
import HeroSection from "../components/HeroSection.jsx";
import Happenings from "../components/Happenings.jsx";
import TestimonialSlider from "../components/Testimonial.jsx";
import CircleSlider from "../components/CompanyTieUps.jsx";
import SemiCircularLogoSlider from "../components/CompanyTieUps.jsx";
import LogoCarousel from "../components/CompanyTieUps.jsx";
import LogoSlider from "../components/CompanyTieUps.jsx";
import CircularLogoCarousel from "../components/CompanyTieUps.jsx";
import HiringPartnersSection from "../components/CompanyTieUps.jsx";

function Home() {
  const logos = [
    'https://pngimg.com/d/microsoft_PNG17.png',
    'https://pngimg.com/d/microsoft_PNG17.png',
    'https://pngimg.com/d/microsoft_PNG17.png',
    'https://pngimg.com/d/microsoft_PNG17.png',
    'https://pngimg.com/d/microsoft_PNG17.png',
    'https://pngimg.com/d/microsoft_PNG17.png',
    'https://pngimg.com/d/microsoft_PNG17.png',
    
  ];
  return (
    <>
      <Layout>
        <HeroSection  />
        <Happenings />
        <TestimonialSlider />
        <WhyChooseUs />
        <ResearchPage />
        <EventsPage />
        
        <HiringPartnersSection />
      </Layout>
    </>
  );
}

export default Home;

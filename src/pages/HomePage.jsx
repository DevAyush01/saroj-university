import Layout from "../components/Layout.jsx";
import WhyChooseUs from "./WhyChooseUs.jsx";
import ResearchPage from "./ResearchPage.jsx";
import EventsPage from "./EventsPage.jsx";
import HeroSection from "../components/HeroSection.jsx";
import Happenings from "../components/Happenings.jsx";
import CompaniesTieUps from "../components/Tieups.jsx";
import NewsSection from "../components/NewsAndEvents.jsx";
import FloatingAdmissionAlert from "../components/FloatingAdmissionAlert.jsx";
import TestimonialSlider from "../components/Testimonial.jsx";

function Home() {
  return (
    <>
      <Layout>
        <FloatingAdmissionAlert/>
        <HeroSection/>
        <NewsSection/>
        <CompaniesTieUps/>
        <Happenings />
        <WhyChooseUs />
        <TestimonialSlider/>
        <ResearchPage />
        <EventsPage />
      </Layout>
    </>
  );
}

export default Home;

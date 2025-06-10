import Layout from "../components/Layout.jsx";
import WhyChooseUs from "./WhyChooseUs.jsx";
import ResearchPage from "./ResearchPage.jsx";
import EventsPage from "./EventsPage.jsx";
import HeroSection from "../components/HeroSection.jsx";
import Happenings from "../components/Happenings.jsx";

function Home() {
  return (
    <>
      <Layout>
        <HeroSection/>
        <Happenings />
        <WhyChooseUs />
        <ResearchPage />
        <EventsPage />
      </Layout>
    </>
  );
}

export default Home;

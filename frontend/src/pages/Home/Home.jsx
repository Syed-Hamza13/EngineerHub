import Navbar from "../../components/layout/Navbar";
// import Footer from "../../components/layout/Footer";

// import HeroSection from "../../components/home/HeroSection";
import HeroSection from "../../components/home/HeroSection";
import TrustSection from "../../components/home/TrustSection";
import FeaturesSection from "../../components/home/FeaturesSection";
import WorkflowSection from "../../components/home/WorkflowSection";
import CTASection from "../../components/home/CTASection";


function Home() {
  return (
    <>
      <Navbar />

      <main>
        <HeroSection />
        <TrustSection />
        <FeaturesSection />
        <WorkflowSection />
        <CTASection />
      </main>

      {/* <Footer /> */}
    </>
  );
}

export default Home;
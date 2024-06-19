import AboutUsSection from "../components/aboutUsSection/AboutUsSection";
import BannerSection from "../components/bannerSection/BannerSection";
import CardSectionComponent from "../components/cardSection/CardSectionComponent";
import FaqSection from "../components/faqSection/FaqSection";
import HeroSection from "../components/heroSection/HeroSection";

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <CardSectionComponent />
      <AboutUsSection />
      <BannerSection />
      <FaqSection />
    </>
  );
};

export default HomePage;

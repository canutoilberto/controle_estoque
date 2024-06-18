import "@mantine/core/styles.css";

import { MantineProvider } from "@mantine/core";
import Navbar from "./components/navbar/Navbar";
import HeroSection from "./components/heroSection/HeroSection";
import CardSectionComponent from "./components/cardSection/CardSectionComponent";
import BannerSection from "./components/bannerSection/BannerSection";
import FaqSection from "./components/faqSection/FaqSection";
import FooterSection from "./components/footerSection/FooterSection";

export default function App() {
  return (
    <MantineProvider>
      <Navbar />
      <HeroSection />
      <CardSectionComponent />
      <BannerSection />
      <FaqSection />
      <FooterSection />
    </MantineProvider>
  );
}

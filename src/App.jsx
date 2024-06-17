import "@mantine/core/styles.css";

import { MantineProvider } from "@mantine/core";
import Navbar from "./components/navbar/Navbar";
import HeroSection from "./components/heroSection/HeroSection";

export default function App() {
  return (
    <MantineProvider>
      <Navbar />
      <HeroSection />
    </MantineProvider>
  );
}

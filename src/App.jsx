import "@mantine/core/styles.css";

import { MantineProvider } from "@mantine/core";
import Navbar from "./components/navbar/Navbar";
import FooterSection from "./components/footerSection/FooterSection";
import AffixComponent from "./components/affixComponent/AffixComponent";
import HomePage from "./pages/HomePage";

export default function App() {
  return (
    <MantineProvider>
      <Navbar />
      <HomePage />
      <FooterSection />
      <AffixComponent />
    </MantineProvider>
  );
}

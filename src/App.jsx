import "@mantine/core/styles.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MantineProvider } from "@mantine/core";
import Navbar from "./components/navbar/Navbar";
import FooterSection from "./components/footerSection/FooterSection";
import AffixComponent from "./components/affixComponent/AffixComponent";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/loginPage/LoginPage";
import ContactPage from "./pages/contactPage/ContactPage";

export default function App() {
  return (
    <MantineProvider>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </BrowserRouter>
      <FooterSection />
      <AffixComponent />
    </MantineProvider>
  );
}

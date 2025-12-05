import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import ContactUs from "../pages/ContactUs";
import AboutUs from "../pages/AboutUs";
import OurServices from "../pages/OurServices";
import Team from "../pages/Team";
import Gallery from "../pages/Gallery";
import Product from "../pages/Product";
import News1 from "../pages/LatestNewsPages/NewsMeetingWithDefenceMinister";
import East_Tech_2025 from "../pages/LatestNewsPages/ East_Tech_2025";
import East_Tech from "../pages/LatestNewsPages/East_Tech";
import ThankYouPage from "../components/contact/ThankYouPage";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<ContactUs />} />
      <Route path="/about" element={<AboutUs />} />
      <Route path="/ourservices" element={<OurServices />} />
      <Route path="/team" element={<Team />} />
      <Route path="/gallery" element={<Gallery />} />
      {/** Dynamic product route */}
      <Route path="/products/:slug" element={<Product />} />
      {/**  news route */}
      <Route
        path="/news/meeting-with-minister-of-state-for-defence"
        element={<News1 />}
      />
      <Route path="/news/east-tech-X-2025" element={<East_Tech_2025 />} />
      <Route path="/news/east-tech-X-2025" element={<East_Tech_2025 />} />{" "}
      <Route
        path="/news/east-tech-2025-participation-certificate-of-appreciation"
        element={<East_Tech />}
      />

      {/** thank you page */}
      <Route path="contact/thank-you" element={<ThankYouPage />} />
    </Routes>
  );
}

export default AppRoutes;

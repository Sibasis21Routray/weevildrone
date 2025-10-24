import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import ContactUs from "../pages/ContactUs";
import AboutUs from "../pages/AboutUs";
import OurServices from "../pages/OurServices";
import Team from "../pages/Team";
import Gallery from "../pages/Gallery";
import Product from "../pages/Product";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contactus" element={<ContactUs />} />
      <Route path="/about" element={<AboutUs />} />
      <Route path="/ourservices" element={<OurServices />} />
      <Route path="/team" element={<Team />} />
      <Route path="/gallery" element={<Gallery />} />

      {/** Dynamic product route */}
      <Route path="/products/:slug" element={<Product />} />
    </Routes>
  );
}

export default AppRoutes;

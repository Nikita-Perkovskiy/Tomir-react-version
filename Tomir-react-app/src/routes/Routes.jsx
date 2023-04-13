import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainPage from "../pages/MainPage/MainPage";
import KatalogPage from "../pages/KatalogPage/KatalogPage";
import ContactPage from "../pages/ContactPage/ContactPage";
import ServicePage from "../pages/ServicePage/ServicePage";

const AppRouter = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/katalog" element={<KatalogPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/services" element={<ServicePage />} />
        </Routes>
      </Router>
    </>
  );
};

export default AppRouter;

import {
  BrowserRouter as Router,
  Routes,
  Route,
  HashRouter,
} from "react-router-dom";
import MainPage from "../pages/MainPage/MainPage";
import CatalogPage from "../pages/CatalogPage/CatalogPage";
import ContactPage from "../pages/ContactPage/ContactPage";
import ServicePage from "../pages/ServicePage/ServicePage";
import AdminPage from "../components/LayoutElements/AdminPage/AdminPage";

const AppRouter = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/katalog" element={<CatalogPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/services" element={<ServicePage />} />
          <Route path="/admin" element={<AdminPage />} />
        </Routes>
      </Router>
    </>
  );
};

export default AppRouter;

import ContactInformation from "../../components/ContactInformation/ContactInformation";
import ContactMap from "../../components/ContactMap/ContactMap";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import "./index.scss";

const ContactPage = () => {
  return (
    <>
      <Header />
      <section className="contactPage-section__wrapper">
        <ContactInformation />
      </section>
      <section className="contactPage-section__wrapper">
        <ContactMap />
      </section>
      <Footer />
    </>
  );
};

export default ContactPage;

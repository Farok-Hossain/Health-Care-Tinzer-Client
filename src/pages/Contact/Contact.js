import CommonHeader from "../../components/CommonHeader/CommonHeader";
import ContactCard from "../../components/ContactCard/ContactCard";
import ContactFrom from "../../components/ContactForm/ContactFrom";
import img from "../../images/app.png";
import "./Contact.css";

const Contact = () => {
  return (
    <>
      <div className="contact_container">
        <CommonHeader img={img} header={"Contact"} flex={false}></CommonHeader>
      </div>
      <ContactCard></ContactCard>
      <ContactFrom></ContactFrom>
    </>
  );
};

export default Contact;

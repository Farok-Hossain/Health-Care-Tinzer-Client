import OurServices from "../../components/OurServices/OurServices";
import "./Services.css";
import CommonHeader from "../../components/CommonHeader/CommonHeader";
import img from "../../images/about-3.jpg";
import "./Services.css";

const Services = () => {
  return (
    <>
      <div className="services_container">
        <CommonHeader img={img} header="Services"></CommonHeader>
      </div>
      <div className="services_section">
        <OurServices services={true}></OurServices>
      </div>
    </>
  );
};

export default Services;

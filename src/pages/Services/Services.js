import OurServices from "../../components/OurServices/OurServices";
import "./Services.css";
import CommonHeader from "../../components/CommonHeader/CommonHeader";
import img from "../../images/about-3.jpg";

const Services = () => {
  return (
    <>
      <CommonHeader img={img} header="About"></CommonHeader>
      <div className="services_section">
        <OurServices services={true}></OurServices>
      </div>
    </>
  );
};

export default Services;

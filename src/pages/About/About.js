import CommonHeader from "../../components/CommonHeader/CommonHeader";
import img from "../../images/about.png";
import Abouts from "../../components/About/About";
import imgs from "../../images/about-3.jpg";
import "./About.css";

const About = () => {
  return (
    <>
      <div className="about_container">
        <CommonHeader img={img} header="About"></CommonHeader>
      </div>
      <Abouts img={imgs}></Abouts>
    </>
  );
};

export default About;

import CommonHeader from "../../components/CommonHeader/CommonHeader";
import img from "../../images/about.png";
import Abouts from "../../components/About/About";
import imgs from "../../images/about-3.jpg";

const About = () => {
  return (
    <>
      <CommonHeader img={img} header="About"></CommonHeader>
      <Abouts img={imgs}></Abouts>
    </>
  );
};

export default About;

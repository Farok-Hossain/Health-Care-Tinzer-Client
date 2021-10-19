import { Col, Row } from "react-bootstrap";
import Common from "../Common/Common";
import AboutData from "./AboutData";
import checkMark from "../../images/check-mark.svg";
import "./About.css";

const About = () => {
  const aboutItemData = [
    {
      services: "Cold, Cough, Flu",
    },
    {
      services: "Chronic Disease",
    },
    {
      services: "Allergies",
    },
    {
      services: "Pain",
    },
    {
      services: "Women's Health issues",
    },
    {
      services: "Medication Questions",
    },
  ];
  return (
    <>
      <div className="Common_container">
        <Common data={AboutData}>
          <Row className="about_items">
            {aboutItemData.map((item, ind) => (
              <Col lg="6" key={ind}>
                <div className="about_item">
                  <img src={checkMark} alt="" />
                  <h5>{item.services}</h5>
                </div>
              </Col>
            ))}
          </Row>
        </Common>
      </div>
    </>
  );
};

export default About;

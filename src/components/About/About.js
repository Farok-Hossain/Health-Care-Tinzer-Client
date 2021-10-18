import { Col, Row } from "react-bootstrap";
import Common from "../Common/Common";
import AboutData from "./AboutData";
import checkMark from "../../images/check-mark.svg";
import "./About.css";

const About = () => {
  return (
    <>
      <div className="Common_container">
        <Common data={AboutData}>
          <Row className="about_items">
            <Col lg="6">
              <div className="about_item">
                <img src={checkMark} alt="" />
                <h5>Cold, Cough, Flu</h5>
              </div>
            </Col>
            <Col lg="6">
              <div className="about_item">
                <img src={checkMark} alt="" />
                <h5>Chronic Disease</h5>
              </div>
            </Col>
            <Col lg="6">
              <div className="about_item">
                <img src={checkMark} alt="" />
                <h5>Allergies</h5>
              </div>
            </Col>
            <Col lg="6">
              <div className="about_item">
                <img src={checkMark} alt="" />
                <h5>Pain</h5>
              </div>
            </Col>
            <Col lg="6">
              <div className="about_item">
                <img src={checkMark} alt="" />
                <h5>Women's Health issues</h5>
              </div>
            </Col>
            <Col lg="6">
              <div className="about_item">
                <img src={checkMark} alt="" />
                <h5>Medication Questions</h5>
              </div>
            </Col>
          </Row>
        </Common>
      </div>
    </>
  );
};

export default About;

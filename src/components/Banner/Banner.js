import { Col, Container, Row } from "react-bootstrap";
import { Fade } from "react-reveal";
import "./Banner.css";
import bannerImg from "../../images/dr/doctor.png";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="banner">
      <Container>
        <div className="main_banner">
          <Row className="align-items-center">
            <Col sm="12" lg="6" className="banner_content">
              <Fade left distance="60px" duration={3000}>
                <h1>
                  TeleHealth Services Rapid Response To Coronavirus Pandemic
                </h1>
                <p>
                  MedDoctors Are A Medical And Health Department Provider
                  Institutions. Suitable For Healthcare, Medical, Doctor,
                  Dental, Dentist, Pharmacy, Health And Any Related Medical Care
                  Field.
                </p>
                <div className="filtering mb-4">
                  <div className="filter_items">
                    <div className="filter_item">
                      <p>Specialist</p> <i className="fas fa-chevron-down"></i>
                    </div>
                    <div className="filter_item">
                      <p>Category</p> <i className="fas fa-chevron-down"></i>
                    </div>
                    <div className="filter_item">
                      <p>Condition</p> <i className="fas fa-chevron-down"></i>
                    </div>
                    <div className="filter_item">
                      <div className="filter_wrapper">
                        <input type="text" name="" id="" placeholder="Search" />
                        <i className="fas fa-search"></i>
                      </div>
                    </div>
                  </div>
                </div>
                <Link to="/" className="make_an_appointment">
                  Make An Appointment
                </Link>
              </Fade>
            </Col>
            <Col sm="12" lg="6">
              <Fade right distance="60px" duration={3000}>
                <div className="banner_img_div">
                  <img className="banner_img" src={bannerImg} alt="" />
                </div>
              </Fade>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default Banner;

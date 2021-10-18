import { Col, Container, Row } from "react-bootstrap";
import OurServicesData from "./OurServicesData";
import "./OurServices.css";
import { Link } from "react-router-dom";

const OurServices = () => {
  const ourServiceData = OurServicesData();
  return (
    <>
      <div className="service_img"></div>
      <div className="service_container">
        <Container>
          <div className="service_header_container">
            <div className="service_header">
              <h5>Our Services</h5>
              <h1>Our Healthcare Services</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
                ipsum suspendisse
              </p>
            </div>
          </div>
          <Row>
            {ourServiceData.map((item, ind) => {
              const { icon, name, desc } = item;
              return (
                <Col
                  className="service_item"
                  sm="12"
                  md="6"
                  lg="4"
                  key={ind + "or"}
                >
                  <div className="service_card">
                    <div className="service_icon">{icon}</div>
                    <h2>{name}</h2>
                    <p>{desc}</p>
                    <Link to="/">Read More +</Link>
                  </div>
                </Col>
              );
            })}
          </Row>
        </Container>
      </div>
    </>
  );
};

export default OurServices;

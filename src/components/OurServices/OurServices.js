import { Col, Container, Row } from "react-bootstrap";
import OurServicesData from "./OurServicesData";
import "./OurServices.css";
import { useHistory } from "react-router-dom";

const OurServices = ({ services }) => {
  const ourServiceData = OurServicesData();
  const history = useHistory();
  const handleCardBtn = (id) => {
    history.push(`/service/${id}`);
  };

  const style = {
    color: services ? "black" : "",
  };

  return (
    <>
      <div className="service_img"></div>
      <div className="service_container">
        <Container>
          <div className="service_header_container">
            <div className="service_header">
              <h5 style={style}>Our Services</h5>
              <h1 style={style}>Our Healthcare Services</h1>
              <p style={style}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
                ipsum suspendisse
              </p>
            </div>
          </div>
          <Row>
            {ourServiceData.map((item, ind) => {
              const { id, icon, name, desc } = item;
              return (
                <Col className="service_item" sm="12" md="6" lg="4" key={id}>
                  <div className="service_card">
                    <div className="service_icon">{icon}</div>
                    <h2>{name}</h2>
                    <p>{desc}</p>
                    <span onClick={() => handleCardBtn(id)}>Read More +</span>
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

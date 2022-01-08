import { Col, Container, Row } from "react-bootstrap";
import "./ContactCard.css";
import { Fade } from "react-reveal";

const ContactCard = () => {
  return (
    <Container>
      <Fade bottom duration={3000} distance="60px">
        <Row className="g-4 my-5">
          <Col className="contact_card" lg="4" md="6" sm="12">
            <div className="d-flex align-items-center justify-content-center flex-column py-4">
              <div className="contact_icon">
                <i className="fas fa-envelope"></i>
              </div>
              <h4>Email Here</h4>
              <span>
                <a href="mailto:admin@tinzer.com">admin@tinzer.com</a>
              </span>
              <span>
                <a href="mailto:admin@tinzer.com">info@tenzer.com</a>
              </span>
            </div>
          </Col>
          <Col className="contact_card" lg="4" md="6" sm="12">
            <div className="d-flex align-items-center justify-content-center flex-column py-4">
              <div className="contact_icon">
                <i className="fas fa-map-marker-alt"></i>
              </div>
              <h4>Location Here</h4>
              <p>2750 Quadra Street Victoria,</p>
              <p>New York, Canada</p>
            </div>
          </Col>
          <Col className="contact_card" lg="4" md="6" sm="12">
            <div className="d-flex align-items-center justify-content-center flex-column py-4">
              <div className="contact_icon">
                <i className="fas fa-phone"></i>
              </div>
              <h4>Call Here</h4>
              <span>
                <a href="tel:1234567890">+123 456 7890</a>
              </span>
              <span>
                <a href="tel:1234567890">+241 452 4526s</a>
              </span>
            </div>
          </Col>
        </Row>
      </Fade>
    </Container>
  );
};

export default ContactCard;

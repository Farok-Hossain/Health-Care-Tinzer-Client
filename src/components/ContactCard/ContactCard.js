import { Col, Container, Row } from "react-bootstrap";
import "./ContactCard.css";

const ContactCard = () => {
  return (
    <Container>
      <Row className="g-4 my-5">
        <Col className="contact_card" lg="4" md="6" sm="12">
          <div className="d-flex align-items-center justify-content-center flex-column py-4">
            <div className="contact_icon">
              <i classsName="fas fa-envelope"></i>
            </div>
            <h4>Email Here</h4>
            <span>
              <a href="mailto:admin@tinzer.com">admin@tinzer.com</a>
            </span>
            <p>
              <a href="mailto:admin@tinzer.com">info@tinzer.com</a>
            </p>
          </div>
        </Col>
        <Col className="contact_card" lg="4" md="6" sm="12">
          <div className="d-flex align-items-center justify-content-center flex-column py-4">
            <div className="contact_icon">
              <i classsName="fas fa-map-marker-alt"></i>
            </div>
            <h4>Location Here</h4>
            <p>2750 Quadra Street Victoria,</p>
            <p>New York, Canada</p>
          </div>
        </Col>
        <Col className="contact_card" lg="4" md="6" sm="12">
          <div className="d-flex align-items-center justify-content-center flex-column py-4">
            <div className="contact_icon">
              <i classsName="fas fa-phone"></i>
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
    </Container>
  );
};

export default ContactCard;

import { Col, Container, Row } from "react-bootstrap";
import "./Footer.css";
import img1 from "../../../images/dr/image2.jpg";
import img2 from "../../../images/dr/image1 (1).jpg";
import img3 from "../../../images/dr/image2.jpg";
import img4 from "../../../images/dr/image3.jpg";
import img5 from "../../../images/dr/image4.jpg";
import img6 from "../../../images/dr/image4.jpg";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer_container">
      <Container>
        <Row>
          <Col lg="3" md="4" sm="6">
            <div className="single-footer-widget">
              <h3>Tinzer</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore aliqua.
              </p>
              <ul className="footer-social">
                <li className="social_icon">
                  <i className="fab fa-facebook-f"></i>
                </li>
                <li className="social_icon">
                  <i className="fab fa-twitter"></i>
                </li>
                <li className="social_icon">
                  <i className="fab fa-pinterest-p"></i>
                </li>
                <li className="social_icon">
                  <i className="fab fa-instagram"></i>
                </li>
              </ul>
            </div>
          </Col>
          <Col lg="3" md="4" sm="6">
            <div className="single-footer-widget">
              <h3>Instagram</h3>
              <Row className="g-3">
                <Col className="instragam_img_div" lg="4" xs="6">
                  <img className="img-fluid instragam_img" src={img1} alt="" />
                </Col>
                <Col className="instragam_img_div" lg="4" xs="6">
                  <img className="img-fluid instragam_img" src={img2} alt="" />
                </Col>
                <Col className="instragam_img_div" lg="4" xs="6">
                  <img className="img-fluid instragam_img" src={img3} alt="" />
                </Col>
                <Col className="instragam_img_div" lg="4" xs="6">
                  <img className="img-fluid instragam_img" src={img4} alt="" />
                </Col>
                <Col className="instragam_img_div" lg="4" xs="6">
                  <img className="img-fluid instragam_img" src={img5} alt="" />
                </Col>
                <Col className="instragam_img_div" lg="4" xs="6">
                  <img className="img-fluid instragam_img" src={img6} alt="" />
                </Col>
              </Row>
            </div>
          </Col>
          <Col lg="3" md="4" sm="6">
            <div className="single-footer-widget">
              <h3>Tinzer</h3>
              <ul className="footer-quick-links">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/about">About</Link>
                </li>
                <li>
                  <Link to="/services">Services</Link>
                </li>

                <li>
                  <Link to="/solution">Solution</Link>
                </li>
                <li>
                  <Link to="/contact">Contact</Link>
                </li>
                <li>
                  <Link to="sign-in/">Sign In</Link>
                </li>
              </ul>
            </div>
          </Col>
          <Col lg="3" md="4" sm="6">
            <div className="single-footer-widget">
              <h3>Contact</h3>
              <div className="footer-info-contact">
                <i className="fas fa-phone"></i>
                <h3>Phone</h3>
                <span>
                  <a href="tel:123456123">+123(456)123</a>
                </span>
              </div>
              <div className="footer-info-contact">
                <i className="fas fa-envelope"></i>
                <h3>Email</h3>
                <span>
                  <a href="mailto:info@tinzer.com">info@tinzer.com</a>
                </span>
              </div>
              <div className="footer-info-contact">
                <i className="fas fa-address-card"></i>
                <h3>Address</h3>
                <span>3254-425 NW-2nd Ave, Miami USA</span>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;

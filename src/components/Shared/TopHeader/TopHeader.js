import "./TopHeader.css";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";

const TopHeader = () => {
  const { signInUsingGoogle } = useAuth();
  const handleSignIn = () => {
    signInUsingGoogle();
  };
  return (
    <div className="top_banner">
      <Container className="d-flex justify-content-between">
        <div className="contact_details">
          <div className="contact_details_items">
            <div className="contact_details_icon">
              <i className="far fa-clock"></i>
            </div>
            <div className="contact_details_text">Mon-Fri 09-18.00</div>
          </div>
          <div className="contact_details_items">
            <div className="contact_details_icon">
              <i className="fas fa-headset"></i>
            </div>
            <div className="contact_details_text">Call Us: +821-456-241</div>
          </div>
          <div className="contact_details_items">
            <div className="contact_details_icon">
              <i className="fab fa-telegram-plane"></i>
            </div>
            <div className="contact_details_text">hello@info.com</div>
          </div>
        </div>
        <div className="social_icons_signin">
          <div className="social_links">
            <div className="social_icon">
              <i className="fab fa-facebook-f"></i>
            </div>
            <div className="social_icon">
              <i className="fab fa-twitter"></i>
            </div>
            <div className="social_icon">
              <i className="fab fa-pinterest-p"></i>
            </div>
            <div className="social_icon">
              <i className="fab fa-instagram"></i>
            </div>
          </div>
          <div className="signin_signup">
            <button onClick={handleSignIn}>Sign In</button>
            <Link to="/sign-up" className="signup-btn">
              Sign Up
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default TopHeader;

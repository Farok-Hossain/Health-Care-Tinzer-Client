import { useState } from "react";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import "./CommonForm.css";
import { useLocation, useHistory } from "react-router-dom";

const CommonForm = ({ signin }) => {
  const location = useLocation();
  const history = useHistory();

  const { setUser, setError, signInUsingGoogle, signInUsingGithub } = useAuth();

  const [userRegistration, setUserRegistration] = useState({
    username: "",
    email: "",
    password: "",
  });
  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setUserRegistration({ ...userRegistration, [name]: value });
  };

  const redirect_uri = location.state?.from || "/home";

  const handleGoogleLogin = () => {
    signInUsingGoogle()
      .then((data) => {
        setError("");
        setUser(data.user);
        history.push(redirect_uri);
        console.log(redirect_uri);
      })
      .catch((error) => {
        setError(error);
      });
  };

  return (
    <div className="form">
      <div className="form_title">
        <h3>Welcome Back!</h3>
        <p>Please Sign In to Your account.</p>
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <Row>
          {!signin && (
            <Col lg="12">
              <div className="form_group">
                <input
                  placeholder="Username"
                  className="form_control"
                  type="text"
                  name="username"
                  onChange={handleInput}
                />
              </div>
            </Col>
          )}
          <Col lg="12">
            <div className="form_group">
              <input
                placeholder="Email"
                className="form_control"
                type="email"
                name="email"
                onChange={handleInput}
              />
            </div>
          </Col>
          <Col lg="12">
            <div className="form_group">
              <input
                placeholder="Password"
                className="form_control"
                type="password"
                name="password"
                onChange={handleInput}
              />
            </div>
          </Col>
          <Col lg="12">
            <div className="forgot_password">
              <Link to="/">Forgot Password</Link>
            </div>
          </Col>
          <Col lg="12">
            <div className="send_btn">
              <button type="submit" className="default_btn">
                Log In Now
              </button>
            </div>
          </Col>
          <Col lg="12">
            <span className="signin_or">OR</span>
          </Col>
          <Col lg="6">
            <button className="sign_in_btn" onClick={handleGoogleLogin}>
              <i className="fab fa-google-plus-g"></i>Sign In With Google
            </button>
          </Col>
          <Col lg="6">
            <button className="sign_in_btn github" onClick={signInUsingGithub}>
              <i className="fab fa-github"></i>Sign In With GitHub
            </button>
          </Col>
          <Col lg="12">
            {signin ? (
              <span>
                Don't have account? <Link to="/sign-up">Signup!</Link>
              </span>
            ) : (
              <span>
                Already a registered user? <Link to="/sign-in">Login!</Link>
              </span>
            )}
          </Col>
        </Row>
      </form>
    </div>
  );
};

export default CommonForm;

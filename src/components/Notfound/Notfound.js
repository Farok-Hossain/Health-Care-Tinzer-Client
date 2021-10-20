import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import notFoundImg from "../../images/404 Error.svg";
import "./Notfound.css";

const Notfound = () => {
  return (
    <div className="not_found">
      <Container>
        <div
          className="d-flex flex-column align-items-center justify-content-center"
          style={{ height: "100vh" }}
        >
          <img className="notfound-img" src={notFoundImg} alt="" />
          <button className="btn btn-primary">
            <Link to="/">Back to home</Link>
          </button>
        </div>
      </Container>
    </div>
  );
};

export default Notfound;

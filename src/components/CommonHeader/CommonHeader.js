import { Col, Container, Row } from "react-bootstrap";
import "./CommonHeader.css";
const CommonHeader = ({ img, header, flex }) => {
  return (
    <div className="common_container">
      <Container className="h-100">
        <Row className={flex} id="common_header_items">
          <Col sm="12" md="6" lg="6">
            <div className="common_header">
              <h1>{header}</h1>
            </div>
          </Col>
          <Col
            sm="12"
            md="6"
            lg="6"
            className="h-100 d-flex align-items-center"
          >
            <div className="common_header">
              <img className="img-fluid h-75 " src={img} alt="" />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default CommonHeader;

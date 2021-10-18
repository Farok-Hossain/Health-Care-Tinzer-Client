import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Common.css";

const Common = ({ children, ...rest }) => {
  const [reverse, setReverse] = useState("");
  const { flexReverse, img, name, header, desc } = rest.data;
  useEffect(() => {
    setReverse(flexReverse);
  }, [flexReverse]);
  console.log(reverse);
  return (
    <Container>
      <Row className={reverse} id="common_section">
        <Col className="common_img" md="12" lg="6">
          <img className="img-fluid" src={img} alt="" />
        </Col>
        <Col className="common_content" md="12" lg="6">
          <h4>{name}</h4>
          <h1>{header}</h1>
          <p>{desc}</p>
          {children}
        </Col>
      </Row>
    </Container>
  );
};

export default Common;

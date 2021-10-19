import CommonHeader from "../CommonHeader/CommonHeader";
import img from "../../images/about.png";
import { Card, Col, Row } from "react-bootstrap";
import serviceData from "../OurServices/OurServicesData";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import "./ServiceDetails.css";

const ServiceDetails = () => {
  const [data, setData] = useState([]);
  const [detail, setDetail] = useState({});

  const { serviceId } = useParams();

  useEffect(() => {
    setData(serviceData);
  }, []);

  useEffect(() => {
    if (data.length == 0) {
    } else {
      const pDetail = data.find((data) => data.id == serviceId);
      setDetail(pDetail);
    }
  }, [data]);
  console.log(detail);
  return (
    <>
      <CommonHeader img={img} header="setDetail Details"></CommonHeader>
      <div className="container my-4">
        <Row>
          <Col
            lg="12"
            className="d-flex align-items-center justify-content-center"
          >
            <Card className="service_card_details">
              <Card.Img variant="top" src={detail.img} />
              <Card.Body>
                <Card.Text>
                  <h4>{detail.name}</h4>
                  <p>{detail.desc}</p>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default ServiceDetails;

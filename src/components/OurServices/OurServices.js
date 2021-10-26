import { Col, Container, Row } from "react-bootstrap";
import OurServicesData from "./OurServicesData";
import "./OurServices.css";
import { useHistory } from "react-router-dom";
import CommonSectionHeader from "../CommonSectionHeader/CommonSectionHeader";
import { Fade } from "react-reveal";

const OurServices = ({ services }) => {
  const ourServiceData = OurServicesData();
  const history = useHistory();
  const handleCardBtn = (id) => {
    history.push(`/service/${id}`);
  };

  const style = {
    color: services ? "black" : "",
  };

  const data = {
    headline: "Our Services",
    header: "Our Healthcare Services",
    desc: "HASBD helps by offering a wide range of convenient healthcare services (Hospital Info, Doctors Appointment and Ambulance Service) for you and your family. These can help you save time, money and make it easier to deal with life's most unexpected events.",
  };

  return (
    <>
      <div className="service_img"></div>
      <div className="service_container">
        <Container>
          <Fade bottom distance="60px" duration={3000}>
            <CommonSectionHeader
              style={style}
              data={data}
            ></CommonSectionHeader>
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
          </Fade>
        </Container>
      </div>
    </>
  );
};

export default OurServices;

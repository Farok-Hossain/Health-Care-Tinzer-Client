import { Col, Container, Row } from "react-bootstrap";
import BannerItem from "./BannerItem";
import { Fade } from "react-reveal";
import "./BannerCard.css";

const BannerCard = () => {
  return (
    <div className="banner_container">
      <Container>
        <Fade distance="40px" duration={3000} bottom exit={false}>
          <Row>
            {BannerItem.map((item, ind) => {
              const { icon, header, desc } = item;
              return (
                <Col className="my-md-1  my-3" sm="12" md="6" lg="4" key={ind}>
                  <div className="banner_wrapper">
                    <div className="img_div">
                      <img src={icon} alt="" />
                    </div>
                    <h4>{header}</h4>
                    <p>{desc}</p>
                  </div>
                </Col>
              );
            })}
          </Row>
        </Fade>
      </Container>
    </div>
  );
};

export default BannerCard;

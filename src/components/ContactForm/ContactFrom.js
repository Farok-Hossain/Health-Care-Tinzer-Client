import { Col, Container, Row } from "react-bootstrap";
import { Fade } from "react-reveal";
import CommonSectionHeader from "../CommonSectionHeader/CommonSectionHeader";
import "./ContactFrom.css";

const ContactFrom = () => {
  const style = {
    color: "black",
  };

  const data = {
    headline: "Our Services",
    header: "Our Healthcare Services",
    desc: "HASBD helps by offering a wide range of convenient healthcare services (Hospital Info, Doctors Appointment and Ambulance Service) for you and your family. These can help you save time, money and make it easier to deal with life's most unexpected events.",
  };
  const my = {
    margin: "50px 0",
  };
  return (
    <Container>
      <Fade bottom distance="60px" duration={3000}>
        <div className="mb-3">
          <CommonSectionHeader style={style} data={data}></CommonSectionHeader>
        </div>
        <div className="contact-form">
          <form onSubmit={(e) => e.preventDefault()}>
            <Row>
              <div className="col-lg-6 col-md-12">
                <div className="form-group has-error">
                  <input
                    type="text"
                    name="name"
                    id="name"
                    className="form-control"
                    required=""
                    data-error="Please enter your name"
                    placeholder="Name"
                  />
                </div>
              </div>
              <div className="col-lg-6 col-md-12">
                <div className="form-group has-error">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="form-control"
                    required=""
                    data-error="Please enter your email"
                    placeholder="Email"
                  />
                </div>
              </div>

              <div className="col-lg-6 col-md-12">
                <div className="form-group has-error">
                  <input
                    type="text"
                    name="phone_number"
                    id="phone_number"
                    required=""
                    data-error="Please enter your number"
                    className="form-control"
                    placeholder="Phone"
                  />
                </div>
              </div>
              <div className="col-lg-6 col-md-12">
                <div className="form-group has-error">
                  <input
                    type="text"
                    name="msg_subject"
                    id="msg_subject"
                    className="form-control"
                    required=""
                    data-error="Please enter your subject"
                    placeholder="Subject"
                  />
                </div>
              </div>
              <div className="col-lg-12 col-md-12">
                <div className="form-group">
                  <textarea
                    name="message"
                    className="form-control"
                    id="message"
                    cols="30"
                    rows="5"
                    required=""
                    data-error="Write your message"
                    placeholder="Your Message"
                  ></textarea>
                  <div className="help-block with-errors"></div>
                </div>
              </div>
              <div className="col-lg-12 col-md-12">
                <button
                  type="submit"
                  className="default-btn disabled"
                  style={{ pointerEvents: "all", cursor: "pointer" }}
                >
                  Send Message
                  <span></span>
                </button>
                <div id="msgSubmit" className="h3 text-center hidden"></div>
                <div className="clearfix"></div>
              </div>
            </Row>
          </form>
        </div>
      </Fade>
    </Container>
  );
};

export default ContactFrom;

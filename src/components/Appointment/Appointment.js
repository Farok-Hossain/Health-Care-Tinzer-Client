import { Col, Row } from "react-bootstrap";
import Common from "../Common/Common";
import AppointmentData from "./AppointmentData";
import "./Appointment.css";

const Appointment = () => {
  return (
    <div className="appointment_container">
      <Common data={AppointmentData}>
        <Row>
          <Col className="appointment-items" lg="12">
            <div className="appointment_icon">
              <span>
                <i className="far fa-calendar-alt"></i>
              </span>
            </div>
            <div className="appointment_context">
              <h5>Pick Your Package</h5>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </Col>
          <Col className="appointment-items" lg="12">
            <div className="appointment_icon">
              <span>
                <i className="fas fa-file-signature"></i>
              </span>
            </div>
            <div className="appointment_context">
              <h5>Tinzer App Setup</h5>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </Col>
          <Col className="appointment-items" lg="12">
            <div className="appointment_icon">
              <span>
                <i className="fas fa-cogs"></i>
              </span>
            </div>
            <div className="appointment_context">
              <h5>Going Live</h5>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </Col>
          <Col className="appointment-items" lg="12">
            <div className="appointment_icon">
              <span>
                <i className="fas fa-tv"></i>
              </span>
            </div>
            <div className="appointment_context">
              <h5>Pick Your Package</h5>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </Col>
        </Row>
      </Common>
    </div>
  );
};

export default Appointment;

import { Row, Col } from "react-bootstrap";
export default function Footer() {
  return (
    <div className="contact">
        <div className="socials">
          <Row>
            <Col xl={9} md={9} sm={9} xs={12}>
              <h5 className="contact-message">
                Reach out if you want to create impact together.
              </h5>
              <hr className="contact-hr" />
              <h5 className="sub-heading">
                TO SEE MORE OF MY WORK, VISIT MY SOCIALS:
              </h5>

              <a
                className="footer-links"
                href="https://www.linkedin.com/in/abhisheksharma1210"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="bi bi-linkedin"></i>
              </a>
              <a
                className="footer-links"
                href="https://github.com/abhishek-sharma-2001"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="bi bi-github"></i>
              </a>
            </Col>
          </Row>
        </div>
        <div className="phone">
          <Row className="custom-row">
            <Col xl={9} md={7} sm={7} xs={0}></Col>
            <Col xl={3} md={5} sm={5} xs={12}>
              <Row onClick={() => window.location.href = 'tel:+91 9819357375'}>
                <Col xs={3}>
                  <img src="" className="img-fluid" alt="phone icon" />
                </Col>
                <Col className="cursor">
                  <Row>PHONE</Row>
                  <Row className="sub-heading">+91 9819357375</Row>
                </Col>
              </Row>
              <br />
              <Row onClick={() => window.location.href = 'mailto:12abhishek10@gmail.com'}>
                <Col xs={3}>
                  <img src="" className="img-fluid" alt="Mail icon" />
                </Col>
                <Col className="cursor">
                  <Row>EMAIL</Row>
                  <Row className="sub-heading">12abhishek10@gmail.com</Row>
                </Col>
              </Row>
            </Col>
          </Row>
          <br />
          <br />
        </div>
      </div>
  )
}

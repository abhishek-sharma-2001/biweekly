
import { Row, Col, Container } from "react-bootstrap";
import "../App.css"; // Import the CSS file for styling

const Activity = () => {
  return (
    <div>
      <Container>
        <Row>
          {/* First Section with Image on the Left */}
          <Col md={6}>
            <img
              className="left-to-right"
              src="left-image-url"
              alt="Left Image"
            />
          </Col>
          <Col md={6}>
            <div>
              <h3>Title 1</h3>
              <p>Info for the first section goes here.</p>
            </div>
          </Col>
        </Row>
      

      <Row>
        {/* Second Section with Image on the Right */}
        <Col md={6}>
          <div>
            <h3>Title 2</h3>
            <p>Info for the second section goes here.</p>
          </div>
        </Col>
        <Col md={6}>
          <img
            className="right-to-left"
            src="right-image-url"
            alt="Right Image"
          />
        </Col>
      </Row>
    </Container>
      {/* Add more sections as needed */}
    </div>
  );
};

export default Activity;

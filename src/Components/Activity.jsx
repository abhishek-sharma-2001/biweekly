import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import "../App.css"; // Import the CSS file for styling

const Activity = () => {
  return (
    <div>
      <Container className="activity-page color">
        <center className="team-activity">
          <h2 className="activity">Team Activites Performed</h2>
        </center>
        <Row>
          <Col md={6}>
            <img
              className="left-to-right"
              src="left-image-url"
              alt="Left Image"
            />
          </Col>
          <Col md={6}>
            <div>
              <h3>Testing</h3>
              <p>
                We have performed testing for <b>MP's Corner</b>,{" "}
                <b>Nari Shakti</b> as well as <b>Digital India</b> by using
                Android, iOS, Windows and Mac
              </p>
            </div>
          </Col>
        </Row>

        <Row>
          <Col md={6}>
            <div>
              <h3>Retesting</h3>
              <p>
                We have performed retesting for the raised bugs after fixation.
              </p>
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

        {/* Section 3 */}
        <Row>
          <Col md={6}>
            <img
              className="left-to-right"
              src="section3-image-url"
              alt="Section 3 Image"
            />
          </Col>
          <Col md={6}>
            <div>
              <h3>PDT (Post Deployment Testing) for MP's Corner</h3>
              <p>
                Anagha, Anushree, Shivam, Tanvi, Khushi, Naman, Harshada,
                Amreen, Avinash, Sumit, Yasheen, Vishnu, Atharva Golapkar,
                Atharva Deshpande, and Kartik &#40;15 members&#41; have performed
                the PDT this time.
              </p>
            </div>
          </Col>
        </Row>

        {/* Section 4 */}
        <Row>
          <Col md={6}>
            <div>
              <h3>KT to New Members</h3>
              <p>25 new members are added to the team.</p>
            </div>
          </Col>
          <Col md={6}>
            <img
              className="right-to-left"
              src="section4-image-url"
              alt="Section 4 Image"
            />
          </Col>
        </Row>

        {/* Section 5 */}
        <Row>
          <Col md={6}>
            <img
              className="left-to-right"
              src="section5-image-url"
              alt="Section 5 Image"
            />
          </Col>
          <Col md={6}>
            <div>
              <h3>Old Seniors and Other Members Released</h3>
              <p>
                The old team members in the groups along with the new joiners
                are released to other groups.
              </p>
            </div>
          </Col>
        </Row>

        {/* Section 6 */}
        <Row>
          <Col md={6}>
            <div>
              <h3>New TeamLeads Assigned</h3>
              <p>
                Anagha Shinde and S K Shivam are assigned as our new Team Leads.
              </p>
            </div>
          </Col>
          <Col md={6}>
            <img
              className="right-to-left"
              src="section6-image-url"
              alt="Section 6 Image"
            />
          </Col>
        </Row>

        {/* Section 7 */}
        <Row>
          <Col md={6}>
            <img
              className="left-to-right"
              src="section7-image-url"
              alt="Section 7 Image"
            />
          </Col>
          <Col md={6}>
            <div>
              <h3>New Program Manager Assigned and 2 new Members Added</h3>
              <p>
               <b>Rahul Bhandari</b> sir has been appointed as our new Program
                Manager, and 2 new members named <b>Ankita Lokhande</b> and <b>Payas Patel</b> were added to our group.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Activity;

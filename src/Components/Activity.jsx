import { useEffect } from "react";
import { Row, Col, Container } from "react-bootstrap";
import "../App.css"; // Import the CSS file for styling
import testing from "../assets/testing.png";
import retesting from "../assets/retesting.png";
import PDT from "../assets/PDT.png";
import New_member from "../assets/New_Members.png";
import Senior_release from "../assets/Senior_released.png";
import TeamLead_assign from "../assets/TeamLead_assign.png";
import NewProgramManager from "../assets/NewProgramManager.png";
import testcase3 from "../assets/testcase4.png";
import oldPM from "../assets/vedant_Sir.png";
import AOS from "aos";
import "aos/dist/aos.css";

const Activity = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Specify the animation duration
      once: true, // Set to true to trigger the animation only once
    });
  }, []);
  return (
    <div>
      <Container>
        <Container className="activity-page">
          <center className="team-activity">
            <h2 className="activity">Team Activites Performed</h2>
          </center>
          <Row>
            <Col md={6} data-aos="fade-right">
              <img
                className="left-to-right img-fluid"
                src={testing}
                alt="Left Image"
                width={470}
              />
            </Col>
            <Col md={6}>
              <div>
                <h3 className="info-align">Testing</h3>
                <p>
                  We have performed testing for <b>MP&apos;s Corner</b>,{" "}
                  <b>Nari Shakti</b> as well as <b>Digital India</b> by using
                  Android, iOS, Windows and Mac
                </p>
              </div>
            </Col>
          </Row>

          <Row>
            <Col md={6}>
              <div>
                <h3 className="info-align">Retesting</h3>
                <p>
                  We have performed retesting for the raised bugs after
                  fixation.
                </p>
              </div>
            </Col>
            <Col md={6} data-aos="fade-left">
              <img
                className="right-to-left img-fluid"
                src={retesting}
                alt="Right Image"
              />
            </Col>
          </Row>

          {/* Section 3 */}
          <Row>
            <Col md={6} data-aos="fade-right">
              <img
                className="left-to-right img-fluid"
                src={PDT}
                alt="Section 3 Image"
              />
            </Col>
            <Col md={6}>
              <div>
                <h3 className="info-align">
                  PDT (Post Deployment Testing) for MP&apos;s Corner
                </h3>
                <p>
                  First pdt for whole team without Seniors<br></br>
                  1. Sprint X &#40;<b>Citizen View</b>&#41; was live<br></br>
                  2. Feature Testing<br></br>
                  3. All the bugs were retested<br></br>
                </p>
              </div>
            </Col>
          </Row>

          {/* Section 4 */}
          <Row>
            <Col md={6}>
              <div>
                <h3 className="info-align">TestCase Maintainence</h3>
                <p>
                  1. Merging of Testcases<br></br>
                  2. Testcase Execution<br></br>
                  3. New Testcases were uploaded<br></br>
                  4. Updated the TestCases as per the New product feature
                </p>
              </div>
            </Col>
            <Col md={6} data-aos="fade-left">
              <img
                className="right-to-left img-fluid"
                src={testcase3}
                alt="Section 4 Image"
                width={400}
              />
            </Col>
          </Row>

          {/* Section 4 */}
          {/* Section 4 */}
          <Row>
            <Col md={6} data-aos="fade-right">
              <img
                className="left-to-right img-fluid"
                src={New_member}
                alt="Section 4 Image"
              />
            </Col>
            <Col md={6}>
              <div>
                <h3 className="info-align">KT to New Members</h3>
                <p>
                  <b>25</b> new members are added to the team and provided the
                  knowledge Transfer to get going with the team
                </p>
              </div>
            </Col>
          </Row>

          {/* Section 5 */}
          <Row>
            <Col md={6}>
              <div>
                <h3 className="info-align">
                  Old Seniors and Other Members Released
                </h3>
                <p>
                  The old team members in the groups along with the new joiners
                  are released to other groups.
                </p>
              </div>
            </Col>
            <Col md={6} data-aos="fade-left">
              <img
                className="right-to-left img-fluid"
                src={Senior_release}
                alt="Section 5 Image"
              />
            </Col>
          </Row>

          {/* Section 6 */}
          <Row>
            <Col md={6} data-aos="fade-right">
              <img
                className="left-to-right img-fluid"
                src={TeamLead_assign}
                alt="Section 6 Image"
                height={450}
              />
            </Col>
            <Col md={6}>
              <div>
                <h3 className="info-align">New TeamLeads Assigned</h3>
                <p>
                  <b>Ms. Anagha Shinde</b> and <b>Mr. S K Shivam</b> are
                  assigned as our new Team Leads.
                </p>
              </div>
            </Col>
          </Row>

          {/* Section 7 */}
          <Row>
            <Col md={6}>
              <div>
                <h3 className="info-align">
                  New Program Manager Assigned and 2 new Members Added
                </h3>
                <p>
                  <b>Rahul Bhandari</b> sir has been appointed as our new
                  Program Manager, and 2 new members named <b>Ankita Roy</b> and{" "}
                  <b>Payas Patel</b> were added to our group.
                </p>
              </div>
            </Col>
            <Col md={6} data-aos="fade-left">
              <img
                className="right-to-left img-fluid"
                src={NewProgramManager}
                alt="Section 7 Image"
              />
            </Col>
          </Row>
          {/* Section 6 */}
          <Row>
            <Col md={6} data-aos="fade-right">
              <img
                className="left-to-right img-fluid"
                src={oldPM}
                alt="Section 6 Image"
                width={400}
              />
            </Col>
            <Col md={6}>
              <div>
                <h3 className="info-align">ComeBack of Old Program Manager</h3>
                <p>
                  <b>Vedant</b> Sir has been appointed once again as our Program
                  Manager
                </p>
              </div>
            </Col>
          </Row>
          <br />
        </Container>
      </Container>
    </div>
  );
};

export default Activity;

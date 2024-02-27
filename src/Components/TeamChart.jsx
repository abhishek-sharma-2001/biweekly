
import BugPieChart from "./BugPieChart";
import TeamPerformanceChart from "./TeamPerformanceChart";
import { Row, Col } from "react-bootstrap";

export default function TeamChart() {
  return (
    <>
      <div className="graph">
        <Row>
          <Col xl={6} md={6} sm={12}>
            <TeamPerformanceChart />
          </Col>
          <Col xl={6} md={6} sm={12}>
            <BugPieChart />
          </Col>
        </Row>
      </div>
    </>
  );
}

import { useEffect, useRef } from "react";
import Chart from "chart.js/auto";
import regression from "regression";
import { Container, Row, Col, Table } from "react-bootstrap";

const BugChart = () => {
  const pieChartRef = useRef(null);
  const lineChartRef = useRef(null);
  const barChartRef = useRef(null);

  useEffect(() => {
    // Pie Chart
// Pie Chart
const pieChartContext = pieChartRef.current.getContext("2d");
new Chart(pieChartContext, {
  type: "pie",
  data: {
    labels: ["Blocker", "Critical", "Major", "Normal", "Minor"],
    datasets: [
      {
        data: [15, 25, 20, 15, 25], // Change the data values as needed
        backgroundColor: ["#8B0000", "#FF0000", "#0000FF", "#008000", "#FFA500"], // Assign colors according to priority
      },
    ],
  },
});



    // Line Chart with Linear Regression
    const lineChartContext = lineChartRef.current.getContext("2d");

    const data = [
      { x: 1, y: 10 },
      { x: 2, y: 15 },
      { x: 3, y: 20 },
      { x: 4, y: 25 },
      { x: 5, y: 30 },
      { x: 6, y: 35 },
    ];

    // Calculate linear regression
    const result = regression.linear(data);
    const regressionLine = result.points;

    new Chart(lineChartContext, {
      type: "line",
      data: {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
        datasets: [
          {
            label: "Bug Prediction",
            data: regressionLine,
            borderColor: "#FF6384",
            fill: false,
          },
        ],
      },
    });

    // Bar Chart
    const barChartContext = barChartRef.current.getContext("2d");

    const barChartData = {
      labels: ["January", "February", "March", "April", "May"],
      datasets: [
        {
          label: "Bar Chart",
          data: [10, 20, 15, 25, 30],
          backgroundColor: "#00796B",
        },
      ],
    };

    new Chart(barChartContext, {
      type: "bar",
      data: barChartData,
    });
  }, []);

  return (
    <Container fluid>
      <center className="performance-chart">
        <h2 className="performance">Performance Chart</h2>
      </center>
      <center>
        <Row className="resize">
          <Col md={6} className="chart-container">
            <center>
              <canvas ref={pieChartRef}></canvas>
            </center>
          </Col>
          <Col md={6} className="chart-container">
            <canvas ref={lineChartRef}></canvas>
            <canvas ref={barChartRef}></canvas>
          </Col>
        </Row>
      </center>

      <Row className="mt-4">
        <Col>
          <center className="bug-score">
            <h2>Bug Score</h2>
          </center>
          <Table bordered hover>
            <thead className='thead-dark'>
              <tr>
                <th>Domain Name</th>
                <th>Issue Count</th>
                <th>Issue Score</th>
                <th>Blocker</th>
                <th>Critical</th>
                <th>Major</th>
                <th>Normal</th>
                <th>Minor</th>
              </tr>
            </thead>
            <tbody>
              {/* Add 31 rows as needed */}
              {Array.from({ length: 31 }, (_, index) => (
                <tr key={index}>
                  <td>Data</td>
                  <td>Data</td>
                  <td>Data</td>
                  <td>Data</td>
                  <td>Data</td>
                  <td>Data</td>
                  <td>Data</td>
                  <td>Data</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  );
};

export default BugChart;

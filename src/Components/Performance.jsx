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
            data: [15, 25, 20, 15, 25],
            backgroundColor: [
              '#8B0000',  // Dark Red
              '#FF0000',  // Red
              '#0000FF',  // Blue
              '#008000',  // Green
              '#FFA500',  // Orange
            ],
          },
        ],
      },
    });

    // Line Chart with Linear Regression
    const lineChartContext = lineChartRef.current.getContext("2d");

    const data = [
      [1, 10],
      [2, 15],
      [3, 20],
      [4, 25],
      [5, 25],
      [6, 35],
      [7, 43],
      [6, 55],
    ];

    // Calculate linear regression
    const result = regression.linear(data);
    console.log(result);
    const regressionLine = result.points;
    console.log(regressionLine);

    const futureMonths = [8, 9, 10,11];
    const extendedRegressionLine = result.points.concat(
      futureMonths.map((month) => [
        month,
        result.equation[0] * month + result.equation[1],
      ])
    );

    new Chart(lineChartContext, {
      type: "line",
      data: {
        labels: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ],
        datasets: [
          {
            label: "Bug Prediction",
            data: extendedRegressionLine,
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
            <thead className="thead-dark">
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

import { useEffect ,useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Chart from "chart.js/auto";
import regression from "regression";
// import polynomialRegression from "regression-polynomial";
import "../App.css";
import JsonTable from "./JsonTable";

const BugChart = () => {
  const pieChartRef = useRef(null);
  const lineChartRef = useRef(null);
  const barChartRef = useRef(null);

  useEffect(() => {
    // Pie Chart
    const pieChartContext = pieChartRef.current.getContext("2d");
    new Chart(pieChartContext, {
      type: "pie",
      data: {
        labels: ["Blocker", "Critical", "Major", "Normal", "Minor"],
        datasets: [
          {
            data: [1, 12, 18, 30, 15],
            backgroundColor: [
              "#8B0000", // Dark Red
              "#FF0000", // Red
              "#0000FF", // Blue
              "#008000", // Green
              "#FFA500", // Orange
            ],
          },
        ],
      },
    });

    // Line Chart with Linear Regression
    const lineChartContext = lineChartRef.current.getContext("2d");

    const data = [
      [1, 99],
      [2, 116],
      [3, 76],
    ];

    const result = regression.linear(data);
    // const regressionLine = result.points;

    const futureMonths = [4];
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
          "22 Dec - 23 Jan",
          "24 Jan - 19 Feb",
          "20 Feb - 19 Mar",
          "20 Mar - 20 April",
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
      labels: ["22 Dec - 23 Jan", "24 Jan - 19 Feb", "20 Feb - 19 Mar"],
      datasets: [
        {
          label: "Bar Chart",
          data: [99, 116, 76],
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
    <div className="bg-img color">
      <Container fluid>
        <center className="performance-chart">
          <h2 className="performance">Performance Chart</h2>
        </center>
        <center>
          <Row className="resize">
            <Col md={6} className="chart-container">
              <div className="chart-background">
                <canvas ref={pieChartRef}></canvas>
              </div>
            </Col>
            <Col md={6} className="chart-container">
              <div className="chart-background">
                <canvas ref={lineChartRef}></canvas>
                <canvas ref={barChartRef}></canvas>
              </div>
            </Col>
          </Row>
        </center>

        <Row className="mt-4">
          <Col>
            <center className="bug-score">
              <h2 className="margin">Bug Score</h2>
            </center>
            <center>
              <JsonTable />
            </center>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default BugChart;

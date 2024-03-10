import { useEffect ,useRef } from "react";
import { Table, Container, Row, Col } from "react-bootstrap";
import Chart from "chart.js/auto";
import regression from "regression";
import "../App.css";
import JsonTable from "./JsonTable";
// import JsonTable from './JsonTable';

// import { read, utils, writeFile } from "xlsx";

const BugChart = () => {
  const pieChartRef = useRef(null);
  const lineChartRef = useRef(null);
  const barChartRef = useRef(null);
  // const [data, setData] = useState([]);
  // const [jsonData, setJsonData] = useState([]);

  // Read the Excel file
  // const excelFilePath = "../assets/Weekly_Feb.xlsx";

  useEffect(() => {
    // Pie Chart
    const pieChartContext = pieChartRef.current.getContext("2d");
    new Chart(pieChartContext, {
      type: "pie",
      data: {
        labels: ["Blocker", "Critical", "Major", "Normal", "Minor"],
        datasets: [
          {
            data: [4, 32, 35, 42, 11],
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
      [1, 10],
      [2, 15],
      [3, 20],
      [4, 25],
      [5, 25],
      [6, 35],
      [7, 43],
      [6, 55],
    ];

    const result = regression.linear(data);
    // const regressionLine = result.points;

    const futureMonths = [8, 9, 10, 11];
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
            {/* <CsvTable /> */}
            <center>
              <JsonTable />
            </center>
            {/* <Table className="Table">
            
            </Table> */}
            {/* <JsonTable jsonData={jsonData} /> */}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default BugChart;

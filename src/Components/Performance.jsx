import { useEffect, useState, useRef } from 'react';
import * as XLSX from 'xlsx';
import { Table, Container, Row, Col } from 'react-bootstrap';
import Chart from 'chart.js/auto';
import regression from 'regression';
import { read, utils, writeFile } from 'xlsx';

const BugChart = () => {
  const pieChartRef = useRef(null);
  const lineChartRef = useRef(null);
  const barChartRef = useRef(null);

  const [excelData, setExcelData] = useState([]);

  useEffect(() => {
    // Pie Chart
    const pieChartContext = pieChartRef.current.getContext('2d');
    new Chart(pieChartContext, {
      type: 'pie',
      data: {
        labels: ['Blocker', 'Critical', 'Major', 'Normal', 'Minor'],
        datasets: [
          {
            data: [15, 25, 20, 15, 25],
            backgroundColor: [
              '#8B0000', // Dark Red
              '#FF0000', // Red
              '#0000FF', // Blue
              '#008000', // Green
              '#FFA500', // Orange
            ],
          },
        ],
      },
    });

    // Line Chart with Linear Regression
    const lineChartContext = lineChartRef.current.getContext('2d');

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
    const regressionLine = result.points;

    const futureMonths = [8, 9, 10, 11];
    const extendedRegressionLine = result.points.concat(
      futureMonths.map((month) => [
        month,
        result.equation[0] * month + result.equation[1],
      ])
    );

    new Chart(lineChartContext, {
      type: 'line',
      data: {
        labels: [
          'Jan',
          'Feb',
          'Mar',
          'Apr',
          'May',
          'Jun',
          'Jul',
          'Aug',
          'Sep',
          'Oct',
          'Nov',
          'Dec',
        ],
        datasets: [
          {
            label: 'Bug Prediction',
            data: extendedRegressionLine,
            borderColor: '#FF6384',
            fill: false,
          },
        ],
      },
    });

    // Bar Chart
    const barChartContext = barChartRef.current.getContext('2d');

    const barChartData = {
      labels: ['January', 'February', 'March', 'April', 'May'],
      datasets: [
        {
          label: 'Bar Chart',
          data: [10, 20, 15, 25, 30],
          backgroundColor: '#00796B',
        },
      ],
    };

    new Chart(barChartContext, {
      type: 'bar',
      data: barChartData,
    });

    // Read the Excel file
    const excelFilePath = '../assets/Weekly_Feb.xlsx';

    const readFile = async () => {
      const file = await fetch(excelFilePath);
      const arrayBuffer = await file.arrayBuffer();
      const data = new Uint8Array(arrayBuffer);
      const workbook = XLSX.read(data, { type: 'array' });

      const sheetName = workbook.SheetNames[0];
      const sheet = workbook.Sheets[sheetName];

      const jsonData = XLSX.utils.sheet_to_json(sheet, { header: 1 });

      if (jsonData.length > 1 && jsonData[0].length === jsonData[1].length) {
        jsonData.shift();
      }

      setExcelData(jsonData);
    };

    readFile();
  }, []);

  return (
    <div className="bg-img">
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
                {excelData.map((rowData, index) => (
                  <tr key={index}>
                    {rowData.map((cellData, cellIndex) => (
                      <td key={cellIndex}>{cellData}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default BugChart;

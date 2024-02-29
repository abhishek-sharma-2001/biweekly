import { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
import regression from 'regression';
import { Container, Row, Col } from 'react-bootstrap';

const BugChart = () => {
  const pieChartRef = useRef(null);
  const lineChartRef = useRef(null);

  useEffect(() => {
    // Pie Chart
    const pieChartContext = pieChartRef.current.getContext('2d');
    new Chart(pieChartContext, {
      type: 'pie',
      data: {
        labels: ['Type A', 'Type B', 'Type C'],
        datasets: [{
          data: [30, 40, 30],
          backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
        }],
      },
    });

    // Line Chart with Linear Regression
    const lineChartContext = lineChartRef.current.getContext('2d');

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
      type: 'line',
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [{
          label: 'Bug Prediction',
          data: regressionLine,
          borderColor: '#FF6384',
          fill: false,
        }],
      },
    });
  }, []);

  return (
    <Container className='performance'>
      <Row>
        <Col md={6}>
          <div className='chart'>
            <canvas ref={pieChartRef}></canvas>
          </div>
        </Col>
        <Col md={6}>
          <div className='chart'>
            <canvas ref={lineChartRef}></canvas>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default BugChart;

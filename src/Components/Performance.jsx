import { useEffect ,useRef } from "react";
import { Table, Container, Row, Col } from "react-bootstrap";
import Chart from "chart.js/auto";
import regression from "regression";
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
              <Table striped bordered hover responsive>
                <thead>
                  <tr>
                    <td><b>Domain Name</b></td>
                    <td><b>Issue Count</b></td>
                    <td><b>Issue Score</b></td>
                    <td><b>Blocker</b></td>
                    <td><b>Critical</b></td>
                    <td><b>Major</b></td>
                    <td><b>Normal</b></td>
                    <td><b>Minor</b></td>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Mrunali.Chalke</td>
                    <td>8</td>
                    <td>48</td>
                    <td>1</td>
                    <td>3</td>
                    <td>2</td>
                    <td>1</td>
                    <td>1</td>
                  </tr>
                  <tr>
                    <td>Anushree1.Shukla</td>
                    <td>10</td>
                    <td>45</td>
                    <td></td>
                    <td>1</td>
                    <td>5</td>
                    <td>4</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>Vishnu1.Menon</td>
                    <td>7</td>
                    <td>45</td>
                    <td></td>
                    <td>4</td>
                    <td>2</td>
                    <td>1</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>Kartik2.Patil</td>
                    <td>6</td>
                    <td>39</td>
                    <td></td>
                    <td>3</td>
                    <td>3</td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>Anagha.Shinde</td>
                    <td>7</td>
                    <td>38</td>
                    <td></td>
                    <td>3</td>
                    <td>1</td>
                    <td>3</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>Sk.Shivam</td>
                    <td>6</td>
                    <td>37</td>
                    <td>1</td>
                    <td>2</td>
                    <td>1</td>
                    <td>2</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>Sumit3.Patra</td>
                    <td>5</td>
                    <td>32</td>
                    <td></td>
                    <td>3</td>
                    <td>1</td>
                    <td>1</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>Atharva.Golapkar</td>
                    <td>5</td>
                    <td>30</td>
                    <td></td>
                    <td>3</td>
                    <td></td>
                    <td>2</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>Ritesh.Guleria</td>
                    <td>5</td>
                    <td>25</td>
                    <td></td>
                    <td>2</td>
                    <td></td>
                    <td>3</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>Harshada.Gawade</td>
                    <td>7</td>
                    <td>25</td>
                    <td></td>
                    <td></td>
                    <td>2</td>
                    <td>5</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>Avinash10.Gupta</td>
                    <td>6</td>
                    <td>24</td>
                    <td></td>
                    <td></td>
                    <td>4</td>
                    <td>1</td>
                    <td>1</td>
                  </tr>
                  <tr>
                    <td>Sydney.Gomes</td>
                    <td>4</td>
                    <td>23</td>
                    <td></td>
                    <td>1</td>
                    <td>3</td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>Anjali.Tank</td>
                    <td>6</td>
                    <td>23</td>
                    <td></td>
                    <td>1</td>
                    <td>1</td>
                    <td>3</td>
                    <td>1</td>
                  </tr>
                  <tr>
                    <td>Naman.Malani</td>
                    <td>2</td>
                    <td>18</td>
                    <td>1</td>
                    <td>1</td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>Amreen.Siddiqui</td>
                    <td>3</td>
                    <td>16</td>
                    <td></td>
                    <td>1</td>
                    <td>1</td>
                    <td>1</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>Akshay.Mule</td>
                    <td>3</td>
                    <td>15</td>
                    <td></td>
                    <td></td>
                    <td>3</td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>Aniket.Aher</td>
                    <td>2</td>
                    <td>13</td>
                    <td></td>
                    <td>1</td>
                    <td>1</td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>Nisha1.Giri</td>
                    <td>2</td>
                    <td>13</td>
                    <td>1</td>
                    <td></td>
                    <td></td>
                    <td>1</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>Amit12.Jha</td>
                    <td>5</td>
                    <td>11</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td>3</td>
                    <td>2</td>
                  </tr>
                  <tr>
                    <td>Piyush9.Pandey</td>
                    <td>2</td>
                    <td>10</td>
                    <td></td>
                    <td></td>
                    <td>2</td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>Tanvi.Pathare</td>
                    <td>3</td>
                    <td>9</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td>3</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>Dhiraj.Kunder</td>
                    <td>3</td>
                    <td>9</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td>3</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>Ashutosh21.Pandey</td>
                    <td>1</td>
                    <td>8</td>
                    <td></td>
                    <td>1</td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>Atharv.Deshpande</td>
                    <td>2</td>
                    <td>8</td>
                    <td></td>
                    <td></td>
                    <td>1</td>
                    <td>1</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>Khushi.Bohre</td>
                    <td>1</td>
                    <td>8</td>
                    <td></td>
                    <td>1</td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>Sushant.Yelurkar</td>
                    <td>4</td>
                    <td>8</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td>2</td>
                    <td>2</td>
                  </tr>
                  <tr>
                    <td>Tadi.Teja</td>
                    <td>1</td>
                    <td>8</td>
                    <td></td>
                    <td>1</td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>Abhishek113.Sharma</td>
                    <td>2</td>
                    <td>6</td>
                    <td></td>
                    <td></td>
                    <td>1</td>
                    <td></td>
                    <td>1</td>
                  </tr>
                  <tr>
                    <td>Prathwikumar.S</td>
                    <td>2</td>
                    <td>6</td>
                    <td></td>
                    <td></td>
                    <td>1</td>
                    <td></td>
                    <td>1</td>
                  </tr>
                  <tr>
                    <td>Paras3.Shah</td>
                    <td>1</td>
                    <td>3</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td>1</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>Manas Ghodinde</td>
                    <td>1</td>
                    <td>3</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td>1</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>Khushi.Nigam</td>
                    <td>1</td>
                    <td>1</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td>1</td>
                  </tr>
                  <tr>
                    <td>Sanya.Vishwakarma</td>
                    <td>1</td>
                    <td>1</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td>1</td>
                  </tr>
                  <tr>
                    <td>Bhoomika.Verma</td>
                    <td>0</td>
                    <td>0</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>Juhi1.Yadav</td>
                    <td>0</td>
                    <td>0</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>Muditya.Raghav</td>
                    <td>0</td>
                    <td>0</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>Nancy.Nema</td>
                    <td>0</td>
                    <td>0</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>Prateek2.Pathak</td>
                    <td>0</td>
                    <td>0</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                </tbody>
              </Table>
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

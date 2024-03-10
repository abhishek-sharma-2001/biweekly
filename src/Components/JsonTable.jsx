import { useState, useEffect } from 'react';
import axios from 'axios';
import { Table } from 'react-bootstrap';

const JsonTable = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://api.jsonbin.io/v3/b/65ed574c266cfc3fde964421');
        setData(response.data.record);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <Table striped bordered hover>
        <thead>
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
          {data.map(item => (
            <tr key={item["Domain Name"]}>
              <td>{item["Domain Name"]}</td>
              <td>{item["Issue Count"]}</td>
              <td>{item["Issue Score"]}</td>
              <td>{item["Blocker"] || '0'}</td>
              <td>{item["Critical"] || '0'}</td>
              <td>{item["Major"] || '0'}</td>
              <td>{item["Normal"] || '0'}</td>
              <td>{item["Minor"] || '0'}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default JsonTable;

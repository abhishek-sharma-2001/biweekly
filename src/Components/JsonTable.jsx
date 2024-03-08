
import { Table } from 'react-bootstrap';

const JsonTable = ({ jsonData }) => {
  const headers = Object.keys(jsonData[0]);

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          {headers.map((header) => (
            <th key={header}>{header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {jsonData.map((item, index) => (
          <tr key={index}>
            {headers.map((header) => (
              <td key={header}>{item[header]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default JsonTable;

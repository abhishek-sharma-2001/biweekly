import { useState, useEffect } from 'react';
import axios from 'axios';
import { Table } from 'react-bootstrap'; // Import Table component from react-bootstrap
import { BiSortUp, BiSortDown } from 'react-icons/bi'; // Import icons from react-icons library

const JsonTable = () => {
  const [data, setData] = useState([]);
  const [sortBy, setSortBy] = useState(null);
  const [sortOrder, setSortOrder] = useState('asc');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://api.jsonbin.io/v3/b/66045533c859604a6a03385e');
        setData(response.data.record);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const handleSort = (column) => {
    if (sortBy === column) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      setSortBy(column);
      setSortOrder('asc');
    }
  };

  const sortedData = data.sort((a, b) => {
    if (!sortBy) return 0;

    const aValue = a[sortBy];
    const bValue = b[sortBy];

    if (sortOrder === 'asc') {
      return aValue.localeCompare(bValue);
    } else {
      return bValue.localeCompare(aValue);
    }
  });

  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th onClick={() => handleSort('Domain Name')} style={{ cursor: 'pointer' }}>
              Domain Name
              {sortBy === 'Domain Name' && ( // Display icon based on sorting order
                sortOrder === 'asc' ? <BiSortUp /> : <BiSortDown />
              )}
            </th>
            <th onClick={() => handleSort('Issue Count')} style={{ cursor: 'pointer' }}>
              Issue Count
              {sortBy === 'Issue Count' && ( // Display icon based on sorting order
                sortOrder === 'asc' ? <BiSortUp /> : <BiSortDown />
              )}
            </th>
            <th onClick={() => handleSort('Issue Score')} style={{ cursor: 'pointer' }}>
              Issue Score
              {sortBy === 'Issue Score' && ( // Display icon based on sorting order
                sortOrder === 'asc' ? <BiSortUp /> : <BiSortDown />
              )}
            </th>
            <th onClick={() => handleSort('Blocker')} style={{ cursor: 'pointer' }}>
              Blocker
              {sortBy === 'Blocker' && ( // Display icon based on sorting order
                sortOrder === 'asc' ? <BiSortUp /> : <BiSortDown />
              )}
            </th>
            <th onClick={() => handleSort('Critical')} style={{ cursor: 'pointer' }}>
              Critical
              {sortBy === 'Critical' && ( // Display icon based on sorting order
                sortOrder === 'asc' ? <BiSortUp /> : <BiSortDown />
              )}
            </th>
            <th onClick={() => handleSort('Major')} style={{ cursor: 'pointer' }}>
              Major
              {sortBy === 'Major' && ( // Display icon based on sorting order
                sortOrder === 'asc' ? <BiSortUp /> : <BiSortDown />
              )}
            </th>
            <th onClick={() => handleSort('Normal')} style={{ cursor: 'pointer' }}>
              Normal
              {sortBy === 'Normal' && ( // Display icon based on sorting order
                sortOrder === 'asc' ? <BiSortUp /> : <BiSortDown />
              )}
            </th>
            <th onClick={() => handleSort('Minor')} style={{ cursor: 'pointer' }}>
              Minor
              {sortBy === 'Minor' && ( // Display icon based on sorting order
                sortOrder === 'asc' ? <BiSortUp /> : <BiSortDown />
              )}
            </th>
          </tr>
        </thead>
        <tbody>
          {sortedData.map(item => (
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

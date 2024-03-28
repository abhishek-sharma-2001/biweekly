import { useState, useEffect } from "react";
import Confetti from "react-confetti";
import { Card, Badge } from "react-bootstrap";
import "../App.css";
import axios from "axios";
import first from "../assets/1st.png";
import second from "../assets/2nd.png";
import third from "../assets/3rd.png";
import fourth from "../assets/4th.png";
import fifth from "../assets/5th.png";
import sixth from "../assets/6th.png";



const TopPerformers = () => {
  const [isConfettiActive, setConfettiActive] = useState(true);
  const [topPerformersData, setTopPerformersData] = useState([]);
  const rankImages = [sixth,third,second,fifth,fourth];

  useEffect(() => {
    // Fetch top performers data from the API
    const fetchTopPerformersData = async () => {
      try {
        const response = await axios.get('https://api.jsonbin.io/v3/b/66045533c859604a6a03385e');
        setTopPerformersData(response.data.record.slice(0, 5));
      } catch (error) {
        console.error('Error fetching top performers data:', error);
      }
    };

    // Stop confetti after 4 seconds
    const timeoutId = setTimeout(() => {
      setConfettiActive(false);
    }, 4000);

    // Fetch data when the component mounts
    fetchTopPerformersData();

    // Clear the timeout on component unmount
    return () => clearTimeout(timeoutId);
  }, []);
  // const backgroundImage = "url('home-background-biweekly.jpeg')";
  return (
    <div className="top-performers-container">
      <h2 className="title-top-performer">CONGRATULATIONS TO THE TOP 5 BUG HUNTERS</h2>
      {isConfettiActive && <Confetti />}

      <div className="performers-list">
        {topPerformersData.map((performer, index) => (
          <Card key={index} className={`performer-card rank-${index + 1} shadow`}>
            <Card.Img src={rankImages[index]} alt={performer['Domain Name']} className="performer-photo" />
            <Card.Body className="color">
              <Badge bg={`rank-${index + 1}`} className="mb-2">
                Rank {index + 1}
              </Badge>
              <Card.Title>{performer['Domain Name']}</Card.Title>
              <Card.Text>
                Bug Score: {performer['Issue Score']}
              </Card.Text>
            </Card.Body>
          </Card>
        ))}
      </div>
      <div className="take-space"></div>
    </div> 
  );
};

export default TopPerformers;

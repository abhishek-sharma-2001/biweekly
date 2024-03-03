import { useState, useEffect } from "react";
import Confetti from "react-confetti";
import { Card, Badge } from "react-bootstrap";
import "../App.css";
import first from "../assets/1st.jpg";
import second from "../assets/2nd.jpg";
import third from "../assets/3rd.jpg";
import fourth from "../assets/4th.jpg";
import fifth from "../assets/5th.jpg";

const TopPerformers = () => {
  const [isConfettiActive, setConfettiActive] = useState(true);

  useEffect(() => {
    // Stop confetti after 3 seconds
    const timeoutId = setTimeout(() => {
      setConfettiActive(false);
    }, 4000);

    // Clear the timeout on component unmount
    return () => clearTimeout(timeoutId);
  }, []);

  // Your code to fetch top performers data goes here
  const topPerformersData = [
    { rank: 1, name: "John Doe", bugScore: 150, photo: first },
    {
      rank: 2,
      name: "Jane Smith",
      bugScore: 120,
      photo: second,
    },
    {
      rank: 3,
      name: "Bob Johnson",
      bugScore: 100,
      photo: third,
    },
    {
      rank: 4,
      name: "Alice Brown",
      bugScore: 90,
      photo: fourth,
    },
    {
      rank: 5,
      name: "Charlie Lee",
      bugScore: 80,
      photo: fifth,
    },
  ];

  return (
    <div className="top-performers-container">
      <h2>CONGRATULATIONS TO THE TOP 5 BUG HUNTERS</h2>
      {isConfettiActive && <Confetti />}

      <div className="performers-list">
        {topPerformersData.map((performer, index) => (
          <Card key={index} className={`performer-card rank-${performer.rank} shadow`}>
            <Card.Img
              src={performer.photo}
              alt={performer.name}
              className="performer-photo"
            />
            <Card.Body>
              <Badge bg={`rank-${performer.rank}`} className="mb-2">
                Rank {performer.rank}
              </Badge>
              <Card.Title>{performer.name}</Card.Title>
              <Card.Text>Bug Score: {performer.bugScore}</Card.Text>
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default TopPerformers;

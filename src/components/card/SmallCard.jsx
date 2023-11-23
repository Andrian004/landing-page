/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const SmallCard = ({ path, title }) => {
  const navigate = useNavigate();
  const [color, setColor] = useState("#bf3900");
  const [bg, setBg] = useState("#2e2e2e");
  const colors = [
    "#bf3900",
    "#002dbf",
    "#1600bf",
    "#4600bf",
    "#bf0043",
    "#018310",
    "#831001",
    "#018349",
    "#012a83",
    "#4800ff",
  ];

  useEffect(() => {
    setColor(colors[~~(Math.random() * 10)]);
  }, []);

  return (
    <Card
      style={{
        width: "18rem",
        background: bg,
        boxShadow: `0 0 5px ${bg}`,
        transition: "300ms",
      }}
      className="text-white"
      onMouseEnter={() => setBg(color)}
      onMouseLeave={() => setBg("#2e2e2e")}
    >
      <Card.Body>
        <Card.Title>{title}</Card.Title>

        <Card.Text>
          Simple & informatif design to describe your school.
        </Card.Text>
        <Button className="btn btn-dark" onClick={() => navigate(path)}>
          See
        </Button>
      </Card.Body>
    </Card>
  );
};

export { SmallCard };

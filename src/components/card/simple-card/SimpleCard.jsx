/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { Card } from "react-bootstrap";

export const SimpleCard = ({ title, desc, bg }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prevCount) => {
        if (prevCount >= title) {
          clearInterval(interval);
          return prevCount;
        }
        return prevCount + 1;
      });
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <Card style={{ width: "18rem" }} className={`text-white ${bg}`}>
      <Card.Body className="text-center">
        <i className="bi bi-trophy-fill fs-2 text-warning"></i>
        <Card.Title className="fs-1 fw-bold mt-3">{count}</Card.Title>
        <Card.Text className="fs-4 fw-medium">{desc}</Card.Text>
      </Card.Body>
    </Card>
  );
};

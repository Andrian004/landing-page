/* eslint-disable react/prop-types */
import { Card } from "react-bootstrap";

export const ExtraCard = ({ data }) => {
  const { title, desc, bg } = data;

  return (
    <Card className={`text-light ${bg}`} style={{ width: "18rem" }}>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{desc}</Card.Text>
      </Card.Body>
    </Card>
  );
};

import React from "react";
import { Card, Image } from "react-bootstrap";

const style = {
  card: {
    background: "#09131b",
    padding: "2%",
    margin: "2%"
  }
};

const ExpCard = ({ company, logo, title, date, location, tasks }) => {
  return (
    <Card className="text-white" style={style.card}>
      <Card.Title className="text-info">
        <h1>{company}</h1>
        <Image src={logo} fluid />
      </Card.Title>
      <h3>{title}</h3>
      <h6>{date}</h6>
      <h6>{location}</h6>
      <Card.Text>
        <ul>
          {tasks.map((task) => (
            <li>{task}</li>
          ))}
        </ul>
      </Card.Text>
    </Card>
  );
};

export default ExpCard;

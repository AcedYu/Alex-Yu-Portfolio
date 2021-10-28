import React from "react";
import { Carousel, Card } from "react-bootstrap";
import intros from "../utils/intros.json";

const Introcarousel = () => {
  return (
    <Carousel>
      {intros.map((intro) => (
        <Carousel.Item>
          <Card className="bg-dark text-white">
            <Card.ImgOverlay>
              <Card.Title className="mx-5 my-2">{intro}</Card.Title>
            </Card.ImgOverlay>
          </Card>
          <img
            src="https://ucarecdn.com/36319ffa-09d6-4469-8b7b-cf74d96858a3/introbackground.png"
            alt="slide"
            height="170"
          />
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default Introcarousel;

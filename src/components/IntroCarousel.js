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
            src="https://ucarecdn.com/e9e70844-d22a-401c-8dde-ed1567d86687/carouselbackground.png"
            alt="slide"
            className="d-block w-100"
            height="170"
          />
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default Introcarousel;

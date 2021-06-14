import React from "react";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function CarouselComponent() {
    return (
        <div className="carousel-wrapper">
            <Carousel infiniteLoop useKeyboardArrows autoPlay>
                <div>
                    <img src="../Reebok_1.jpeg" />
                </div>
                <div>
                    <img src="../Reebok_2.jpeg" />
                </div>
                <div>
                    <img src="../Reebok_3.jpeg" />
                </div>
            </Carousel>
        </div>
    );
};


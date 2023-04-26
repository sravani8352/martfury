import React, { Component } from "react";
import Slider from "react-slick";
import "../styles/carousel.scss"


export default class CenterMode extends Component {
    render() {
        const settings = {
            className: "center",
            centerMode: true,
            infinite: true,
            centerPadding: "60px",
            slidesToShow: 3,
            speed: 500
        };
        return (
            <div>
                <Slider {...settings}>
                </Slider>
            </div>
        );
    }
}

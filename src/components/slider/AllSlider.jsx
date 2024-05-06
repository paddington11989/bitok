import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import slider_1 from '../image/slider-1.svg'
import slider_2 from '../image/slider-2.svg'
import slider_3 from '../image/slider-3.svg'
import slider_4 from '../image/slider-4.svg'
import Slider from "react-slick";
import './AllSlider.css';


const AllSlider = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 3,
        responsive:[
            {
         breakpoint:1000,
         settings:{
            slidesToShow:1,
            slidesToScroll: 1,
         }
        },
        
    ]

    };
    return (
        <>
        <section className="slider">
        <div className="container slider-wrapper">
            <div>
                <Slider {...settings}>
                    <div className="slider-img">
                        <img src={slider_1} alt="" />
                    </div>
                    <div className="slider-img">
                        <img src={slider_2} alt="" />
                    </div>
                    <div className="slider-img">
                        <img src={slider_3} alt="" />
                    </div>
                    <div className="slider-img">
                        <img src={slider_4} alt="" />
                    </div>
                </Slider>
            </div>
            </div>
            </section>
        </>
    )
}

export default AllSlider
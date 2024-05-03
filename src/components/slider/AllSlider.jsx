import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import slider_1 from '../image/slider-1.jpg'
import slider_2 from '../image/slider-2.jpg'
import slider_3 from '../image/slider-3.jpg'
import slider_4 from '../image/slider-4.jpg'
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
         breakpoint:1200,
         settings:{
            slidesToShow:3,
            slidesToScroll: 2,
         }
        },
        {
            breakpoint:1000,
            settings:{
               slidesToShow:3,
               slidesToScroll: 2,
            }
           },
        {
            breakpoint:970,
            settings:{
               slidesToShow:2,
               slidesToScroll: 2,
            }
           },
        {
            breakpoint:770,
            settings:{
               slidesToShow:1.5,
               slidesToScroll: 1.5,
            }
           },
        {
            breakpoint:470,
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
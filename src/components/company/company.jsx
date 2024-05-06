import React from 'react';
import './company.css';
import arrow from '../image/company-arrow.svg';
import icon_1 from '../image/star-icon.svg';
import icon_2 from '../image/comp-icon-2.svg';
import icon_3 from '../image/comp-icon-3.svg';
import Slider from 'react-slick';
import company_logo_1 from "../image/manas-logo.svg";
import company_logo_2 from "../image/gaz-logo.svg";
import company_logo_3 from "../image/avia-2-logo.svg";

// import company_logo_5 from "../image/avia-logo.svg";



export default function Company(){
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3.5,
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
    return(
        <>
        <section className="company">
        <div className="container">
        <div className="company-header">
            <h2 className="company-title">Мы - ведущая компания в сфере криптовалют, с глубокими знаниями и опытом</h2>
            <div className="company-header-block">
                <p className="company-text">Наша компания воплощает в себе инновационные подходы и передовые технологии</p>
                <button className="company-btn">Подробнее <img src={arrow} alt="" className='btn-arrow'/></button>
            </div>
        </div>

        <div className="company-wrapper">
            <div className="company-item">
                <div className="compamy-item-line item-number">1</div>
                <div className="compamy-item-line img-company"><img src={icon_1} alt="" /></div>
                <div className="compamy-item-line"><p className="company-item-text">Сертификат, лицензия и надежность</p></div>
            </div>
            <div className="company-item">
                <div className="compamy-item-line"><p className="company-item-text">Прозрачные коммиссии, эффективная система платежей</p></div>
                <div className="compamy-item-line img-company"><img src={icon_2} alt="" /></div>
                <div className="compamy-item-line item-number">2</div>
            </div>
            <div className="company-item">
                <div className="compamy-item-line item-number">3</div>
                <div className="compamy-item-line img-company"><img src={icon_3} alt="" /></div>
                <div className="compamy-item-line"><p className="company-item-text">Безопасность, защита финансовых данных</p></div>
            </div>
        </div>


            <div className="company-slider">
        <Slider {...settings}>
            <div className="company-slider-img">
                <img src={company_logo_1} alt="" />
            </div>
            <div className="company-slider-img">
                <img src={company_logo_2} alt="" />
            </div>
            <div className="company-slider-img">
                <img src={company_logo_3} alt="" />
            </div>
           
            {/* <div className="company-slider-img mmc-logo">
                <img src={company_logo_4} alt="" />
            </div> */}
            {/* <div className="company-slider-img">
                <img src={company_logo_5} alt="" />
            </div> */}
        </Slider>
            </div>

        </div>
        </section>
        </>
    )
}
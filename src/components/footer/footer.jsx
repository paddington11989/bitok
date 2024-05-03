import React from "react";
import './footer.css';
import footer_logo from '../image/footer-logo.svg';
import social_icon_1 from '../image/social-icon-1.svg';
import social_icon_2 from '../image/social-icon-2.svg';
import social_icon_3 from '../image/social-icon-3.svg';
import social_icon_4 from '../image/social-icon-4.svg';

export default function Footer(){
    return(
        <>
        <section className="footer">
            <div className="footer-vertical-line"></div>
            <div className="container">
                <div className="footer__wrapper">
                    <div className="footer-block">
                        <div className="footer-logo"><a href="#"><img src={footer_logo} alt="" /></a></div>
                        <p className="footer-logo-text">Прозрачные комиссии, наличие лицензии,
большие резервы и отличная репутация гарантируют успех<br/>
ваших обменных операций!</p>
                         <div className="footer-logo-link"><a href="#" className="footer-link">bitok@kg.com</a></div>
                         <div className="footer-social-link">
                            <div className="footer-link-wrapper"><a href="" className="social-link-item"><img src={social_icon_2} alt="" /></a></div>
                            <div className="footer-link-wrapper"><a href="" className="social-link-item"><img src={social_icon_1} alt="" /></a></div>
                            <div className="footer-link-wrapper"><a href="" className="social-link-item"><img src={social_icon_3} alt="" /></a></div>
                            <div className="footer-link-wrapper"><a href="" className="social-link-item"><img src={social_icon_4} alt="" /></a></div>
                         </div>
                    </div>
                    <div className="footer-wrapper-about-us">
                        <div className="footer-block-about-us">
                            <p className="footer-about-us-title">Компания</p>
                            <a href="#" className="about-us-link">О компании</a>
                            <a href="#" className="about-us-link">Новости</a>
                            <a href="#" className="about-us-link">Контакты</a>
                        </div>
                        <div className="footer-block-about-us">
                        <p className="footer-about-us-title">Основное</p>
                            <a href="" className="about-us-link">FAQ</a>
                            <a href="" className="about-us-link">Отзывы</a>
                        </div>
                        <div className="footer-block-about-us">
                        <p className="footer-about-us-title">Политика</p>
                            <a href="" className="about-us-link">Политика конфиденциальности</a>
                            <a href="" className="about-us-link">Условия использования</a>
                        </div>
                    </div>
                </div>
                
            </div>
            <div className="footer-line"></div>
           
            
        </section>
        <div className="footer-made">
            <div className="container">
                <div className="footer-made-wrapper">
            <p className="footer-copy">Все права защищены  2024 Bitok LLC</p>
            <div className="footer-made">Made with ❤ by <span className="footer-text-decor">NavisDevs</span></div>
            </div>
            </div>
        </div>
        </>
    )
}
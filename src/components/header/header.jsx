import React from "react";
import "./header.css";
import logo from "../image/bitok-logo.svg";
import topImg from "../image/top-img.svg";
import dropdownArrow from "../image/dropdown-arrow.svg";
import logoKgs from "../image/dropdown-logo-kg.svg";
import getImg from "../image/get-img-solana.svg";
import { useState } from "react";

export default function Header(){
     const[isOpen, setIsOpen]=useState(false);

     const toggleMenu =()=>{
        setIsOpen((open)=>!open);
     }

     
    
    

    return(
        
        <>
        <section className="top-screen">
        <div className="top-screen-line"></div>
         <div className="container">
            <header className="header">
                    <div className="header__logo">
                        <a href="#" className="logo-link"><img src={logo} alt=""/></a>
                    </div>
                    <nav className="header__nav">
                    <div className="nav-toggle" onClick={toggleMenu}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                        <ul className={`"nav__list" ${isOpen ? 'isopen':""}`}>
                            <li className="nav__item"><a href="#" className="nav__link">О компании</a></li>
                            <li className="nav__item"><a href="#" className="nav__link">Новости</a></li>
                            <li className="nav__item"><a href="#" className="nav__link">Контакты</a></li>
                        </ul>
                    </nav>
                    
                    <div className="header__registr">
                        <button className="header__registr-btn">Войти</button>
                        <button className="header__registr-btn-colored">Зарегистрироваться</button>
                    </div>
            </header>
            <div className="promo">
            <div className="top-screen-promo">
                    <div className="promo__wrapper">
                        <div className="promo__item">
                            <h1 className="promo-title">Лучший сервис по продаже и покупке криптовалют</h1>
                            <p className="promo-text">Ваш путь к свободе финансов и инновационным возможностям начинается здесь и сейчас.Добро пожаловать в мир криптовалюты!</p>
                            <button className="promo-btn">Подробнее</button>
                        </div>
                        <div className="promo__item item-width">
                           <div className="promo__item-block">
                                   <div className="promo-block-top">
                                    <img src={topImg} alt="" />
                                    <p className="promo-block-top-text">Party: <span className="promo-top-text-bold">Присоединяйтесь к премиум-аккаунту!</span></p>
                                   </div>
                                   <div className="promo__cart">
                                        <div className="promo-card-line">
                                       <div className="promo__item-line">
                                           <p className="promo-line-text active">Купить</p>
                                           <p className="promo-line-text">Продать</p>
                                        </div>
                                        </div>
                                             <div className="promo-card-give">
                                            <p className="text-give">Вы отдаете:</p>
                                            
                                                <div className="dropdown-container">
                                                     <div className="give-block">
                                                        <div className="give-summ">0.00</div>
                                                           <div className="select menu__list">
                                                           <div className="dropdown-img"><img src={logoKgs} alt="" /></div>
                                                            <div className="menu__item">
                                                                <p className="menu__item-sum-title">KGS</p>
                                                                <p className="menu__item-sum-text give-text">сом</p>
                                                            </div>
                                                            <div className="dropdown-arrow"><img src={dropdownArrow} alt="" /></div>
                                                    </div>
                                                    </div>
                                                    <ul className="dropdown-list-container">
                                                        <li className="menu__list">
                                                            <div className="menu__item"><img src="" alt="" /></div>
                                                            <div className="menu__item">
                                                                <p className="menu__item-sum-title">KGS</p>
                                                                <p className="menu__item-sum-text give-text">сом</p>
                                                                </div>
                                                        </li>
                                                        <li className="menu__list">
                                                            <div className="menu__item"><img src="" alt="" /></div>
                                                            <div className="menu__item">
                                                                <p className="menu__item-sum-title">RUS</p>
                                                                <p className="menu__item-sum-text give-text">рубль</p>
                                                                </div>
                                                        </li>
                                                        <li className="menu__list">
                                                            <div className="menu__item"><img src="" alt="" /></div>
                                                            <div className="menu__item">
                                                                <p className="menu__item-sum-title">USA</p>
                                                                <p className="menu__item-sum-text give-text">доллар</p>
                                                                </div>
                                                        </li>
                                                    </ul>
                                                </div>
                                                


                                             </div>
                                             <div className="promo-card-get">
                                            <p className="text-give">Вы получаете:</p>
                                            
                                                <div className="dropdown-container">
                                                     <div className="give-block">
                                                        <div className="give-summ">0.00</div>
                                                           <div className="select menu__list">
                                                           <div className="dropdown-img"><img src={getImg} alt="" /></div>
                                                            <div className="menu__item">
                                                                <p className="menu__item-sum-title">SOL</p>
                                                                <p className="menu__item-sum-text get-text">Solana</p>
                                                            </div>
                                                            <div className="dropdown-arrow"><img src={dropdownArrow} alt="" /></div>
                                                    </div>
                                                    </div>
                                                    <ul className="dropdown-list-container">
                                                        <li className="menu__list">
                                                            <div className="menu__item"><img src="" alt="" /></div>
                                                            <div className="menu__item">
                                                                <p className="menu__item-sum-title">KGS</p>
                                                                <p className="menu__item-sum-text get-text">сом</p>
                                                                </div>
                                                        </li>
                                                        <li className="menu__list">
                                                            <div className="menu__item"><img src="" alt="" /></div>
                                                            <div className="menu__item">
                                                                <p className="menu__item-sum-title">RUS</p>
                                                                <p className="menu__item-sum-text get-text">рубль</p>
                                                                </div>
                                                        </li>
                                                        <li className="menu__list">
                                                            <div className="menu__item"><img src="" alt="" /></div>
                                                            <div className="menu__item">
                                                                <p className="menu__item-sum-title">USA</p>
                                                                <p className="menu__item-sum-text get-text">доллар</p>
                                                                </div>
                                                        </li>
                                                    </ul>
                                                </div>
                                                


                                             </div>
                                             <button className="promo-card-btn">Купить сейчас</button>

                                        </div>
                                   </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    </section>
</>
    )
}
import React from "react";
import "./header.css";
import logo from "../image/bitok-logo.svg";
import topImg from "../image/top-img.svg";
import arrow from "../image/dropdown-arrow.svg";
import logoKgs from "../image/dropdown-logo-kg.svg";
import getImg from "../image/get-img-solana.svg";
import { useState } from "react";
import { IoMdClose } from "react-icons/io";

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [isNavlist, setIsnavlist] = useState(false);
    const toggleMenu = () => {
        setIsOpen((open) => !open);
        setIsnavlist((open)=>!open)
    }
   

    const[listOpen, setListOpen]=useState(false);
    const listMenu=()=>{
        setListOpen((listopen)=>!listopen)
    }
    

    return (

        <>
            <section className="top-screen">
                <div className="top-screen-line"></div>
                <div className="container header-container">
                    <header className={`header ${isOpen ? 'isopen' : ''}`}>
                        <div className="header-toggle-block">
                        <div className="header__logo">
                            <a href="#" className="logo-link"><img src={logo} alt="" /></a>
                        </div>
                        <div className="nav-toggle" onClick={toggleMenu}>
                                {isOpen ? <IoMdClose  size={"50px"} color="#3B75F3"/> : (
                                    <>
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                    </>
                                )}
                            </div>
                            </div>
                        <nav className="header__nav">   
                            <ul className={`nav__list ${isNavlist ? 'nav__list-open' : ''}`}>
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
                                <div className="promo__item text-item">
                                    <h1 className="promo-title">Лучший сервис по продаже и покупке криптовалют</h1>
                                    <p className="promo-text">Ваш путь к свободе финансов и инновационным возможностям начинается здесь и сейчас. Добро пожаловать в мир криптовалюты!</p>
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

                                            <div className="promo-form">
                                                <div className="form-group">
                                                    <label className="promo-form-label">Вы отдаете:</label>
                                                    <div className="input-group input-sum-list">
                                                        <input type="number" className="input-form-number" placeholder="0.00"/>
                                                        <div className="calc-wrap">
                                                            <div className="calc-icon"><img src={logoKgs} /></div>
                                                            <div className="calc-text">
                                                                <b>KGS</b>
                                                                <span className="calc-text-uppercase">сом</span>
                                                            </div>
                                                            <div className="calc-arrow"><img src={arrow} alt="" /></div>
                                                        </div>
                                        


                                                    </div>
                                                </div>
                                                <div className="form-group">
                                                <label className="promo-form-label">Вы получаете:</label>
                                                <div className="input-group" onClick={listMenu}>
                                                        <input type="number" className="input-form-number"  placeholder="0.00"/>
                                                        <div className="calc-wrap">
                                                            <div className="calc-icon"><img src={getImg} /></div>
                                                            <div className="calc-text">
                                                                <b>SOL</b>
                                                                <span>Solana</span>
                                                            </div>
                                                            <div className="calc-arrow"><img src={arrow} alt="" /></div>
                                                        </div>
                                                     <div className={`calc-list ${listOpen ? 'calc-list-open' : ''}`}>
                                                            <div className="calc-list-wrap">
                                                                <div className="calc-list-icon"><img src="https://api.bitok.website/uploads/icons/methods/zrx.png" alt="" /></div>
                                                                <div className="calc-list-text">
                                                                    <b>OX Protocol</b>
                                                                    <span>ZRX</span>
                                                                </div>
                                                            </div>
                                                            <div className="calc-list-wrap">
                                                                <div className="calc-list-icon"><img src="https://api.bitok.website/uploads/icons/methods/btc.svg" alt="" /></div>
                                                                <div className="calc-list-text">
                                                                    <b>Bitcoin</b>
                                                                    <span>BTC</span>
                                                                </div>
                                                            </div>
                                                            <div className="calc-list-wrap">
                                                                <div className="calc-list-icon"><img src="https://api.bitok.website/uploads/icons/methods/alice.png" alt="" /></div>
                                                                <div className="calc-list-text">
                                                                    <b>ALICE</b>
                                                                    <span>ALICE</span>
                                                                </div>
                                                            </div>
                                                            <div className="calc-list-wrap">
                                                                <div className="calc-list-icon"><img src="https://api.bitok.website/uploads/icons/methods/dash.png" alt="" /></div>
                                                                <div className="calc-list-text">
                                                                    <b>Dash</b>
                                                                    <span>DASH</span>
                                                                </div>
                                                            </div>
                                                            <div className="calc-list-wrap">
                                                                <div className="calc-list-icon"><img src="https://api.bitok.website/uploads/icons/methods/cocos.png" alt="" /></div>
                                                                <div className="calc-list-text">
                                                                    <b>Cocos</b>
                                                                    <span>COCOS</span>
                                                                </div>
                                                            </div>
                                                            <div className="calc-list-wrap">
                                                                <div className="calc-list-icon"><img src="https://api.bitok.website/uploads/icons/methods/ada.png" alt="" /></div>
                                                                <div className="calc-list-text">
                                                                    <b>Civic</b>
                                                                    <span>CIVIC</span>
                                                                </div>
                                                            </div>
                                                            <div className="calc-list-wrap">
                                                                <div className="calc-list-icon"><img src="https://api.bitok.website/uploads/icons/methods/cvc.png" alt="" /></div>
                                                                <div className="calc-list-text">
                                                                    <b>Cardano</b>
                                                                    <span>ADA</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
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
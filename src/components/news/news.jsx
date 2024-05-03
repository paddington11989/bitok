import React from "react";
import './news.css';
import news_icon_1 from '../image/news-1.svg';
import news_icon_2 from '../image/news-2.svg';
import news_icon_3 from '../image/news-3.svg';
import news_arrow from '../image/news-arrow.svg';

export default function News(){
    return(
        <>
        <section className="news">
            <div className="container">
                <h2 className="news-title">Наша миссия - сделать цифровые <span className="news-title-colored">финансы</span> доступными и удобными</h2>
                <h4 className="news-subtitle">Новости</h4>
                <div className="news__wrapper">
                    <div className="news-block">
                        <img src={news_icon_1} alt="" />
                        <p className="news-block-title">Решили купить  или продать криптовалюту в Бишкеке?</p>
                        <p className="news-block-text">Прозрачные комиссии, наличие лицензии, большие резервы и отличная реПрозрачные комиссии и отличная</p>
                    </div>
                    <div className="news-block">
                        <img src={news_icon_2} alt="" />
                        <p className="news-block-title">Что говорят эксперты на счет криптовалют?</p>
                        <p className="news-block-text">Прозрачные комиссии, наличие лицензии, большие резервы и отличная реПрозрачные</p>
                    </div>
                    <div className="news-block">
                        <img src={news_icon_3} alt="" />
                        <p className="news-block-title">Решили купить  или продать криптовалюту в Бишкеке?</p>
                        <p className="news-block-text">Прозрачные комиссии, наличие лицензии, большие резервы и отличная реПрозрачные комиссии</p>
                    </div>
                </div>
                <button className="news-btn">Все новости <img src={news_arrow} alt="" className="news-btn-arrow"/></button>
            </div>
        </section>
        </>
    )
}
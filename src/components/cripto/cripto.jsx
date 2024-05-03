import React from 'react';
import './cripto.css';
import cripto_logo_1 from '../image/logo-1.svg';
import cripto_logo_2 from '../image/logo-2.svg';
import cripto_logo_3 from '../image/logo-3.svg';
import cripto_logo_4 from '../image/logo-4.svg';
import cripto_logo_5 from '../image/logo-5.svg';
import cripto_logo_6 from '../image/logo-6.svg';
import cripto_logo_7 from '../image/logo-7.svg';
import arrow from '../image/company-arrow.svg';
import green from "../image/green.svg";
import red from "../image/red.svg";

export default function Cripto(){
    return(
        <>
        <section className="cripto-promo">
        <div className="container">
            <h2 className="cripto-title">Популярные криптовалюты</h2>
        <table className="cripto-table">
            <thead className="cripto-head">
                <tr>
                    <th>
                        <div className="cripto-text">Торговая пара</div>
                    </th>
                    <th>
                        <div className="cripto-text price-text">Цена</div>
                    </th>
                    <th className='cripto-none'>
                        <div className="cripto-text">Объем 24ч(USDT)</div>
                    </th>
                    <th className='cripto-none'>
                        <div className="cripto-text">Рынок </div>
                    </th>
                    <th className='cripto-none'>
                        <div className="cripto-text cripto-text-center">Действие</div>
                    </th>
                </tr>
            </thead>
            <tbody className="cripto-body">
                <tr>
                    <td>
                        <div className="cripto-cell">
                            <img src={cripto_logo_1} alt="" />
                            <div className="cripto-logo-name cripto-text-style">Bitcoin</div>
                        </div>
                    </td>
                    <td>
                        <div className="cripto-price cripto-text-style">67115.18</div>
                    </td>
                    <td className='cripto-none'>
                        <div className="cripto-hours color-green cripto-text-style">+4.49% </div>
                    </td>
                    <td className='cripto-none'>
                        <img src={green} alt=""/>
                    </td>
                    <td className='cripto-none'>
                        <button className="cripto-btn">Торговля</button>
                    </td>
                </tr>
                <tr>
                    <td>
                        <div className="cripto-cell">
                            <img src={cripto_logo_2} alt="" />
                            <div className="cripto-logo-name cripto-text-style">Etherium</div>
                        </div>
                    </td>
                    <td>
                        <div className="cripto-price cripto-text-style">67115.18</div>
                    </td>
                    <td className='cripto-none'>
                        <div className="cripto-hours color-red cripto-text-style">+4.49% </div>
                    </td>
                    <td className='cripto-none'>
                        <img src={red} alt=""/>
                    </td>
                    <td className='cripto-none'>
                        <button className="cripto-btn">Торговля</button>
                    </td>
                   
                </tr>
                <tr>
                    <td>
                        <div className="cripto-cell">
                            <img src={cripto_logo_3} alt="" />
                            <div className="cripto-logo-name cripto-text-style">Etherium</div>
                        </div>
                    </td>
                  
                    <td>
                        <div className="cripto-price cripto-text-style">67115.18</div>
                    </td>
                   
                    <td className='cripto-none'>
                        <div className="cripto-hours color-green cripto-text-style ">+4.49% </div>
                    </td>
                  
                    <td className='cripto-none'>
                        <img src={green} alt=""/>
                    </td>
                   
                    <td className='cripto-none'>
                        <button className="cripto-btn">Торговля</button>
                    </td>
                </tr>
                <tr>
                    <td>
                        <div className="cripto-cell">
                            <img src={cripto_logo_4} alt="" />
                            <div className="cripto-logo-name cripto-text-style">Bitcoin</div>
                        </div>
                    </td>
                    <td>
                        <div className="cripto-price cripto-text-style">67115.18</div>
                    </td>
                    <td className='cripto-none'>
                        <div className="cripto-hours color-red cripto-text-style ">+4.49% </div>
                    </td>
                    <td className='cripto-none'>
                        <img src={red} alt=""/>
                    </td>
                    <td className='cripto-none'>
                        <button className="cripto-btn">Торговля</button>
                    </td>
                </tr>
                <tr>
                    <td>
                        <div className="cripto-cell">
                            <img src={cripto_logo_5} alt="" />
                            <div className="cripto-logo-name cripto-text-style">Solana</div>
                        </div>
                    </td>
                    <td>
                        <div className="cripto-price cripto-text-style">67115.18</div>
                    </td>
                    <td className='cripto-none'>
                        <div className="cripto-hours color-green cripto-text-style">+4.49% </div>
                    </td>
                    <td className='cripto-none'>
                        <img src={green} alt="" />
                    </td>
                    <td className='cripto-none'>
                        <button className="cripto-btn">Торговля</button>
                    </td>
                </tr>
                <tr>
                    <td>
                        <div className="cripto-cell">
                            <img src={cripto_logo_6} alt="" />
                            <div className="cripto-logo-name cripto-text-style">Avax</div>
                        </div>
                    </td>
                    <td>
                        <div className="cripto-price cripto-text-style">67115.18</div>
                    </td>
                    <td className='cripto-none'>
                        <div className="cripto-hours color-green cripto-text-style">+4.49% </div>
                    </td>
                    <td className='cripto-none'>
                        <img src={green} alt=""/>
                    </td>
                    <td className='cripto-none'>
                        <button className="cripto-btn">Торговля</button>
                    </td>
                </tr>
                
                <tr>
                    <td>
                        <div className="cripto-cell">
                            <img src={cripto_logo_7} alt="" />
                            <div className="cripto-logo-name cripto-text-style">Polygon</div>
                        </div>
                    </td>
                    <td>
                        <div className="cripto-price cripto-text-style">67115.18</div>
                    </td>
                    <td className='cripto-none'>
                        <div className="cripto-hours color-red cripto-text-style">+4.49% </div>
                    </td>
                    <td className='cripto-none'>
                        <img src={red} alt="" />
                    </td>
                    <td className='cripto-none'>
                        <button className="cripto-btn ">Торговля</button>
                    </td>
                </tr>
            </tbody>
        </table>
        <button className="start-cripto">Начать торговлю <img src={arrow} alt="" className='btn-arrow'/></button>

        </div>
        </section>
        </>
    )
}
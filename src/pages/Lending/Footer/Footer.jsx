import React from 'react';
import {FaInstagram, FaFacebookF, FaTwitter, FaYoutube} from 'react-icons/fa';


const Footer = () => {
    return (
        <section className='footer'>
            <div className="container">
                <div className="footer__bottom">
                    <div className="footer__box">
                    <span className="footer__logo">
                        <svg width="160" height="172" viewBox="0 0 160 172" fill="none"
                             xmlns="http://www.w3.org/2000/svg">
<path
    d="M51.2261 15.8088L88.7106 49.3683L82.2214 65.0902L67.0422 46.4288L67.4525 48.4141L57.5359 57.6262L51.2261 15.8088Z"
    fill="#FAC704"/>
<path d="M67.9504 50.8967L77.1529 62.7016L44.6414 98.8003L17.4033 98.9503L67.9504 50.8967Z" fill="#FAC704"/>
<path
    d="M94.1265 43.9397L90.131 47.5999L80.5658 38.7246L121.496 0L70.7148 142.209L61.7026 83.3048L71.9196 72.5508L75.2117 88.2366L94.1265 43.9397Z"
    fill="#FAC704"/>
<path d="M102.497 62.228L95.8032 81.1829L110.045 98.5566L142.989 98.5965L102.497 62.228Z" fill="#FAC704"/>
<path
    d="M0.693359 168.627V155.899H13.325L15.245 157.802V168.627H0.693359ZM10.637 164.034H5.05884V165.208H10.9401V159.319H5.03863V160.554H10.637V164.034ZM16.5815 157.984V168.627H20.9066V164.034H26.4847V160.574H20.9066V159.319H26.7879V168.627H31.1129V157.984L29.0312 155.899H18.6632L16.5815 157.984ZM32.4499 157.882L34.5518 155.899H47.0419V159.319H41.9691V168.627H37.6441V159.319H32.4499V157.882ZM48.3776 157.882L50.4795 155.899H62.9694V159.319H57.8965V168.627H53.5717V159.319H48.3776V157.882ZM64.3049 155.899H68.6502V165.208H78.4523V168.627H66.4068L64.3049 166.644V155.899ZM79.7789 166.584L81.8202 168.627H94.3709V165.208H84.1242V163.973H89.6821V160.533H84.1242V159.319H94.3709V155.899H81.8808L79.7789 157.882V166.584ZM95.7065 164.034V157.963L97.7882 155.899H110.298V159.319H100.032V160.533H105.65V164.034H95.7065ZM110.298 166.584L108.257 168.627H95.7065V165.208H105.953V160.533H110.298V166.584ZM111.634 157.882L113.736 155.899H126.226V159.319H121.153V168.627H116.828V159.319H111.634V157.882ZM127.562 157.984V168.627H131.887V164.034H137.465V160.574H131.887V159.319H137.768V168.627H142.093V157.984L140.011 155.899H129.643L127.562 157.984ZM143.43 155.899V168.627H147.755V164.034H153.354V160.554H147.776V159.319H153.657V163.811L155.516 168.627H159.861L157.982 163.569V157.802L156.062 155.899H143.43Z"
    fill="#FAC704"/>
</svg>

                    </span>
                        <ul className="footer__list">
                            <li className="footer__title">Новости</li>
                            <li className="footer__link">Обновление 1.2</li>
                            <li className="footer__link">Рейтинг игроков</li>
                            <li className="footer__link">Лучшие команды</li>
                        </ul>
                        <ul className="footer__list">
                            <li className="footer__title">Турниры</li>
                            <li className="footer__link">Любительские</li>
                            <li className="footer__link">Профессиональные</li>
                            <li className="footer__link">Трансляции</li>
                        </ul>
                        <ul className="footer__list">
                            <li className="footer__title">Трансляции</li>
                            <li className="footer__link">Прямые эфиры</li>
                            <li className="footer__link">Записи матчей</li>
                            <li className="footer__link">Турнирные игры</li>
                        </ul>
                        <ul className="footer__list">
                            <li className="footer__title">О BattleStar</li>
                            <li className="footer__link">Поддержка</li>
                            <li className="footer__link">Партнёрам</li>
                            <li className="footer__link">Как играть</li>
                        </ul>
                        <div className="footer__btns">
                            <button className="footer__btn">Войти аккаунт</button>
                            <button className="footer__btn">Создать аккаунт</button>
                            <div className="footer__icons">
                                <span className="footer__icon"><FaFacebookF size={25}/></span>
                                <span className="footer__icon"><FaInstagram size={25}/></span>
                                <span className="footer__icon"><FaTwitter size={25}/></span>
                                <span className="footer__icon"><FaYoutube size={25}/></span>
                            </div>
                        </div>
                    </div>
                    <div className="footer__help">
                        <div className="footer__help-text">
                            <p className="footer__help-desc">Пользовательское соглашение</p>
                            <p className="footer__help-desc">Помощь</p>
                        </div>
                        <div className="footer__help-desc">FrontEnd develop : Meerimbekov Ali</div>
                        <div className="footer__help-desc">Все права защищены. 2023</div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Footer;
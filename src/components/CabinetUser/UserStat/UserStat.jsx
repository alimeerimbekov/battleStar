import React from 'react';
import Rang from "../../../assets/logo/rang.png";

const UserStat = () => {


    return (
        <div className="userCabinet__right">
            <div className="userCabinet__top">
                <h1 className="userCabinet__title">CS:GO</h1>
            </div>
            <div className="userCabinet__row">
                <div className="userCabinet__row-left">
                    <p className="userCabinet__row-title">
                        Ранг: 1682
                    </p>
                    <img src={Rang} alt={'rang'} className="userCabinet__row-rang"/>
                </div>
                <div className="userCabinet__row-right">
                    <div className="userCabinet__row-card">
                                    <span>
                                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M17.7778 2.22222H15.5556V0H4.44444V2.22222H2.22222C1 2.22222 0 3.22222 0 4.44444V5.55556C0 8.38889 2.13333 10.7 4.87778 11.0444C5.22917 11.8771 5.778 12.6116 6.47685 13.1846C7.1757 13.7577 8.00355 14.1519 8.88889 14.3333V17.7778H4.44444V20H15.5556V17.7778H11.1111V14.3333C11.9964 14.1519 12.8243 13.7577 13.5232 13.1846C14.222 12.6116 14.7708 11.8771 15.1222 11.0444C17.8667 10.7 20 8.38889 20 5.55556V4.44444C20 3.22222 19 2.22222 17.7778 2.22222ZM2.22222 5.55556V4.44444H4.44444V8.68889C3.15556 8.22222 2.22222 7 2.22222 5.55556ZM17.7778 5.55556C17.7778 7 16.8444 8.22222 15.5556 8.68889V4.44444H17.7778V5.55556Z" fill="#FAC704"/>
</svg>

                                    </span>
                        <div className="userCabinet__row-text">
                            <p className="userCabinet__row-num">4</p>
                            <p className="userCabinet__row-desc">Турнира</p>
                        </div>
                    </div>
                    <div className="userCabinet__row-card">
                                    <span>
<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M17.5833 0.25H2.41667C1.225 0.25 0.25 1.225 0.25 2.41667V17.5833C0.25 18.775 1.225 19.75 2.41667 19.75H17.5833C18.775 19.75 19.75 18.775 19.75 17.5833V2.41667C19.75 1.225 18.775 0.25 17.5833 0.25ZM6.75 15.4167H4.58333V7.83333H6.75V15.4167ZM11.0833 15.4167H8.91667V4.58333H11.0833V15.4167ZM15.4167 15.4167H13.25V11.0833H15.4167V15.4167Z" fill="#AE27EE"/>
</svg>

                                    </span>
                        <div className="userCabinet__row-text">
                            <p className="userCabinet__row-num">76%</p>
                            <p className="userCabinet__row-desc">Винрейт</p>
                        </div>
                    </div>
                    <div className="userCabinet__row-card">
                                    <span>
<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10 0C4.5 0 0 4.5 0 10C0 15.5 4.5 20 10 20C15.5 20 20 15.5 20 10C20 4.5 15.5 0 10 0ZM14.3 13.2L9 10.3V5H10.5V9.4L15 11.9L14.3 13.2Z" fill="#4CBF39"/>
</svg>

                                    </span>
                        <div className="userCabinet__row-text">
                            <p className="userCabinet__row-num">214</p>
                            <p className="userCabinet__row-desc">Часов в игре</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="userCabinet__stat">
                <div className="userCabinet__stat-left">
                    <h3 className="userCabinet__stat-title">Статистика</h3>
                    <div className="userCabinet__stat-match">
                        <div className="userCabinet__stat-play">
                            <div className="userCabinet__stat-row">
                                <p className="userCabinet__stat-row-text">Матчей сыграно:</p>
                                <p className="userCabinet__stat-row-num">1023</p>
                            </div>
                            <div className="userCabinet__stat-row">
                                <p className="userCabinet__stat-row-text">Карт сыграно:</p>
                                <p className="userCabinet__stat-row-num">23</p>
                            </div>
                        </div>
                        <div className="userCabinet__stat-play">
                            <div className="userCabinet__stat-row">
                                <p className="userCabinet__stat-row-text">Побед:</p>
                                <p className="userCabinet__stat-row-num">798</p>
                            </div>
                            <div className="userCabinet__stat-row">
                                <p className="userCabinet__stat-row-text">Поражений:</p>
                                <p className="userCabinet__stat-row-num">225</p>
                            </div>
                        </div>
                        <div className="userCabinet__stat-play">
                            <div className="userCabinet__stat-row">
                                <p className="userCabinet__stat-row-text">Убийств:</p>
                                <p className="userCabinet__stat-row-num">2304</p>
                            </div>
                            <div className="userCabinet__stat-row">
                                <p className="userCabinet__stat-row-text">Смертей:</p>
                                <p className="userCabinet__stat-row-num">1389</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="userCabinet__stat-right">
                    <h3 className="userCabinet__stat-title">Стиль игры</h3>
                    <div className="userCabinet__stat-right-static">
                        <div className="userCabinet__stat-right-row">
                            <p className="userCabinet__stat-right-num">100</p>
                            <div className="userCabinet__stat-right-line"></div>
                            <p className="userCabinet__stat-right-num">100</p>
                        </div>
                        <div className="userCabinet__stat-right-row">
                            <p className="userCabinet__stat-right-num">75</p>
                            <div className="userCabinet__stat-right-line"></div>
                            <p className="userCabinet__stat-right-num">75</p>
                        </div>
                        <div className="userCabinet__stat-right-row">
                            <p className="userCabinet__stat-right-num">50</p>
                            <div className="userCabinet__stat-right-line"></div>
                            <p className="userCabinet__stat-right-num">50</p>
                        </div>
                        <div className="userCabinet__stat-right-row">
                            <p className="userCabinet__stat-right-num">25</p>
                            <div className="userCabinet__stat-right-line"></div>
                            <p className="userCabinet__stat-right-num">25</p>
                        </div>
                        <div className="userCabinet__stat-right-row">
                            <p className="userCabinet__stat-right-num">0</p>
                            <div className="userCabinet__stat-right-line"></div>
                            <p className="userCabinet__stat-right-num">0</p>
                        </div>
                    </div>

                    <div className="userCabinet__stat-list">
                        <p className="userCabinet__stat-link">Точность, %</p>
                        <p className="userCabinet__stat-link">Попадания <br/> в голову, %</p>
                        <p className="userCabinet__stat-link">Живучесть, %</p>
                        <p className="userCabinet__stat-link">Живучесть, %</p>
                        <p className="userCabinet__stat-link">Попадания <br/> в голову, %</p>
                        <p className="userCabinet__stat-link">Точность, %</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserStat;
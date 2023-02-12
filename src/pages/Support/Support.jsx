import React from 'react';
import {AiOutlineSearch} from 'react-icons/ai';
import Accordion from "../../components/Accordion/Accordion";


const Support = () => {


    return (
        <section className='support'>
            <div className="container">
                <h1 className="support__title">
                    Опишите свою проблему
                </h1>

                <div className="support__poisk">
                    <label className='support__label'>
                        <input type="search" className="support__search" placeholder='Поиск'/>
                        <span className="support__label-icon"><AiOutlineSearch size={20}/></span>
                    </label>
                </div>

                <h2 className="support__subtitle">
                    Частые вопросы
                </h2>

                <ul className="support__list">
                    <li className="support__link">АККАУНТ</li>
                    <li className="support__link">ПЛАТЕЖИ</li>
                    <li className="support__link">ТУРНИРЫ</li>
                    <li className="support__link">МАТЧИ</li>
                </ul>

                <div className="support__cards">
                    <Accordion/>
                    <Accordion/>
                    <Accordion/>
                    <Accordion/>
                    <Accordion/>
                </div>

                <form action="" className="support__form">
                    <h3 className="support__subtitle">Форма обратной связи</h3>
                    <p className="support__form-desc">
                        Помогите нам улучшить платформу BattleStar. Напишите нам какие игры вы хотите добавить и что хотите изменить.
                    </p>

                    <div className="support__form-block">

                        <div className="support__form-box">
                            <label className="support__form-label">
                                <input type="email" className="support__form-input" placeholder='Электронная почта *'/>
                                <input type="text" className="support__form-input" placeholder='Ваше имя *'/>
                            </label>
                            <label className="support__form-label">
                                <textarea className="support__form-input2" placeholder='Введите текст сообщения *'/>
                            </label>
                        </div>
                    </div>

                    <div className="support__form-btns">
                        <button className="support__form-btn">Отправить</button>
                    </div>

                </form>
            </div>
        </section>
    );
};

export default Support;
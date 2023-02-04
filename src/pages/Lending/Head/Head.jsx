import React from 'react';
import {RiArrowDownSLine} from 'react-icons/ri'

const Head = () => {
    return (
        <div className='head'>
            <p className="head__title">
                Для партнёров
            </p>
            <div className="head__btns">
                <button className="head__btn">Войти аккаунт</button>
                <button className="head__btn">Создать аккаунт</button>
                <p className="head__ru">Ru <RiArrowDownSLine/></p>
            </div>
        </div>
    );
};

export default Head;
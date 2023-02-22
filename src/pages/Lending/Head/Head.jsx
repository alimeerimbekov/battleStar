import React, {useContext, useState} from 'react';
import {RiArrowDownSLine} from 'react-icons/ri'
import Form from "../../../components/Form/Form";
import {CustomContext} from "../../../utils/Context";

const Head = () => {

    const {setActive, close, setClose} = useContext(CustomContext)

    return (
        <div className='head'>
            <p className="head__title">
                Для партнёров
            </p>
            <div className="head__btns">
                <button className="head__btn" type={'button'} onClick={() => {
                    setClose(true)
                    setActive(true)
                }}>Войти аккаунт
                </button>
                <button className="head__btn" type={'button'} onClick={() => {
                    setClose(true)
                    setActive(false)
                }}>Создать аккаунт
                </button>
                <select className="head__ru">
                    <option value="">Ru</option>
                    <option value="">En</option>
                </select>
            </div>
            <div className='content' style={{display: close ? 'block' : 'none'}}>
                <Form close={close} setClose={setClose}/>
            </div>
        </div>
    );
};

export default Head;
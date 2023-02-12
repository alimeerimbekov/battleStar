import React, {useState} from 'react';
import {RiArrowDownSLine} from 'react-icons/ri'
import Form from "../../../components/Form/Form";

const Head = () => {

    const [close, setClose] = useState(false)

    const [reg, setReg] = useState(false)

    return (
        <div className='head'>
            <p className="head__title">
                Для партнёров
            </p>
            <div className="head__btns">
                <button className="head__btn" type={'button'} onClick={() => {
                    setClose(true)
                    setReg(false)
                }}>Войти аккаунт</button>
                <button className="head__btn" type={'button'} onClick={() => {
                    setClose(true)
                    setReg(true)
                }}>Создать аккаунт</button>
                <p className="head__ru">Ru <RiArrowDownSLine/></p>
            </div>
            <div className='content' style={{display: close ? 'block' : 'none'}}>
                <Form close={close} setClose={setClose} reg={reg} setReg={setReg}/>
            </div>
        </div>
    );
};

export default Head;
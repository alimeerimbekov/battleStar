import React, {useContext} from 'react';
import {CustomContext} from "../../../utils/Context";

const BtnReg = () => {

    const {setClose, setActive} = useContext(CustomContext)

    return (
        <section className='btnReg'>
            <div className="container">
                <div className="btnReg__row">
                    <h3 className="btnReg__title">Бонус 500 BS для новых игроков</h3>
                    <button className="head__btn" type='button' onClick={() => {
                        setClose(true)
                        setActive(false)
                    }}>Создать аккаунт</button>
                </div>
            </div>
        </section>
    );
};

export default BtnReg;
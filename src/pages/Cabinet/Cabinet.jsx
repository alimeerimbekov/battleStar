import React, {useContext} from 'react';
import FormCabinet from "../../components/FormCabinet/FormCabinet";
import {CustomContext} from "../../utils/Context";

const Cabinet = () => {

    const {form, setForm, reg, setReg} = useContext(CustomContext)

    return (
        <section className='cabinet'>
            <div className="container">
                <div className="cabinet__content" style={{display: form === true ? 'none' : 'flex'}}>
                    <div className="cabinet__block">
                        <h1 className="cabinet__title">Зарабатывай вместе с BattleStar</h1>
                        <p className="cabinet__desc">Ваши подписчики играют - вы зарабатываете</p>
                        <ul className="cabinet__link">
                            <li className="cabinet__list">Призы от компании BattleStar</li>
                            <li className="cabinet__list">Процент от выигрыша приведенных подписчиков</li>
                            <li className="cabinet__list">Подробная аналитика аудитории в личном кабинете</li>
                        </ul>
                        <p className="cabinet__text">
                            Заполните заявку чтобы присоединиться к реферальной <br/> программе для лидеров мнений
                        </p>
                        <button className='cabinet__btn' onClick={() => {
                            setForm(true)
                            setReg(true)
                        }}>Заполнить заявку</button>
                        <p className="cabinet__before">Если у вас уже есть аккаунт партнёра - выполните вход</p>
                        <button className='cabinet__btn' onClick={() => setForm(true)}>Войти</button>
                    </div>
                </div>
                <FormCabinet form={form} setForm={setForm} reg={reg} setReg={setReg}/>
            </div>
        </section>
    );
};

export default Cabinet;
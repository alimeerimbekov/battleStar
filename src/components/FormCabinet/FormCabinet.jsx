import React, {useState} from 'react';
import {AiFillGithub} from 'react-icons/ai'
import {ImAppleinc} from 'react-icons/im'
import {BsGoogle} from 'react-icons/bs'
import {GrFacebookOption} from 'react-icons/gr'

const FormCabinet = ({form, setForm, reg, setReg}) => {

    const [active, setActive] = useState(1)

    const register = () => {
        if (reg === true) {
            setActive(2)
        }
    }
    setTimeout(register, 1)
    const login = () => {
        if (reg === false) {
            setActive(1)
        }
    }
    setTimeout(login, 1)



    return (
        <div className='cabinet__content '>
            <form className='cabinet__block block' style={{display: form === true ? 'flex' : "none"}}>
            <span className="form__logo">
<svg width="87" height="97" viewBox="0 0 87 97" fill="none" xmlns="http://www.w3.org/2000/svg">
<path
    d="M23.8984 10.7539L49.4348 33.5822L45.014 44.2767L34.6731 31.5826L34.9527 32.9331L28.197 39.1994L23.8984 10.7539Z"
    fill="#F8F8F8" fillOpacity="0.8"/>
<path d="M35.2917 34.6216L41.5609 42.6516L19.4124 67.2071L0.856445 67.3092L35.2917 34.6216Z" fill="#F8F8F8"
      fillOpacity="0.8"/>
<path
    d="M53.1239 29.8892L50.402 32.379L43.8857 26.3417L71.7694 0L37.1747 96.7353L31.0352 56.6666L37.9955 49.3514L40.2382 60.0214L53.1239 29.8892Z"
    fill="#F8F8F8" fillOpacity="0.8"/>
<path d="M58.827 42.3296L54.2666 55.2233L63.9688 67.0414L86.4117 67.0686L58.827 42.3296Z" fill="#F8F8F8"
      fillOpacity="0.8"/>
</svg>

            </span>

                {
                    active === 1 ?
                        <h2 className='cabinet__title'>Вход в кабинет партнёра BattleStar</h2>
                        :
                        <h2 className='cabinet__title'>Заявка регистрации партнёра BattleStar</h2>
                }

                {
                    active === 1 ? '' :
                        <p className="cabinet__text">
                            Значимость этих проблем настолько очевидна, что постоянное
                            информационно-пропагандистское <br/>
                            обеспечение нашей деятельности играет важную роль в формировании систем массового
                            участия. <br/>
                            Значимость этих проблем настолько очевидна.
                        </p>
                }

                {
                    active === 1 ?
                        <label className="form__label">
                            <input type="email" className="form__input" placeholder='Никнейм или электронная почта'/>
                            <input type="password" className="form__input" placeholder='Пароль'/>
                        </label>
                        :
                        <label className="form__label">
                            <input type="text" className="form__input" placeholder='Имя и Фамилия'/>
                            <input type="email" className="form__input" placeholder='Электронная почта'/>
                            <input type="password" className="form__input" placeholder='Придумайте пароль'/>
                        </label>
                }

                {
                    active === 1 ? '' :
                        <p className="cabinet__before">
                            Значимость этих проблем настолько очевидна, что постоянное <br/>
                            информационное обеспечение нашей деятельности играет важную роль.
                        </p>
                }

                {
                    active === 1 ? '' :
                        <label className="form__label">
                            <input type="text" className="form__input" placeholder='Ссылка на ваш канал/блог/аккаунт'/>
                        </label>
                }

                {
                    active === 1 ?
                        <div className="form__right cabinet__right">
                            <p className="form__text">Забыли пароль? <span> Восстановить</span></p>
                        </div> : ''
                }

                {
                    active === 1 ?
                        <button className="cabinet__btn cabinet__btns">Войти</button>
                        :
                        <button className="cabinet__btn cabinet__btns">Подать заявку</button>
                }




                {
                    active === 1 ?
                        <div className="cabinet__social">
                            <div className="form__line"></div>
                            <p className="form__center">Или войдите через</p>
                            <div className="form__line"></div>
                        </div> : ''
                }


                {
                    active === 1 ?
                        <div className="form__icons">
                            <span className="form__icon"><AiFillGithub size={30}/></span>
                            <span className="form__icon"><ImAppleinc size={30}/></span>
                            <span className="form__icon"><BsGoogle size={30}/></span>
                            <span className="form__icon"><GrFacebookOption size={30}/></span>
                        </div> : ''
                }
            </form>
        </div>
    );
};

export default FormCabinet;
import React, {useContext} from 'react';
import {AiFillGithub} from "react-icons/ai";
import {ImAppleinc} from "react-icons/im";
import {BsGoogle} from "react-icons/bs";
import {GrFacebookOption} from "react-icons/gr";
import axios from "../../utils/axios";
import {CustomContext} from "../../utils/Context";
import {useNavigate} from "react-router-dom";
import {useForm} from "react-hook-form";

const FormLogin = () => {

    const {
        register,
        reset,
        handleSubmit,
        formState: {
            errors
        }
    } = useForm({mode: "onBlur"})

    const {setUser} = useContext(CustomContext)

    const navigate = useNavigate()

    const loginUser = (e) => {
        e.preventDefault()
        let newUser = {
            email: e.target[0].value,
            login: e.target[0].value,
            password: e.target[1].value
        }

        axios.post('/login', newUser)
            .then(({data}) => {
                setUser({
                    token: data.accessToken,
                    ...data.user
                })
                localStorage.setItem('user', JSON.stringify({
                    token: data.accessToken,
                    ...data.user
                }))
                reset()
                navigate('/')
            })
            .catch((err) => console.log(err.message))
    }

    return (
        <form className="formA" onSubmit={loginUser}>
            <label className="form__label">
                <input type="text" className="form__input" placeholder='Никнейм или электронная почта'/>
                <input type="password" className="form__input" placeholder='Пароль'/>
            </label>
            <div className="form__right">
                <p className="form__text">Забыли пароль? <span> Восстановить</span></p>
            </div>


            <div className="form__btns">
                <button className="form__btn" type='submit'>Войти</button>
            </div>


            <div className="form__social">
                <div className="form__line"></div>
                <p className="form__center">Или войдите через</p>
                <div className="form__line"></div>
            </div>


            <div className="form__icons">
                <span className="form__icon"><AiFillGithub size={30}/></span>
                <span className="form__icon"><ImAppleinc size={30}/></span>
                <span className="form__icon"><BsGoogle size={30}/></span>
                <span className="form__icon"><GrFacebookOption size={30}/></span>
            </div>

            <p className="form__bottom">Создавая аккаунт в “Название” вы соглашаетесь с <span>пользовательским соглашением</span>
            </p>
        </form>
    );
};

export default FormLogin;
import React, {useContext} from 'react';
import axios from "../../utils/axios";
import {CustomContext} from "../../utils/Context";
import {useNavigate} from "react-router-dom";
import {useForm} from "react-hook-form";

const FormRegister = () => {

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


    const registerUser = (e) => {
        e.preventDefault()

        let newUser = {
            login: e.target[0].value,
            email: e.target[1].value,
            password: e.target[2].value,
            getDate: ''
        }

        axios.post('/register', newUser)
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
        <form className='formA' onSubmit={registerUser}>
            <label className="form__label">
                <input type="text" className="form__input" placeholder='Введите никнейм'/>
                <input type="email" className="form__input" placeholder='Электронная почта'/>
                <input type="password" className="form__input" placeholder='Придумайте пароль'/>
            </label>

            <div className="form__btns">
                <button className="form__btn" type='submit'>Создать</button>
            </div>
            <p className="form__bottom">Создавая аккаунт в “Название” вы соглашаетесь с <span>пользовательским соглашением</span>
            </p>
        </form>
    );
};

export default FormRegister;
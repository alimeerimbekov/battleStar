import React, {useContext} from 'react';
import {MdContentCopy} from 'react-icons/md';
import Img from '../../../assets/img/userDataProf.png'
import {CustomContext} from "../../../utils/Context";

const UserData = () => {

    const {user} = useContext(CustomContext)

    return (
        <div className='userData'>
            <div className="userData__top">
                <h2 className="userData__title">Основная информация</h2>
                <p className="userData__text">Редактировать</p>
            </div>

            <div className="userData__block">
                <div className="userData__data">
                    <div className="userData__row">
                        <p className="userData__grey">ID</p>
                        <div className="userData__row-num">
                            <p className="userData__row-id">{user.id}</p>
                            <span className="userData__row-icon"><MdContentCopy/></span>
                        </div>
                    </div>
                    <div className="userData__row">
                        <p className="userData__grey">Никнейм</p>
                        <p className="userData__row-name">{user.login}</p>
                    </div>

                    <div className="userData__row">
                        <p className="userData__grey">Био</p>
                        <p className="userData__row-desc">
                            Значимость этих проблем настолько очевидна, что консультация с
                            широким активом способствует подготовки и реализации позиций,
                            занимаемых участниками в отношении поставленных задач
                        </p>
                    </div>

                    <div className="userData__row">
                        <p className="userData__grey">Дата регистрации</p>
                        <p className="userData__row-date">{user.date.slice(0, 10)}</p>
                    </div>
                </div>
                <div className="userData__image">
                    <img src={Img} alt="" className="userData__img"/>
                    <p className="userData__text">Изменить</p>
                </div>
            </div>

            <div className="userData__mail">
                <div className="userData__top">
                    <h2 className="userData__title">Адрес электронной почты</h2>
                    <p className="userData__text">Редактировать</p>
                </div>

                <div className="userData__row">
                    <p className="userData__grey">Электронная почта</p>
                    <div className="userData__row-num">
                        <p className="userData__row-date">{user.email}</p>
                        <span className="userData__row-icon">
                            <svg width="18" height="14" viewBox="0 0 18 14" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
<path
    d="M6.00016 11.1698L1.83016 6.99984L0.410156 8.40984L6.00016 13.9998L18.0002 1.99984L16.5902 0.589844L6.00016 11.1698Z"
    fill="#6FFF57"/>
</svg>

                        </span>
                    </div>
                </div>
            </div>

            <div className="userData__mail">

                <div className="userData__top">
                    <h2 className="userData__title">Аккаунт Steam</h2>
                    <p className="userData__text">Изменить</p>
                </div>

                <div className="userData__row">
                    <p className="userData__grey">Электронная почта</p>
                    <p className="userData__row-date">{user.email}</p>
                </div>

                <div className="userData__row">
                    <p className="userData__grey">Аккаунт</p>
                    <p className="userData__row-date">VERITA_Luts</p>
                </div>

            </div>

        </div>
    );
};

export default UserData;
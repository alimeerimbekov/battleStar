import React, {useContext} from 'react';
import {HiArrowLeft, HiArrowRight} from 'react-icons/hi'
import {TbChevronDown} from 'react-icons/tb'
import {AiFillPlusSquare} from 'react-icons/ai'
import {IoIosSearch, IoIosNotifications} from 'react-icons/io'
import {MdMessage} from 'react-icons/md'
import CsGo from '../../assets/csgo.png'
import Aside from "../../components/Aside/Aside";
import {Link, useLocation} from "react-router-dom";
import {useNavigate} from 'react-router-dom';
import {CustomContext} from "../../utils/Context";

const Header = () => {

    const navigate = useNavigate()

    const location = useLocation()

    const {setForm, setReg, reg} = useContext(CustomContext)

    return (
        <div className='header'>
            <Aside/>
            <nav className="header__nav">
                <div className="header__left">
                    <div className="header__arrow">
                        <span className='header__arr' onClick={() => navigate(-1)}><HiArrowLeft size={30}/></span>
                        <span className='header__arr' onClick={() => navigate(+1)}><HiArrowRight size={30}/></span>
                    </div>
                    <div className="header__csgo">
                        <img src={CsGo} className='header__csgo-img' alt=""/>
                        <p className="header__csgo-name">CS:GO</p>
                        <span className="header__csgo-arrow"><TbChevronDown size={25}/></span>
                    </div>
                    <Link to={'/support'}>Поддержка</Link>
                    <Link to={'/cabinet'}>Для партнёров</Link>
                </div>
                <div className="header__right">

                    {
                        location.pathname === ('cabinet') ? '' :
                            <label className='header__label'>
                                <input type="search" className="header__search" placeholder='Поиск'/>
                                <span className='header__search-icon'><IoIosSearch size={23}/></span>
                            </label>
                    }


                    {
                        location.pathname === ('/cabinet') ?
                            <button className="head__btn" type={'button'} onClick={() => {
                                setForm(true)
                                setReg(!reg)
                            }}>
                                {
                                    reg ? 'Войти аккаунт' : 'Создать аккаунт'
                                }
                            </button>
                            :
                            <>
                                <div className="header__balance">
                                    <div className="header__balance-text">Баланс <span><AiFillPlusSquare
                                        size={18}/></span></div>
                                    <p className="header__balance-num">15600 BS</p>
                                </div>
                                <span className="header__sms"><MdMessage size={20}/>
                                    <span className='header__sms-count'>3</span></span>
                                <span className="header__notification"><IoIosNotifications size={25}/>
                                <span className='header__notification-count'>4</span></span>
                                <div className="header__user">
                                    <p className="header__user-name"> Sergio Richter </p>
                                    <span><TbChevronDown/></span>
                                </div>
                            </>
                    }

                </div>
            </nav>
        </div>
    );
};

export default Header;
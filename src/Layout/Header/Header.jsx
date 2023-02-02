import React from 'react';
import {HiArrowLeft, HiArrowRight} from 'react-icons/hi'
import {TbChevronDown} from 'react-icons/tb'
import {AiFillPlusSquare} from 'react-icons/ai'
import {IoIosSearch, IoIosNotifications} from 'react-icons/io'
import {MdMessage} from 'react-icons/md'
import CsGo from '../../assets/csgo.png'
import Aside from "../../components/Aside/Aside";

const Header = () => {
    return (
        <div className='header'>
            <Aside/>
            <nav className="header__nav">
                <div className="header__left">
                    <div className="header__arrow">
                        <span className='header__arr'><HiArrowLeft size={30}/></span>
                        <span className='header__arr'><HiArrowRight size={30}/></span>
                    </div>
                    <div className="header__csgo">
                        <img src={CsGo} className='header__csgo-img' alt=""/>
                        <p className="header__csgo-name">CS:GO</p>
                        <span className="header__csgo-arrow"><TbChevronDown size={25}/></span>
                    </div>
                </div>
                <div className="header__right">
                    <label className='header__label'>
                        <input type="search" className="header__search" placeholder='Поиск'/>
                        <span className='header__search-icon'><IoIosSearch size={23}/></span>
                    </label>
                    <div className="header__balance">
                        <div className="header__balance-text">Баланс <span><AiFillPlusSquare size={18}/></span></div>
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
                </div>
            </nav>
        </div>
    );
};

export default Header;
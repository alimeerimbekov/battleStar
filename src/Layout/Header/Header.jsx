import React from 'react';
import {HiArrowLeft, HiArrowRight} from 'react-icons/hi'
import {TbChevronDown} from 'react-icons/tb'
import CsGo from '../../assets/csgo.png'

const Header = () => {
    return (
        <div className='header'>
            <nav className="header__nav">
                <div className="header__left">
                    <div className="header__arrow">
                        <span className='header__arrow'><HiArrowLeft/></span>
                        <span className='header__arrow'><HiArrowRight/></span>
                    </div>
                    <div className="header__csgo">
                        <img src={CsGo} className='header__csgo-img' alt=""/>
                        <p className="header__csgo-name">CS:GO</p>
                        <span className="header__csgo-arrow"><TbChevronDown/></span>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;
import React from 'react';
import {FcSimCardChip} from "react-icons/fc";
import Bal from '../../../assets/img/balnce.png';
import {BiRightArrowAlt} from 'react-icons/bi';
import {HiCreditCard} from 'react-icons/hi';
import {FiUsers} from 'react-icons/fi';
import {BsApple} from 'react-icons/bs';
import {FcGoogle} from 'react-icons/fc';
import {SiWebmoney} from 'react-icons/si';
import UserStoreCard from "../UserStore/UserStoreCard";

const UserBalance = () => {
    return (
        <div className='userBal'>

            <div className="userBal__top">
                <div className="userBal__card">
                    <div className='userBal__card-icon'><span>
                        <svg width="42" height="47" viewBox="0 0 42 47" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clipPath="url(#clip0_174_2254)">
<path
    d="M11.3125 5.22461L23.8482 16.316L21.6781 21.5121L16.6019 15.3445L16.739 16.0006L13.4226 19.0453L11.3125 5.22461Z"
    fill="#AAAAAA"/>
<path d="M16.9041 16.8213L19.9817 20.7228L9.10908 32.6534L0 32.7029L16.9041 16.8213Z" fill="#AAAAAA"/>
<path
    d="M25.6597 14.522L24.3235 15.7317L21.1247 12.7984L34.8127 0L17.8303 47L14.8164 27.5321L18.2332 23.978L19.3342 29.162L25.6597 14.522Z"
    fill="#AAAAAA"/>
<path d="M28.4575 20.5664L26.2188 26.8311L30.9815 32.573L41.9985 32.5864L28.4575 20.5664Z" fill="#AAAAAA"/>
</g>
<defs>
<clipPath id="clip0_174_2254">
<rect width="42" height="47" fill="white"/>
</clipPath>
</defs>
</svg>

                    </span></div>
                    <span><FcSimCardChip size={55}/></span>
                    <p className="userBal__text">ID 4758 8745</p>
                    <p className="userBal__text">Max Richter</p>
                </div>
                <div className="userBal__balance">
                    <div className="userBal__follow">
                        <p className="userBal__follow-text">Подписка:</p>
                        <select className="userBal__select">
                            <option value="">Геймер</option>
                            <option value="">Профессионал</option>
                            <option value="">Любитель</option>
                            <option value="">Игрок</option>
                            <option value="">Новичок</option>
                        </select>
                    </div>

                    <div className='userBal__stat'>
                        <p className="userBal__stat-text">Баланс</p>
                        <p className="userBal__stat-bal">15600 BS</p>
                        <img className='userBal__stat-img' src={Bal} alt=""/>
                    </div>
                </div>
            </div>

            <div className="userBal__body">
                <div className="userBal__left">
                    <h3 className="userBal__left-title">Перевести монеты</h3>
                    <div className="userBal__cards">
                        <div className="userBal__left-card">
                            <div className="userBal__left-icons">
                                <span><BiRightArrowAlt size={20}/></span>
                                <span><HiCreditCard size={20}/></span>
                            </div>
                            <p className="userBal__left-text">Вывести на карту</p>
                        </div>
                        <div className="userBal__left-card">
                            <div className="userBal__left-icons">
                                <span><BiRightArrowAlt size={20}/></span>
                                <span><FiUsers size={20}/></span>
                            </div>
                            <p className="userBal__left-text">Перевести BS другу</p>
                        </div>
                    </div>
                </div>
                <div className="userBal__body-right">
                    <h3 className="userBal__left-title">Перевести монеты</h3>
                    <div className="userBal__cards">
                        <div className="userBal__right-card">
                            <span>
                                <svg width="32" height="32" viewBox="0 0 32 32" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
<g clipPath="url(#clip0_174_2266)">
<path
    d="M16 32C7.163 32 0 24.837 0 16C0 7.163 7.163 0 16 0C24.837 0 32 7.163 32 16C32 24.837 24.837 32 16 32ZM22.681 7.368L11.694 13.617L6.458 10.64L5.918 11.713L11.694 15.038L23.626 8.226L22.681 7.368ZM20.279 6L11.694 10.908L7.888 8.736L7.106 9.674L11.694 12.276L21.547 6.644L20.28 6H20.279ZM24.463 9.111L11.694 16.406L5.486 12.866L5.189 14.046L11.694 17.747L25.164 10.05L24.463 9.111ZM26.406 12.571L25.812 11.069L11.694 19.115L5 15.333V16.057C5 17.522 5.293 18.972 5.864 20.322C6.40537 21.6295 7.20383 22.8149 8.212 23.808C9.21982 24.7859 10.4005 25.5682 11.694 26.115C13.062 26.705 14.493 27 15.987 27C17.463 27 18.893 26.705 20.279 26.115C21.5877 25.5819 22.7797 24.7982 23.788 23.808C24.7847 22.8055 25.5816 21.6224 26.136 20.322L26.406 19.598C26.802 18.454 27 17.273 27 16.058C27 14.841 26.802 13.68 26.406 12.571Z"
    fill="#BFBFBF"/>
</g>
<defs>
<clipPath id="clip0_174_2266">
<rect width="32" height="32" fill="white"/>
</clipPath>
</defs>
</svg>

                            </span>
                            <p className="userBal__right-text">Mbank</p>
                        </div>
                        <div className="userBal__right-card">
                            <span><BsApple size={30}/></span>
                            <p className="userBal__right-text">Pay</p>
                        </div>
                        <div className="userBal__right-card">
                            <span><FcGoogle size={30}/></span>
                            <p className="userBal__right-text">Google Pay</p>
                        </div>
                        <div className="userBal__right-card">
                            <span><SiWebmoney size={30}/></span>
                            <p className="userBal__right-text">WebMoney</p>
                        </div>
                    </div>
                </div>
            </div>

            <button className="userBal__btn">Пригласи друзей и заработай до 2000 BS</button>

            <h2 className="userBal__title">История транзакций</h2>

            <UserStoreCard/>
            <UserStoreCard/>
            <UserStoreCard/>
            <UserStoreCard/>
            <UserStoreCard/>
            <UserStoreCard/>
        </div>
    );
};

export default UserBalance;
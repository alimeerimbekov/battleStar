import React from 'react';
import img from "../../assets/stream__card.png"
import flag from "../../assets/flag-rs.png"
const StreamCard = () => {
    return (
        <div className="stream__card">
            <img className="stream__card-img" src={img} alt=""/>
            <div className="stream__card-info">
                <div className="stream__card-info-row">
                    <div className="stream__card-info-row-title">
                        <div className='stream__card-info-row-title-icon'>
                            <img src={flag} alt=""/>
                            <p className="stream__card-info-title">HEll_YES_FRANCE</p>
                        </div>
                        <p className='stream__card-info-desc'>Ancient</p>
                    </div>
                    <p className="stream__card-online">Онлайн</p>
                </div>
                <div className='stream__card-info-bottom'>
                    <div className='stream__card-info-bottom-boxs'>
                        <div className="stream__card-info-bottom-box">
                            <p className="stream__card-info-bottom-box-desc">Ставка</p>
                            <p className='stream__card-info-bottom-box-price'>5000 ₽</p>
                        </div>
                        <div className="stream__card-info-bottom-box">
                            <p className="stream__card-info-bottom-box-desc">Режим</p>
                            <p className='stream__card-info-bottom-box-price'>5x5</p>
                        </div>
                    </div>
                    <p className="stream__card-info-bottom-watching">
                        <svg width="20" height="14" viewBox="0 0 20 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9.99967 2.41667C11.532 2.41157 13.0346 2.83899 14.3348 3.64977C15.635 4.46056 16.68 5.6218 17.3497 7C15.9747 9.80833 13.1663 11.5833 9.99967 11.5833C6.83301 11.5833 4.02467 9.80833 2.64967 7C3.31936 5.6218 4.36437 4.46056 5.66457 3.64977C6.96478 2.83899 8.46739 2.41157 9.99967 2.41667ZM9.99967 0.75C5.83301 0.75 2.27467 3.34167 0.833008 7C2.27467 10.6583 5.83301 13.25 9.99967 13.25C14.1663 13.25 17.7247 10.6583 19.1663 7C17.7247 3.34167 14.1663 0.75 9.99967 0.75ZM9.99967 4.91667C10.5522 4.91667 11.0821 5.13616 11.4728 5.52686C11.8635 5.91756 12.083 6.44747 12.083 7C12.083 7.55253 11.8635 8.08244 11.4728 8.47314C11.0821 8.86384 10.5522 9.08333 9.99967 9.08333C9.44714 9.08333 8.91724 8.86384 8.52653 8.47314C8.13583 8.08244 7.91634 7.55253 7.91634 7C7.91634 6.44747 8.13583 5.91756 8.52653 5.52686C8.91724 5.13616 9.44714 4.91667 9.99967 4.91667ZM9.99967 3.25C7.93301 3.25 6.24967 4.93333 6.24967 7C6.24967 9.06667 7.93301 10.75 9.99967 10.75C12.0663 10.75 13.7497 9.06667 13.7497 7C13.7497 4.93333 12.0663 3.25 9.99967 3.25Z" fill="#BFBFBF"/>
                        </svg>
                        1024
                    </p>

                </div>
            </div>
        </div>
    );
};

export default StreamCard;
import React from 'react';
import StreamLogo from "../../../assets/StrimTeamLogo.png"
import StreamLogo1 from "../../../assets/StrimTeamLogo@.png"
import Stream from "../../../assets/StreamWatch.png"
const StreamView = () => {
    return (
        <section className="streamView">
            <div className="container">
                <div className="streamView__row">
                    <div className="streamView__row-team">
                        <div className="streamView__team">
                            <img className="streamView__team-logo" src={StreamLogo} alt=""/>
                            <h2 className="streamView__team-title">ApacheLeader </h2>
                        </div>
                        <p className="streamView__desc">VS</p>
                        <div className="streamView__team">
                            <img className="streamView__team-logo" src={StreamLogo1} alt=""/>
                            <h2 className="streamView__team-title">DeJaVU</h2>
                        </div>
                    </div>

                    <div className="stream__card-info-bottom-box">
                        <p className="stream__card-info-bottom-box-desc">Карта</p>
                        <p className='stream__card-info-bottom-box-price'>Mirage</p>
                    </div>
                    <div className="stream__card-info-bottom-box">
                        <p className="stream__card-info-bottom-box-desc">Ставка</p>
                        <p className='stream__card-info-bottom-box-price'>5x5</p>
                    </div>
                    <div className="stream__card-info-bottom-box">
                        <p className="stream__card-info-bottom-box-desc">Учасников</p>
                        <p className='stream__card-info-bottom-box-price'>8/10</p>
                    </div>
                    <div className="stream__card-info-bottom-box">
                        <p className="stream__card-info-bottom-box-desc">ID</p>
                        <p className='stream__card-info-bottom-box-price streamView__team'>
                            54692725
                            <svg width="15" height="18" viewBox="0 0 15 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11 0.75H2C1.175 0.75 0.5 1.425 0.5 2.25V12.75H2V2.25H11V0.75ZM13.25 3.75H5C4.175 3.75 3.5 4.425 3.5 5.25V15.75C3.5 16.575 4.175 17.25 5 17.25H13.25C14.075 17.25 14.75 16.575 14.75 15.75V5.25C14.75 4.425 14.075 3.75 13.25 3.75ZM13.25 15.75H5V5.25H13.25V15.75Z" fill="#F8F8F8"/>
                        </svg>
                        </p>
                    </div>

                </div>
                <div className='streamView__watch'>
                    <img className='streamView__watch-img' src={Stream} alt="#"/>
                    <div className="streamView__chat">

                    </div>

                </div>
            </div>
        </section>
    );
};

export default StreamView;
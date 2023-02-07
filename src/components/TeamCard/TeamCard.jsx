import React from 'react';
import UserImg from "../../assets/slideUser.png";

const TeamCard = () => {
    return (
        <div className="slide__team">
            <img src={UserImg} alt="" className="slide__team-logo"/>
            <p className="slide__team-name">JJJASON_Team</p>
            <p className="slide__team-ball">1769</p>
        </div>
    );
};

export default TeamCard;
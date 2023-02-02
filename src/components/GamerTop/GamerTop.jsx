import React from 'react';
import GamerUser from "./GamerUser/GamerUser";

const GamerTop = () => {
    return (
        <div className='gamerTop'>
            <div className="gamerTop__top">
                <h2 className='gamerTop__title'>CS:GO</h2>
                <h2 className='gamerTop__title'>DOTA 2</h2>
            </div>

            <div className="gamerTop__line"></div>

            <p className="gamerTop__text">Топ игроков месяца</p>

            <GamerUser/>
            <GamerUser/>
            <GamerUser/>
            <GamerUser/>
            <GamerUser/>
            <GamerUser/>
            <GamerUser/>
            <GamerUser/>
            <GamerUser/>
        </div>
    );
};

export default GamerTop;
import React from 'react';
import Begin from "./Begin/Begin";
import LenSlide from "./LenSlide/LenSlide";
import CSGO from "./CSGO/CSGO";
import WhoPlay from "./WhoPlay/WhoPlay";
import Sales from "../Home/Sales/Sales";
import ProfGamer from "./ProfGamer/ProfGamer";
import InfoGamer from "../../components/InfoGamer/InfoGamer";
import BtnReg from "./BtnReg/BtnReg";
import Stat from "./Stat/Stat";

const Lending = () => {
    return (
        <>
            <Begin/>
            <main className='lending'>
                <LenSlide/>
                <CSGO/>
                <WhoPlay/>
                <h2 className="whoPlay__title">
                    Акции и бонусы от BattleStar
                </h2>
                <Sales/>
                <ProfGamer/>
                <InfoGamer/>
                <BtnReg/>
            </main>
            <Stat/>
            <main className='lending'>

            </main>
        </>

    );
};

export default Lending;
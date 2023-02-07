import React from 'react';
import StrimCard from "../../../components/StrimCard/StrimCard";
import StrimCardBattle from "../../../components/StrimCardBattle/StrimCardBattle";

const Strim = () => {
    return (
        <section className='strim'>
            <div className="container">
                <div className="strim__box">
                    <div className="srtim__left">
                        <StrimCard/>
                        <StrimCard/>
                        <StrimCard/>
                    </div>
                    <div className="strim__right">
                        <h2 className="strim__right-title">Популярные матчи</h2>
                        <StrimCardBattle/>
                        <StrimCardBattle/>
                        <StrimCardBattle/>
                        <StrimCardBattle/>
                        <StrimCardBattle/>
                        <StrimCardBattle/>
                        <StrimCardBattle/>
                        <StrimCardBattle/>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Strim;
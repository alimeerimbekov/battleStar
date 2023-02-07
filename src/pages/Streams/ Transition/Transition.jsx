import React from 'react';
import MatchesCd from "./MatchesCd/MatchesCd";
import Stream from "../Stream/Stream";

const Transition = () => {
    return (
        <section className="transition">
            <div className="container__transition">
                <div className="transition__row">
                    <p className="transition__desc">ОТКРЫТЫЕ МАТЧИ</p>
                    <p className="transition__desc">ТРАНСЛЯЦИИ</p>
                    <p className="transition__desc">ЗАВЕРШЁННЫЕ</p>
                </div>
                <MatchesCd/>

            </div>
            
            <Stream/>

        </section>
    );
};

export default Transition;
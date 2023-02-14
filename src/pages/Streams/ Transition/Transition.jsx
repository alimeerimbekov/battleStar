import React from 'react';
import MatchesCd from "./MatchesCd/MatchesCd";
import Stream from "../Stream/Stream";
import TransitionRow from "./TransitionRow/TransitionRow";

const Transition = ({item1, item2, item3}) => {
    return (
        <section className="transition">
            <div className="container__transition">
                <TransitionRow item1={'ОТКРЫТЫЕ МАТЧИ'} item2={'ТРАНСЛЯЦИИ'} item3={'ЗАВЕРШЁННЫЕ'}/>
                <MatchesCd/>
            </div>
            <Stream/>

        </section>
    );
};

export default Transition;
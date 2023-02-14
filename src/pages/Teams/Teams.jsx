import React from 'react';
import TransitionRow from "../Streams/ Transition/TransitionRow/TransitionRow";
import TeamsCard from "../../components/TeamsCard/TeamsCard";
import TeamsTitle from "./TeamsTitle";
import TeamsSearch from "../../components/TeamsSearch/TeamsSearch";
const Teams = () => {
    return (
        <section className='teams'>
            <div className="container__teams">
                <TransitionRow item1={"МОИ КОМАНДЫ"} item2={"ОТКРЫТЫЕ КОМАНДЫ"} item3={"ТОП КОМАНД"}/>
                <h2 className='teams__title'>
                    Приглашения в команды
                </h2>

                <div className="teams__row">
                    <TeamsCard/>
                    <TeamsCard/>
                    <TeamsCard/>
                    <div className="teams__row-text">
                        <p className='teams__row-desc'>Развернуть</p>
                        <span>
                            <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.41 0.580078L6 5.17008L10.59 0.580078L12 2.00008L6 8.00008L0 2.00008L1.41 0.580078Z" fill="#F8F8F8"/>
</svg>

                        </span>
                    </div>
                </div>
                <TeamsTitle/>
                <TeamsSearch/>
                <div className="teams__row">
                    <TeamsCard/>
                    <TeamsCard/>
                    <TeamsCard/>
                </div>

            </div>


        </section>
    );
};

export default Teams;
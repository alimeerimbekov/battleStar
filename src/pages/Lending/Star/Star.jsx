import React from 'react';
import StarCard from "../../../components/StarCard/StarCard";

const Star = () => {
    return (
        <section className='star'>
            <div className="container">
                <h2 className="star__title">Звёзды BattleStar</h2>
                <p className="star__desc">Задача организации, в особенности же новая модель организационной деятельности позволяет </p>

                <div className="star__cards">
                    <StarCard/>
                    <StarCard/>
                    <StarCard/>
                    <StarCard/>
                    <StarCard/>
                </div>
            </div>
        </section>
    );
};

export default Star;
import React from 'react';
import GamerTop from "../../../components/GamerTop/GamerTop";
import GamerNews from "../../../components/GamerNews/GamerNews";

const Gamer = () => {
    return (
        <section className='gamer'>
            <div className="container">
                <div className="gamer__box">
                    <GamerTop/>
                    <GamerNews/>
                </div>
            </div>
        </section>
    );
};

export default Gamer;
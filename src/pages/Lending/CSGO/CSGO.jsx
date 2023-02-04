import React from 'react';
import CSGO from '../../../assets/CSGO.jpg'

const Csgo = () => {
    return (
        <section className='csgo'>
            <div className="container">
                <div className="csgo__hover">
                    <div className="csgo__hover-true">
                        <img src={CSGO} alt="" className="csgo__hover-img"/>
                        <div className="csgo__hover-bg active"><p className="csgo__hover-effect active">Создать аккаунт</p></div>
                    </div>
                </div>
                <p className="csgo__name">CS:GO</p>
            </div>
        </section>
    );
};

export default Csgo;
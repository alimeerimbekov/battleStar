import React, {useContext} from 'react';
import CSGO from '../../../assets/CSGO.jpg'
import {CustomContext} from "../../../utils/Context";

const Csgo = () => {

    const {setClose, setActive} = useContext(CustomContext)

    return (
        <section className='csgo'>
            <div className="container">
                <div className="csgo__hover">
                    <div className="csgo__hover-true">
                        <img src={CSGO} alt="" className="csgo__hover-img"/>
                        <div className="csgo__hover-bg active">
                            <button className="csgo__hover-effect active" type='button'
                                    onClick={() => {
                                        setClose(true)
                                        setActive(false)
                                    }}>
                                Создать аккаунт
                            </button>
                        </div>
                    </div>
                </div>
                <p className="csgo__name">CS:GO</p>
            </div>
        </section>
    );
};

export default Csgo;
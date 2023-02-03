import React, {useState} from 'react';
import Bs from "../Bs/Bs";

const Filt = () => {
    const [active,setActive] = useState(false)
    return (
        <div className='filt' style={{background : active ? "rgba(248, 248, 248, 0.05)" : "#040101",borderRadius : "4px"}}>
            <div onClick={() => setActive(!active)}  className="filt__acc">
                <h2 className='filt__title'>Ставка</h2>
                <svg  width="12" height="7.34" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.41 0.580078L6 5.17008L10.59 0.580078L12 2.00008L6 8.00008L0 2.00008L1.41 0.580078Z" fill="#F8F8F8"/>
                </svg>
            </div>
            <form style={{display : active ? "flex" : "none"}} className="filt__form" action="">
                <label  className='filt__label' htmlFor="">
                    <input  className="filt__input" type="checkbox"/>
                    <span className="filt__input-desc">100 <Bs/> </span>
                </label>
                <label  className='filt__label' htmlFor="">
                    <input  className="filt__input" type="checkbox"/>
                    <span className="filt__input-desc">100 <Bs/> </span>
                </label>
                <label  className='filt__label' htmlFor="">
                    <input  className="filt__input" type="checkbox"/>
                    <span className="filt__input-desc">100 <Bs/> </span>
                </label>
                <label  className='filt__label' htmlFor="">
                    <input  className="filt__input" type="checkbox"/>
                    <span className="filt__input-desc">100 <Bs/> </span>
                </label>
                <label  className='filt__label' htmlFor="">
                    <input  className="filt__input" type="checkbox"/>
                    <span className="filt__input-desc">100 <Bs/> </span>
                </label>
                <label  className='filt__label' htmlFor="">
                    <input  className="filt__input" type="checkbox"/>
                    <span className="filt__input-desc">100 <Bs/> </span>
                </label>
                <label  className='filt__label' htmlFor="">
                    <input  className="filt__input" type="checkbox"/>
                    <span className="filt__input-desc">100 <Bs/> </span>
                </label>


            </form>
        </div>
    );
};

export default Filt;
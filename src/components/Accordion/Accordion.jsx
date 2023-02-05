import React, {useState} from 'react';
import {AiOutlinePlus} from "react-icons/ai";
import {IoMdClose} from 'react-icons/io';


const Accordion = () => {
    const [acc, setAcc] = useState(false)
    return (

        <div className="support__card">
            <div className="support__acc" onClick={() => setAcc(!acc)}>
                <p className="support__acc-title">Что делать если мой аккаунт заблокировали?</p>
                {
                    acc ? <span className="support__acc-icon" onClick={() => setAcc(false)}><IoMdClose/></span> :
                        <span className="support__acc-icon" onClick={() => setAcc(true)}><AiOutlinePlus/></span>

                }

            </div>
            <p className='support__acc-desc' style={{display: acc ? 'block' : 'none'}}>Значимость этих
                проблем настолько очевидна, что постоянное информационно-пропагандистское обеспечение
                нашей <br/>
                деятельности играет важную роль в формировании систем массового участия. Значимость этих проблем
                настолько <br/>
                очевидна, что сложившаяся структура организации требуют определения и уточнения новых
                предложений.</p>
        </div>
    );
};

export default Accordion;
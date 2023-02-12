import React from 'react';
import StreamCard from "../../../components/StreamCard/StreamCard";

const Stream = () => {
    return (
        <section className="stream">
            <div className="container">
                <div className="stream__title">
                    <p className="stream__desc">Открытые лобби</p>
                    <div className="stream__filt">
                        <p className="stream__desc">
                            Отобразить
                        </p>
                        <svg width="24" height="18" viewBox="0 0 24 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15.3375 0.25V8.375H8.6625V0.25H15.3375ZM16.5875 8.375H23.25V0.25H16.5875V8.375ZM15.3375 17.75V9.625H8.6625V17.75H15.3375ZM16.5875 9.625V17.75H23.25V9.625H16.5875ZM7.4125 9.625H0.75V17.75H7.4125V9.625ZM7.4125 8.375V0.25H0.75V8.375H7.4125Z" fill="#FAC704"/>
                        </svg>
                        <svg width="24" height="18" viewBox="0 0 24 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.75 11.5H5.75V6.5H0.75V11.5ZM0.75 17.75H5.75V12.75H0.75V17.75ZM0.75 5.25H5.75V0.25H0.75V5.25ZM7 11.5H23.25V6.5H7V11.5ZM7 17.75H23.25V12.75H7V17.75ZM7 0.25V5.25H23.25V0.25H7Z" fill="#6A6C7D"/>
                        </svg>

                    </div>
                </div>
                <div className='stream__row'>
                    <StreamCard/>
                    <StreamCard/>
                    <StreamCard/>
                    <StreamCard/>
                    <StreamCard/>
                    <StreamCard/>
                    <StreamCard/>
                    <StreamCard/>
                </div>
            </div>
        </section>
    );
};

export default Stream;
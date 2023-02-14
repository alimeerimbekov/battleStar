import React from 'react';
import UserAside from "../../components/UserAside/UserAside";

const UserCabinet = () => {
    return (
        <section className='userCabinet'>
            <div className="container">
                <div className="userCabinet__content">
                    <UserAside/>

                </div>
            </div>
        </section>
    );
};

export default UserCabinet;
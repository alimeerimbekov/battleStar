import React from 'react';
import UserStoreCard from "./UserStoreCard";

const UserStore = () => {
    return (
        <div className='userStore'>
            <div className="userStore__top">
                <h3 className="userStore__title">История матчей</h3>
                <div className="userStore__look">
                    <p className="userStore__look-text">Показать:</p>
                    <select className="userStore__select">
                        <option value="">Все матчи</option>
                        <option value="">Мои матчи</option>
                    </select>
                </div>
            </div>
            <UserStoreCard/>
            <UserStoreCard/>
            <UserStoreCard/>
            <UserStoreCard/>
            <UserStoreCard/>
            <UserStoreCard/>
            <UserStoreCard/>
            <UserStoreCard/>
            <UserStoreCard/>
            <UserStoreCard/>
            <UserStoreCard/>
            <UserStoreCard/>
        </div>
    );
};

export default UserStore;
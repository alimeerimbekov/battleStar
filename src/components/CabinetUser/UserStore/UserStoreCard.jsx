import React from 'react';

const UserStoreCard = () => {
    return (
        <div className="userStore__store">
            <div className="userStore__border">
                <p className="userStore__name">CS:GO</p>
                <div className="userStore__number">
                    <div className="userStore__database">
                        <p className="userStore__date">07.06.2021</p>
                        <p className="userStore__time">19:20</p>
                    </div>
                    <div className="userStore__mode">
                        <p className="userStore__text">Режим</p>
                        <p className="userStore__num">5v5</p>
                    </div>
                    <div className="userStore__id">
                        <p className="userStore__text">ID</p>
                        <p className="userStore__num">37589023</p>
                    </div>
                </div>
                <div className="userStore__status">
                    <p className="userStore__status-win">Победа</p>
                    <p className="userStore__status-balance">+ 1200 BS</p>
                </div>
            </div>
        </div>

    );
};

export default UserStoreCard;
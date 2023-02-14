import React from 'react';

const TeamsTitle = () => {
    return (
        <div className='teamsTitle'>
            <h2 className='teamsTitle__title'>Мои команды</h2>
            <div className="teamsTitle__info">
                <p className='teamsTitle__desc'>Сортировать</p>
                <div className='teamsTitle__svg'>
                    <p className="teamsTitle__text">По рейтингу</p>
                    <span><svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.41 0.580078L6 5.17008L10.59 0.580078L12 2.00008L6 8.00008L0 2.00008L1.41 0.580078Z" fill="#F8F8F8"/>
</svg>
</span>
                </div>
            </div>


        </div>
    );
};

export default TeamsTitle;
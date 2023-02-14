import React from 'react';

const TransitionRow = ({item1, item2, item3}) => {
    return (
        <div className="transition__row">
            <p className="transition__desc">{item1}</p>
            <p className="transition__desc">{item2}</p>
            <p className="transition__desc">{item3}</p>
        </div>
    );
};

export default TransitionRow;
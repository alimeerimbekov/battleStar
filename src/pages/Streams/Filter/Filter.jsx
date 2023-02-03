import React from 'react';
import Filt from "../../../components/Filt/Filt";

const Filter = () => {
    return (
        <aside className="filter">
            <h2 className="filter__title">Фильтры</h2>
            <Filt/>
        </aside>
    );
};

export default Filter;
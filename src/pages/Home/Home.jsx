import React from 'react';

import FirstHome from "./FirstHome/FirstHome";
import Adver from "./Adver/Adver";
import Gamer from "./Gamer/Gamer";
import Slide from "./Slide/Slide";
import Sales from "./Sales/Sales";
import Strim from "./Strim/Strim";


const Home = () => {
    return (
        <main className='main'>
            <FirstHome/>
            <Adver/>
            <Gamer/>
            <Slide/>
            <Sales/>
            <Strim/>
        </main>
    );
};

export default Home;
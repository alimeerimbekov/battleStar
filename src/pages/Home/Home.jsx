import React from 'react';

import FirstHome from "./FirstHome/FirstHome";
import Adver from "./Adver/Adver";
import Gamer from "./Gamer/Gamer";


const Home = () => {
    return (
        <main className='main'>
            <FirstHome/>
            <Adver/>
            <Gamer/>
        </main>
    );
};

export default Home;
import React, {useContext} from 'react';

import FirstHome from "./FirstHome/FirstHome";
import Adver from "./Adver/Adver";
import Gamer from "./Gamer/Gamer";
import Slide from "./Slide/Slide";
import Sales from "./Sales/Sales";
import Strim from "./Strim/Strim";
import {Navigate} from "react-router-dom";
import {CustomContext} from "../../utils/Context";


const Home = () => {


    const {user} = useContext(CustomContext)

    if (user.email.length === 0) {
        return <Navigate to='/lending'/>
    }

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
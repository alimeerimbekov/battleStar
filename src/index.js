import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import {Context} from "./utils/Context";
import {ChakraProvider} from '@chakra-ui/react'
import ScrollToTop from "./ScrollTop";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <Context>
            <ChakraProvider>
                <ScrollToTop/>
                <App/>
            </ChakraProvider>
        </Context>
    </BrowserRouter>
);

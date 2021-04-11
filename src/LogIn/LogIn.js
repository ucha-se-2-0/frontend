import React, { StrictMode } from 'react'
import Content from './content'
import {Footer} from '../Components'
import Header from './Header'

if(window.location.pathname==="/Login"){
    import('./Content.css');
    import('./Header');
    import('./Header.css')
}

function LogIn() {
    return (
        <>
            <Header />
            <Content/>
            <Footer/>
        </>
    );
}

export default LogIn;
import React, { StrictMode } from 'react'
import Content from './content'
import {Footer} from '../Components'
import Header from './Header'

if(window.location.pathname==="/signin"){
    import('./Content.css');
    import('./Header');
}

function SignIn() {
    return (
        <>
            <Header />
            <Content/>
            <Footer/>
        </>
    );
}

export default SignIn;
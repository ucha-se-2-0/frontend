import React from 'react'
import Content from './content'
import {Footer} from '../../Components'
import Header from './Header'

if(window.location.pathname.toLowerCase() ==="/login"){
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
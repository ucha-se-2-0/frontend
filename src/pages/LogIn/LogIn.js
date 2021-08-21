import React, { useEffect, useState } from 'react'
import Content from './Content'
import {Footer} from '../../Components'
import Header from './Header'

function LogIn() {
    useEffect(()=>{
        import('./Content.css');
        import('./Header');
        import('./Header.css')
    }, [])

    return (
        <>
            <Header />
            <Content/>
            <Footer/>
        </>
    );
}

export default LogIn;
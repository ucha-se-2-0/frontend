import React from 'react'

import Content from './Content'
import { Navbar as Navbar, Header, SearchField, Footer } from '../../Components'
import { theme } from '../../Style/Colors'

import './Content.css'
import './Navbar.css'

class Sections extends React.Component {
    render() {
        return (
            <>
                <Header content = "Уроци" />
                <Navbar content={<SearchField placeholder = "Потърсете урок" margin = "80px" width = "calc(100% - 100px)" search={() => { }} />} />
                <Content />
                <Footer />
            </>
        );
    }

    componentDidMount()
    {
        //Might change
        
        if(theme === "dark")
        {
            document.getElementsByClassName("header")[0].style.boxShadow = "none";
        }
        else
        {
            document.getElementsByClassName("header")[0].style.boxShadow = "0px 0px 50px 10px rgb(20, 20, 55)";
        }
    }
}

export default Sections;
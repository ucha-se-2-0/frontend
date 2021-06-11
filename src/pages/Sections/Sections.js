import React from 'react'

import Content from './Content'
import { DefaultNavbar as Navbar, Header, SearchField, Footer } from '../../Components'
import { theme } from '../../Colors'

if (window.location.pathname.match("/lessons")) {
}
import('./Content.css');
import('./Navbar.css');

class Sections extends React.Component {
    render() {
        return (
            <>
                <Header content = "Уроци" />
                <Navbar content={<SearchField placeholder = "Потърсете урок" margin = "80px" width = "calc(100% - 100px)" search={() => { }} class="important" />} />
                <Content />
                <Footer />
            </>
        );
    }

    componentDidMount()
    {
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
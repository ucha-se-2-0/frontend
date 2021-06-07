import React from 'react'

import Content from './Content'
import { DefaultNavbar as Navbar, Header, SearchField, Footer } from '../../Components'
import { theme } from '../../Colors'
import { GetSubjectByUrl } from '../../urls'

if (window.location.pathname.match("/subjects/")) {
    import('./Content.css');
    import('./Navbar.css');
}

class Subjects extends React.Component {
    render() {
        return (
            <>
                <Header content={GetSubjectByUrl(window.location.pathname)} />

                {/* <span style = {{width: "100%", height: "5px", display: "block", backgroundColor: colors.notSoLight}}/> */}

                <Navbar content={<SearchField width = "calc(100% - 100px)" search={() => { }} class="important" />} />
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

export default Subjects;
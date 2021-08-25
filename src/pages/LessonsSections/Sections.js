import React from 'react'

import Content from './Content'
import { Navbar as Navbar, Header, SearchField, Footer } from '../../Components'

import './Content.css'

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
}

export default Sections;
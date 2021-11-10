import { Component } from "react"
import { unis } from "../../Assets"

import Content from './Content'

import "./Content.css"
import { DefaultNavbar, Footer, Page } from "../../Components"

import './Content.css';
import './Universities.css';

class SideNavbar extends Component {

    constructor(props) {
        super(props);

        this.state = { active: 0 };

        this.OnScroll = this.OnScroll.bind(this);
    }

    componentDidMount() {
        document.addEventListener("scroll", this.OnScroll);
    }
    componentWillUnmount() {
        document.removeEventListener("scroll", this.OnScroll);
    }


    OnScroll(e) {
        let content = document.getElementsByClassName("content")[0].childNodes;

        for(let u in content)
        {
            if(typeof content[u] !== "object")
            {
                break;
            }
            
            let rect = content[u].getBoundingClientRect();

            if(rect.top < window.innerHeight / 2 && rect.bottom > window.innerHeight / 2)
            {
                this.setState({active: parseInt(u)});
                break;
            }
        }
    }

    NavigateTo(uni) {
        this.setState({ active: uni })

        if (uni === 0) {
            window.scrollTo(0, 0);
            return;
        }

        let content = document.getElementsByClassName("content")[0];

        window.scrollTo(0, - content.getBoundingClientRect().top + content.childNodes[uni].getBoundingClientRect().top + 140);     
    }


    
    render() {
        return (
            <div className="navigation">
                {unis.map((uni, i) => <button onClick={() => { this.NavigateTo(i) }} key={i} className={this.state.active === i ? "active" : ""}>{uni.name}</button>)}
            </div>
        )
    }
}

function Universities() {
    return (
        <Page className="unis-page">
            <DefaultNavbar />
            <div className="header">Университети в България</div>
            <SideNavbar />
            <Content />
            <Footer />
        </Page>
    );
}

export default Universities;
import { Component, createRef, useEffect, useState } from "react"
import { unis } from "../../Assets"

import Content from './Content'

import "./Content.css"
import { DefaultNavbar } from "../../Components"


class SideNavbar extends Component {

    constructor(props)
    {
        super(props);

        this.state = {active: 0, scroll: 0};

        this.OnScroll = this.OnScroll.bind(this);
    }

    componentDidMount()
    {
        document.addEventListener("scroll", this.OnScroll);

        this.content = document.getElementsByClassName("content")[0].childNodes;
    }

    componentDidUpdate()
    {
        this.content = document.getElementsByClassName("content")[0].childNodes;
    }

    componentWillUnmount()
    {
        document.removeEventListener("scroll", this.OnScroll);
    }

    
    OnScroll(e) {
        //console.log("Before", this.state.scroll);
        if(this.state.scroll - window.scrollY > window.innerHeight / 2 + 150)
        {
            this.setState({active: this.state.active - 1, scroll: this.state.scroll - parseInt(getComputedStyle(this.content[this.state.active - 1]).height) - 20});
        }
        
        let height = parseInt(getComputedStyle(this.content[this.state.active]).height)
        if(window.scrollY - this.state.scroll > height - window.innerHeight / 2 + 150)
        {
            this.setState({active: this.state.active + 1, scroll: this.state.scroll + height + 20});
        }

        //console.log("After", this.state.scroll);
    }

    NavigateTo(uni) {
        this.setState({active: uni})
        
        if (uni === 0) {
            this.setState({scroll: 0});
            window.scrollTo(0, 0);
            return;
        }
        
        let height = 0;

        for (let u = 0; u < this.content.length; u++) {
            if (u === uni) {
                this.setState({scroll: height + 150})
                window.scrollTo(0, height + 150);
                break;
            }
            else {
                height += parseInt(getComputedStyle(this.content[u]).height) + 20;
            }
        }
    }
    

    render() {
        return (
            <div className="navigation">
                {unis.map((uni, i) => <a onClick={() => { this.NavigateTo(i) }} key={i} className={this.state.active === i ? "active" : ""}>{uni.name}</a>)}
            </div>
        )
    }
}

function Universities() {
    useEffect(() => {
        import('./Content.css');
        import('./Universities.css');

    }, [])

    return (
        <div className="page unis-page">
            <DefaultNavbar />
            <div className = "header">Университети в България</div> 
            <SideNavbar />
            <Content />
        </div>
    );
}

export default Universities;
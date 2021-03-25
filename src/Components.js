//Here are complex and often-used components that 
//can be imported and simply used

import React from "react"
import "./Style/Components.css"


export class Button extends React.Component {

  constructor(props) {
    super(props);
    this.state = { cursor: "default" }
    if (this.props.link !== undefined) {
      this.state.cursor = "pointer";
    }
  }

  render() {
    const style = { width: this.props.width, height: this.props.height, cursor: this.state.cursor };
    return (
      <a id={this.props.id} className={"button " + this.props.class} href={this.props.link} style={style} onClick={this.props.onClick}>
        <div className="button-content" style={{ cursor: this.state.cursor }}>
          {this.props.name}
        </div>
        <div className="button-background"> </div>
      </a>
    );
  }
}

export class SearchField extends React.Component {
  constructor(props) {
    super(props);
    this.DOMnode = React.createRef();
  }

  componentDidMount()
  {
    window.addEventListener('click', event => {
      console.log()
      if (!this.Pressed(event.target)) {
        console.log(this.DOMnode.current);
        let search = this.DOMnode.current.parentNode.parentNode;
        search.style.width = "0%";
        search.querySelector(".button-background").style.backgroundColor = "transparent";
        search.querySelector("input").style.display = "none";
        search.querySelector(".button-content").style.color = "white";
      }
    });

    window.addEventListener('resize', ()=>{
      console.log("resized");
      if(this.DOMnode.current.parentNode.childNodes[2].style.display !== "none"
      && this.DOMnode.current.parentNode.childNodes[2].style.display !== "") 
        this.DOMnode.current.parentNode.parentNode.style.width = window.innerWidth - 60 + "px";
    });
  }

  render() {
    return (
      <Button class={"search " + this.props.class} name={
        <>
          <div ref={this.DOMnode} />

          <i className="fa fa-search" onClick = {event=>{
            if(this.DOMnode.current.parentNode.childNodes[2].style.display !== "none"
            && this.DOMnode.current.parentNode.childNodes[2].style.display !== "")
              this.props.search(this.DOMnode.current.parentNode.childNodes[2].value)
            }}></i>

          <input type="text" onKeyUp={event => {
            if (event.key === "Enter")
              if (this.props.search !== undefined)
                this.props.search(event.target.value);
              else
                console.log("Search function not given! Set it using 'search' property of 'SearchField'");
          }
          }></input>
        </>
      } height={this.props.height} onClick={() => {
        let search = this.DOMnode.current.parentNode.parentNode;
        search.style.width = window.innerWidth - 60 + "px";
        search.querySelector(".button-background").style.backgroundColor = "white";
        search.querySelector("input").style.display = "inline-block";
        search.querySelector(".button-content").style.color = "var(--darkpurple)";
      }} />
    );
  }

  Pressed(target)
  {
    let root = this.DOMnode.current.parentNode.parentNode;
    return (root === target || root.childNodes[0] === target || root.childNodes[1] === target || 
      root.childNodes[0].childNodes[1] === target || root.childNodes[0].childNodes[2] === target)
  }
}

export class Footer extends React.Component {
  render() {
    return (
      <div className="footer">
        {/*TO DO*/}
      </div>
    );
  }
}

export class DefaultNavbar extends React.Component {
  render() {
    return (
      <div className="navbar">
        <Button name="Вход" />

        {this.props.content}
        <a href="/">
          <img src="/Images/logo.png" alt="HOME" className="home"></img>
        </a>
      </div>
    );
  }
}

export default { Button, SearchField, Footer, DefaultNavbar };
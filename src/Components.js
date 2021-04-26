//Here are complex and often-used components that 
//can be imported and simply used

import React from "react"
import {colors, theme} from './Colors'
import "./Style/Components.css"

class Button extends React.Component {

  constructor(props) {
    super(props);
    this.state = { cursor: "default" }
    if (this.props.link !== undefined) {
      this.state.cursor = "pointer";
    }
  }

  render() {
    const style = { 
      width: this.props.width, 
      height: this.props.height, 
      cursor: this.state.cursor,
      backgroundColor: theme === "dark" ? colors.button.dark : colors.button.light,
      color: theme === "dark" ? colors.text.dark : colors.text.light };
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

class SearchField extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      style: {
        buttonBackground: { backgroundColor: "transparent" },
        input: { display: "none" },
        buttonContent: { color: theme === "dark" ? colors.text.dark : colors.text.light },
        search: { width: "0%" }
      }
    }
  }

  componentDidMount() {
    window.addEventListener('click', event => {
      if (!this.state.pressed) {
        this.setState({
          visible: false,
          pressed: false,
          style: {
            buttonBackground: { backgroundColor: "transparent" },
            input: { display: "none" },
            buttonContent: { color: theme === "dark" ? colors.text.dark : colors.text.light },
            search: { width: "0%" }
          }
        });
      }
      else {
        this.state.pressed = false;
      }
    });

    window.addEventListener('resize', () => {
      if (this.state.visible) {
        let state = this.state;
        state.style.search.width = window.innerWidth - Number(window.getComputedStyle(document.getElementsByClassName("search")[0]).marginLeft.match(/\d+/)[0]) - 60 + "px";
        this.setState(state);
      }
    });
  }

  render() {
    return (
      <div className={"search button " + this.props.class} style={{ cursor: "default", width: this.state.style.search.width }} onClick={() => {
        this.setState({
          visible: true,
          pressed: true,
          style: {
            buttonBackground: { backgroundColor: "white" },
            input: { display: "inline-block" },
            buttonContent: { color: colors.text.light },
            search: { width: window.innerWidth - Number(window.getComputedStyle(document.getElementsByClassName("search")[0]).marginLeft.match(/\d+/)[0]) - 60 + "px" }
          }
        });
      }} onMouseUp={() => { }}>
        <div className="button-content" style={{ cursor: "default", color: this.state.style.buttonContent.color }}>
          <i className="fa fa-search" onClick={() => {
            if (this.state.visible)
              if (this.props.search !== undefined)
                this.props.search(document.getElementsByClassName("search")[0].firstChild.childNodes[1].value)
              else
                console.log("Search function not given! Set it using 'search' property of 'SearchField'");
          }}></i>

          <input type="text" onKeyUp={event => {
            if (event.key === "Enter")
              if (this.props.search !== undefined)
                this.props.search(event.target.value);
              else
                console.log("Search function not given! Set it using 'search' property of 'SearchField'");
          }
          } style={this.state.style.input} />
        </div>
        <div className="button-background" style={this.state.style.buttonBackground} />
      </div>
    );
  }

  // Pressed(target) {
  //   let root = this.DOMnode.current.parentNode.parentNode;
  //   return (root === target || root.childNodes[0] === target || root.childNodes[1] === target ||
  //     root.childNodes[0].childNodes[1] === target || root.childNodes[0].childNodes[2] === target)
  // }
}

class Footer extends React.Component {
  render() {
    return (
      <div className="footer" style = {theme === "dark" ? {backgroundColor: colors.footer.dark, color: colors.text.dark} : {backgroundColor: colors.footer.light, color: colors.text.light}}>
        {/*TO DO*/}
      </div>
    );
  }
}

class DefaultNavbar extends React.Component {
  render() {
    return (
      <div className="navbar" style = {{backgroundColor: theme === "dark" ? colors.navbar.dark : colors.navbar.light}}>
        {this.props.content}

        <Button name="Вход" class="important" link = "/Login" />

        <a href="/" className="home important">
          <img src={theme === "dark" ? "/Images/LogoLight.jpg" : "/Images/LogoDark.jpg"} alt="HOME"></img>
        </a>
      </div>
    );
  }
}

class Header extends React.Component {
  render() {
    return (
      <div className="header" style = {theme === "dark" ? {backgroundColor: colors.header.dark, color: colors.text.dark} : {backgroundColor: colors.header.light, color: colors.text.light}}>
        {this.props.content}
      </div>
    );
  }
}

class Title extends React.Component
{
  render()
  {
    return(
    <div className="content-title" style = {{color: theme === "dark" ? colors.title.dark : colors.title.light}}>
      {this.props.name}
    </div>)
  }
}

export { Button, SearchField, Footer, DefaultNavbar, Header, Title };
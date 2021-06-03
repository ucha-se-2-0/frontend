//Here are complex and often-used components that 
//can be imported and simply used

import React, { useRef } from "react"
import { colors, theme } from './Colors'
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
      color: theme === "dark" ? colors.text.dark : colors.text.light
    };
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

function DropdownElement(props) {
  return (
    <li style={{ backgroundColor: theme === "dark" ? colors.notSoDark : colors.notSoLight }}>
      <Button name={props.name} link={props.link} />
    </li>
  );
}

class Dropdown extends React.Component {
  constructor(props)
  {
    super(props)
    this.dropdownEl = React.createRef()
    this.state = {posLeft: 0}

    window.addEventListener("resize", this.MoveMenu.bind(this))
  }

  componentDidMount()
  {
    //              ???
    setTimeout(this.MoveMenu.bind(this))
  }

  MoveMenu()
  {
    let dd = this.dropdownEl.current
    if(dd)
    {
      let button = dd.querySelector(".dropdown>.button")
      let menu = dd.querySelector("ul")
      let btnPos = button.getBoundingClientRect()
      let offset = (menu.getBoundingClientRect().width - btnPos.width) / 2;
      this.setState({posLeft: (btnPos.left - offset) + "px"})
    }
  }

  render() {
    let options = []
    if (this.props.children instanceof Array) {
      for (let i in this.props.children) {
        if (this.props.children[i].type.name === "DropdownElement") {
          options.push(this.props.children[i])
        }
      }
    }

    if (this.props.options) {
      let key = 0
      for (let opt of this.props.options) {
        if (opt.name !== undefined && opt.link !== undefined) {
          options.push(<DropdownElement key={key} name={opt.name} link={opt.link} />)
        }

        key++
      }
    }

    return (
      <div ref = {this.dropdownEl} className="dropdown">
        <Button name={this.props.name}/>
        <ul className="dropdown-options" style={{ left: this.state.posLeft }}>
          {options}
        </ul>
      </div>
    )
  }
}

class SearchField extends React.Component {
  constructor(props) {
    super(props);
    this.stateWhenCollapsed = {
      collapsed: true,
      style: {
        buttonBackground: { backgroundColor: "transparent" },
        input: { visibility: "hidden" },
        buttonContent: { color: theme === "dark" ? colors.text.dark : colors.text.light },
        search: { width: "0%" }
      }
    }
    this.state = this.stateWhenCollapsed;
  }

  componentDidMount() {
    window.addEventListener('click', () => {
      if (this.clickHandled) {
        this.clickHandled = false
      }
      else {
        if (!this.collapsed) {
          console.log("hide")
          this.setState(this.stateWhenCollapsed);
        }
      }
    });

    window.addEventListener('resize', () => {
      if (!this.state.collapsed) {
        let state = this.state;
        state.style.search.width = window.innerWidth - Number(window.getComputedStyle(document.getElementsByClassName("search")[0]).marginLeft.match(/\d+/)[0]) - 60 + "px";
        this.setState(state);
      }
    });
  }

  render() {
    this.stateWhenCollapsed.style.buttonContent.color = theme === "dark" ? colors.text.dark : colors.text.light

    return (
      <div className={"search button " + this.props.class} style={{ cursor: "default", width: this.state.style.search.width }} onClick={() => {
        //if (this.state.collapsed) {
          this.clickHandled = true
          this.setState({
            collapsed: false,
            style: {
              buttonBackground: { backgroundColor: "white" },
              input: { visibility: "visible" },
              buttonContent: { color: colors.text.light },
              search: { width: window.innerWidth - Number(window.getComputedStyle(document.getElementsByClassName("search")[0]).marginLeft.match(/\d+/)[0]) - 60 + "px" }
            }
          });
        //}
      }}>
        <div className="button-content" style={{ cursor: "default", color: this.state.style.buttonContent.color }}>
          <i className="fa fa-search" onClick={() => {
            if (!this.state.collapsed)
              this.Search(document.getElementsByClassName("search")[0].firstChild.childNodes[1].value)
          }}></i>

          <input type="text" onKeyUp={event => {
            if (event.key === "Enter")
              this.Search(event.target.value);
          }
          } style={this.state.style.input} />
        </div>
        <div className="button-background" style={this.state.style.buttonBackground} />
      </div>
    );
  }

  Search(request) {
    if (this.props.search !== undefined)
      this.props.search(request)
    else
      console.log("Search function not given! Set it using 'search' property of 'SearchField'");
  }
}

class Footer extends React.Component {
  render() {
    return (
      <div className="footer" style={theme === "dark" ? { backgroundColor: colors.footer.dark, color: colors.text.dark } : { backgroundColor: colors.footer.light, color: colors.text.light }}>
        {/*TO DO*/}
        <p>

        </p>
      </div>
    );
  }
}

class DefaultNavbar extends React.Component {
  render() {
    return (
      <div className="navbar" style={{ backgroundColor: theme === "dark" ? colors.navbar.dark : colors.navbar.light }}>
        {this.props.content}

        <Button name="Вход" class="important" link="/Login" />

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
      <div className="header" style={theme === "dark" ? { backgroundColor: colors.header.dark, color: colors.text.dark } : { backgroundColor: colors.header.light, color: colors.text.light }}>
        {this.props.content}
      </div>
    );
  }
}

class Title extends React.Component {
  render() {
    return (
      <div className="content-title" style={{ color: theme === "dark" ? colors.title.dark : colors.title.light }}>
        {this.props.name}
      </div>)
  }
}

export { Button, Dropdown, DropdownElement, SearchField, Footer, DefaultNavbar, Header, Title };
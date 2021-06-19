//Here are complex and often-used components that 
//can be imported and simply used

import React from "react"
import VideoPlayer from "react-video-js-player"
import { colors, theme } from './Style/Colors'
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
      backgroundColor: theme === "dark" ? colors.button.light : colors.button.dark,
      color: theme === "dark" ? colors.text.dark : colors.text.light
    };
    return (
      <a className="button" href={this.props.link} style={style} onClick={this.props.onClick}>
        <div className="button-content" style={{ cursor: this.state.cursor }}>
          {this.props.name}
          {this.props.title}
          {this.props.content}
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
  constructor(props) {
    super(props)
    this.dropdownEl = React.createRef()
    this.state = { posLeft: 0 }

    window.addEventListener("resize", this.MoveMenu.bind(this))
  }

  componentDidMount() {
    //              ???
    setTimeout(this.MoveMenu.bind(this), 200)
  }

  MoveMenu() {
    let dd = this.dropdownEl.current
    if (dd) {
      let button = dd.querySelector(".dropdown>.button")
      let menu = dd.querySelector("ul")
      let btnPos = button.getBoundingClientRect()
      let offset = (menu.getBoundingClientRect().width - btnPos.width - 20) / 2;
      this.setState({ posLeft: - offset + "px" })
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
      <div ref={this.dropdownEl} className="dropdown">
        <Button name={this.props.name} />
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
    this.margin = this.props.margin ? this.props.margin : "10px"
    this.stateWhenCollapsed = {
      collapsed: true,
      style: {
        buttonBackground: { backgroundColor: "transparent" },
        input: { visibility: "hidden", backgroundColor: "transperent" },
        search: { width: "0%", marginLeft: this.margin, borderColor: "transparent" }
      }
    }
    this.state = this.stateWhenCollapsed;

    this.searchRequest = ""
  }

  componentDidMount() {
    window.addEventListener('click', () => {
      if (this.clickHandled) {
        this.clickHandled = false
      }
      else {
        this.Collapse()
      }
    });
  }

  render() {
    return (
      <div className="search button" style={this.state.style.search} onClick={() => {
        this.clickHandled = true
        this.Expand()
      }}>
        <div className="button-content">
          <i className="fa fa-search" onClick={() => {
            if (!this.state.collapsed)
              this.Search()
          }} style={{ color: colors.cyan }}></i>

          <input type="text" placeholder={this.props.placeholder} onKeyUp={event => {
            if (event.key === "Enter")
              this.Search();

            this.searchRequest = event.target.value
          }
          } style={this.state.style.input} />
        </div>
        <div className="button-background" style={this.state.style.buttonBackground} />
      </div>
    );
  }

  Expand() {
    if (this.state.collapsed) {
      this.setState({
        collapsed: false,
        style: {
          buttonBackground: { backgroundColor: colors.purple },
          input: { visibility: "visible", backgroundColor: colors.purple },
          search: {
            width: this.props.width ? this.props.width : "calc(100% - 20px)",
            marginLeft: this.margin,
            borderColor: "white"
          }
        }
      });
    }
  }

  Collapse() {
    if (!this.state.collapsed) {
      this.setState(this.stateWhenCollapsed);
    }
  }

  Search() {
    if (this.props.search !== undefined)
      this.props.search(this.searchRequest)
    else
      console.log("Search function not given! Set it using 'search' property of 'SearchField'");

    console.log(this.searchRequest)
    this.Collapse()
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

class Navbar extends React.Component {
  render() {
    return (
      <div className="navbar" style={{ backgroundColor: theme === "dark" ? colors.navbar.dark : colors.navbar.light }}>
        {this.props.content}

        <Button name="Вход" link="/Login" />

        <a href="/" className="home">
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

function Title(props) {
  return (
    <div className={"content-title" + (props.subtitle ? " content-subtitle" : "")} style={{ color: theme === "dark" ? colors.title.light : colors.title.dark }}>
      {props.name}
      {props.title}
      {props.content}
    </div>)
}

function Subtitle(props) {
  return (<Title subtitle {...props} />)
}

function Video(props) {
  return (
    <div className="video">
      <VideoPlayer {...props} className="vjs-fluid" />
    </div>)
}

export { Button, Dropdown, DropdownElement, SearchField, Footer, Navbar, Header, Title, Subtitle, Video };
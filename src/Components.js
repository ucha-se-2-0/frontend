//Here are complex and often-used components that 
//can be imported and simply used

import { createContext, Component, useState, useContext } from "react"
import VideoPlayer from "react-video-js-player"
import { colors, theme } from './Style/Colors'
import "./Style/Components.css"

class Button extends Component {
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

function Dropdown(props) {
  let options = props.options instanceof Array && props.options.map((el, i) => {
    return <a key={i} onClick={el.onClick} href={el.link}>{el.name}</a>
  })

  return (
    <div className={"dropdown" + (props.className ? " " + props.className : "")}>
      <button>{props.name}</button>
      <div className="options">
        {options}
        {props.children}
      </div>
    </div>
  )
}


function ThemeToggle() {
  let context = useContext(ThemeContext);

  return (
    <div className="theme-toggle">
      <div className="dark" onClick = {context.ToggleTheme}>
        <i className = "fas fa-moon" />
      </div>
      <i className = "light fas fa-sun" onClick = {context.ToggleTheme}/>
    </div>
  )
}

export const ThemeContext = createContext(null);



class SearchField extends Component {
  constructor(props) {
    super(props);
    this.margin = this.props.margin ? this.props.margin : "10px"
    this.stateWhenCollapsed = {
      collapsed: true,
      searchResult: <></>,
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
      <>
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
        {this.state.searchResult}
      </>
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
    this.setState({ searchResult: this.props.search(this.searchRequest) })
    this.Collapse()
  }
}

class Footer extends Component {
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

class Navbar extends Component {
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

class Header extends Component {
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

export { Button, Dropdown, DropdownElement, SearchField, Footer, Navbar, Header, Title, Subtitle, Video, ThemeToggle };
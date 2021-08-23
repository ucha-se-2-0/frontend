//Here are complex and often-used components that 
//can be imported and simply used

import { createContext, Component, useState, useContext, useEffect, createRef } from "react"
import VideoPlayer from "react-video-js-player"
import "./Style/Components.css"


function Link(props) {
  let context = useContext(UrlContext)

  return (
    <div className = {"link" + (props.className ? " " + props.className : "")} onClick={e => {
      props.onClick && props.onClick(e);
      context.Redirect(props.link)
    }}>
      {props.name}
      {props.children}
    </div>
  )
}

function Button(props) {
  let className = "button"
  className += props.className ? " " + props.className : "";
  className += props.secondary ? " secondary" : "";
  className += props.bold ? " bold" : "";

  let context = useContext(UrlContext);

  const OnClick = e => {
    props.onClick && props.onClick(e);
    context.Redirect(props.link)
  }

  return (
    <div className={className} onClick={OnClick}>
      {props.name}
      {props.title}
      {props.content}
      {props.children}
    </div>
  );
}

function Input(props) {
  let [hidden, Hide] = useState(true);
  let [empty, IsEmpty] = useState(true);

  let ref = createRef()

  useEffect(() => {
    ref.current.style.setProperty("--font-size", props.fontSize);
  })

  let showOrHide = null;

  let label = props.placeholder;
  let icon = props.icon;
  let checkbox = null;

  if (props.checkbox) {
    label = props.label;
    icon = null;
  }

  if (props.password && !props.hidden) {
    showOrHide = <i className={"show-or-hide fas fa-eye" + (hidden ? "" : "-slash")} onClick={Hide.bind(null, !hidden)} />
  }

  return (
    <div ref={ref} className={"input" + (empty ? " empty" : "")
      + (props.sharpCorners ? "" : " rounded")
      + (props.fog ? " fog" : "")
      + (props.checkbox ? " checkbox" : "")}
      style={{ width: props.width }}>

      <input type={(props.password && hidden) ? "password" : (props.checkbox ? "checkbox" : "")} onChange={e => {
        props.onInput && props.onInput(e);
        IsEmpty(!(e.target.value));
      }} />

      {props.checkbox &&
        <div className="box">
          <i className="fa fa-check" />
        </div>
      }

      {icon}

      <div className="input-label">
        {label}
      </div>

      <div className="fog" />

      {showOrHide}
    </div>
  )
}

function DropdownElement(props) {
  return (
    <li>
      <Button name={props.name} link={props.link} />
    </li>
  );
}


// to do: animations
function Dropdown(props) {
  let options = props.options instanceof Array && props.options.map((el, i) => {
    return <Link key={i} onClick={el.onClick} link={el.link}>{el.name}</Link>
  })

  return (
    <div className={"dropdown" + (props.className ? " " + props.className : "")}>
      <button>{props.name}</button>
      <div className="options-wrapper" style={{ paddingTop: props.offset + "px" }}>
        <div className="options">
          {options}
          {props.children}
        </div>
      </div>
    </div>
  )
}


function ThemeToggle() {
  let context = useContext(ThemeContext);
  let [rot, setRot] = useState(180);

  return (
    <div style = {{transform: `rotateZ(${rot}deg)`}} className="theme-toggle" onClick = {()=>{setRot(rot + 180)}}>
      <div className="dark" onClick={context.ToggleTheme}>
        <i className="fas fa-moon" />
      </div>
      <i className="light fas fa-sun" onClick={context.ToggleTheme} />
    </div>
  )
}

export const ThemeContext = createContext(null);


export const UrlContext = createContext(window.location.pathname);


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
            }}></i>

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
          input: { visibility: "visible" },
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
      <div className="footer" >
        {/*TO DO*/}
        <p>

        </p>
      </div>
    );
  }
}

function LegalityBar() {
  return (
    <div className="legality-bar">
      <Link link="/terms-and-conditions">Правила и условия</Link>
      <Link href="/copyright"><i className="far fa-copyright" /> Julemy.bg</Link>
    </div>
  )
}

class Navbar extends Component {
  render() {
    return (
      <div className="navbar">
        {this.props.content}

        <Button name="Вход" link="/Login" />

        <a href="/" className="home">
          <img src="/Images/LogoLight.jpg" alt="HOME"></img>
        </a>
      </div>
    );
  }
}

class Header extends Component {
  render() {
    return (
      <div className="header">
        {this.props.content}
      </div>
    );
  }
}

function Title(props) {
  return (
    <div className={"content-title" + (props.subtitle ? " content-subtitle" : "")}>
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

export {
  Link,
  Button,
  Input,
  Dropdown,
  DropdownElement,
  SearchField,
  Footer,
  Navbar,
  Header,
  Title,
  Subtitle,
  Video,
  ThemeToggle,
  LegalityBar
};
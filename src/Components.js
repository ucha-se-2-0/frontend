//Here are complex and often-used components that 
//can be imported and simply used

import { createContext, Component, useState, useContext, useEffect, createRef } from "react"
import VideoPlayer from "react-video-js-player"
import { GetCookie } from "./Cookies"


function Link(props) {
  let context = useContext(UrlContext)

  return (
    <div className={"link" + (props.className ? " " + props.className : "")} onClick={e => {
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
  className += props.bold ? " bold" : "";
  className += props.secondary ? " secondary" : " ";
  className += props.primary ? " primary" : " ";
  className += props.shake ? " shake" : "";
  className += props.lightning ? " lightning" : "";

  let context = useContext(UrlContext);

  const OnClick = e => {
    props.onClick && props.onClick(e);
    context.Redirect(props.link)
  }

  let lightning = null;

  if (props.lightning) {
    lightning =
      <svg height="20" width="50">
        <polyline points="0,10 5,5 20,0 30,20 40,10" />
        <polyline points="0,10 5,20 20,0 30,0 40,10" />
        <polyline points="0,10 5,0 20,10 30,10 40,10" />
      </svg>
  }

  return (
    <div className={className} onClick={OnClick}>
      {props.name}
      {props.title}
      {props.content}
      {props.children}
      {lightning}
    </div>
  );
}

function Input(props) {
  let [hidden, Hide] = useState(true);
  let [empty, IsEmpty] = useState(true);

  let ref = createRef()

  useEffect(() => {
    if (props.fontSize) {
      ref.current.style.setProperty("--font-size", props.fontSize);
    }
  })

  let showOrHide = null;

  let label = props.placeholder;
  let icon = props.icon;
  let checkbox = props.checkbox;


  if (checkbox) {
    label = props.label;
    icon = null;
  }

  if (props.password && !props.hidden) {
    showOrHide = <i className={"show-or-hide fas fa-eye" + (hidden ? "" : "-slash")} onClick={e => {
      e.preventDefault();
      e.stopPropagation();
      Hide(!hidden);
    }} />
  }


  return (
    <div ref={ref} className={"input" + (empty ? " empty" : "")
      + (props.sharpCorners ? "" : " rounded")
      + (props.fog ? " fog" : "")
      + (checkbox ? " checkbox" : "")}
      style={{ width: props.width }}>

      <input type={(props.password && hidden) ? "password" : (checkbox ? "checkbox" : "")} onChange={e => {
        console.log(1);
        props.onInput && props.onInput(e);
        IsEmpty(!(e.target.value));
      }} />

      {checkbox &&
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

function Textarea(props) {
  return (
    <div className="textarea">
      <textarea placeholder="Оставете коментар" onInput={e => {
        props.OnInput && props.OnInput(e.target.value);
        e.target.parentNode.dataset.value = e.target.value;
      }}></textarea>
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


function Dropdown(props) {
  let options = props.options instanceof Array && props.options.map((el, i) => {
    return <Link key={i} onClick={el.onClick} link={el.link}>{el.name}</Link>
  })

  return (
    <div className={"dropdown" + (props.right ? " right" : "") + (props.className ? " " + props.className : "")}>
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


export const ThemeContext = createContext(null);
function ThemeToggle() {
  let context = useContext(ThemeContext);
  let [rot, setRot] = useState(GetCookie("theme") === "dark" ? 180 : 0);

  return (
    <div className="theme-toggle">
      <div style={{ transform: `rotateZ(${rot}deg)` }} onClick={() => { setRot(rot + 180) }}>
        <div className="dark" onClick={context.ToggleTheme}>
          <i className="fas fa-moon" />
        </div>
        <i className="light fas fa-sun" onClick={context.ToggleTheme} />
      </div>
    </div>
  )
}

function DefaultSearchResultsDisplayer(props) {
  return (
    <div className="window">

    </div>
  )
}

function Search(request, constrictions) {
  let results = [];

  if (!constrictions.lessons) {

  }

  return results;
}

function SearchField(props) {
  let [expanded, Expand] = useState(false);
  let [keepExpanded, KeepExpanded] = useState(false);
  let [searchRequest, SetSearchRequest] = useState("");
  let [searchResult, SetSearchResult] = useState(null);


  useEffect(() => {
    document.addEventListener("click", () => {
      KeepExpanded(false);
      Expand(false);
      SetSearchRequest("");
    })
  }, [])

  function OnHover() {
    Expand(true);
  }

  function OnMouseLeave() {
    if (!keepExpanded) {
      Expand(false);
    }
  }

  function OnClick(e) {
    Expand(true);
    KeepExpanded(true);
    e.stopPropagation();
  }

  function OnSearch() {
    let results = window.Search(searchRequest);

    props.onSearch && props.onSearch(results);

    if (props.SearchResultsDisplayer) {
      SetSearchResult(<props.SearchResultsDisplayer results={results} />);
    }
    else {
      SetSearchResult(<DefaultSearchResultsDisplayer results={results} />);
    }
  }

  return (
    <div className={"search" + (searchRequest ? "" : " empty") + (expanded ? " expanded" : "")} onMouseEnter={OnHover} onMouseLeave={OnMouseLeave} onClick={OnClick} style={{ width: expanded ? props.width : "0px" }}>
      <i className="fas fa-search" onClick={OnSearch} />
      <input placeholder={props.placeholder} value={searchRequest} onKeyDown={e => { (e.key === "Enter") && OnSearch(); }} onInput={e => {
        SetSearchRequest(e.target.value);
      }} />
      <i className="fas fa-plus" onClick={() => { SetSearchRequest("") }} />

      <div className="search-results-window">
        {searchResult}
      </div>
    </div>
  );

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


function DefaultMenu(props) {
  let options = [
    { name: "Вход", link: "/login" },
    { name: "Регистрация", link: "/signup" },
    { name: <Button name="Pro акаунт" shake lightning />, link: "/pro" },
    { name: "Уроци", link: "/lessons" },
    { name: "Университети", link: "/universities" },
  ]

  if (props.themeToggle) {
    options.push({ name: <ThemeToggle /> })
  }

  return (
    <Dropdown right={props.right} offset={20} className="navigation" name={<i className="fas fa-bars" />} options={options}>
    </Dropdown>
  )
}

function Footer() {
  return (
    <div className="footer" >
      <Link className="home">
        <img src="/Images/LogoLightCyan.png" className="dark" />
        <img src="/Images/LogoDark.png" className="light" />
      </Link>

      <div className="social">
        <a href="#"><i className="fab fa-instagram" /></a>
        <a href="#"><i className="fa fa-telegram" /></a>
        <a href="#"><i className="fab fa-facebook" /></a>
      </div>

      <div className="links">
        <Button name="Уроци" link="/lessons" />
        <Button name="Университети" link="/universities" />
        <Button name="За julemy" link="/about" />
      </div>

    </div>
  );
}

function LegalityBar() {
  return (
    <div className="legality-bar">
      <Link link="/terms-and-conditions">Правила и условия</Link>
      <Link href="/copyright"><i className="far fa-copyright" /> Julemy.bg</Link>
    </div>
  )
}

function DefaultNavbar(props) {
  return (
    <div className="navbar">
      <DefaultMenu themeToggle />
      {props.search && <SearchField {...props.search} />}
      <Link className="home" link="/">
        <img alt="logo light" src="/Images/LogoDark.png" className="dark" />
        <img alt="logo light" src="/Images/LogoLightCyan.png" className="light" />
      </Link>
    </div>
  )
}

export const UrlContext = createContext(window.location.pathname);

export {
  Link,
  Button,
  Input,
  Textarea,
  Dropdown,
  DropdownElement,
  SearchField,
  Title,
  Subtitle,
  Video,
  ThemeToggle,

  Footer,
  LegalityBar,
  DefaultMenu,
  DefaultNavbar
};
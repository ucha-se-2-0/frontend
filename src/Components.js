//Here are complex and often-used components that 
//can be imported and simply used

import React, { useState, useContext, useEffect, createRef } from "react"
import VideoPlayer from "react-video-js-player"
import { GetAllLessons, GetFormattedLessons, lessons } from "./Assets"
import { cookiesContext, GetCookie, themeContext } from "./Utilities"
import { NavLink } from "react-router-dom"

function Lightning(props) {
  return (
    <svg height="100%" width="100%" viewBox="0 0 40 30">
      <polyline points="0,10 5,5 20,0 30,20 40,10" />
      <polyline points="0,10 5,20 20,0 30,0 40,10" />
      <polyline points="0,10 5,0 20,10 30,10 40,10" />
    </svg>
  )
}

function Gate(props) {
  return (
    <div className="gate-wrapper">
      <div>{props.content}{props.children}</div>
      <div>{props.content}{props.children}</div>
    </div>
  )
}

function Typing(props) {
  let [currentText, SetCurrentText] = useState(props.onHover ? props.text : "");
  let [timer, SetTimer] = useState(null);
  let [playingBackwards, PlayBackwards] = useState(false);
  let [playing, ShouldPlay] = useState(false);

  useEffect(() => {
    if (!props.onHover) {
      Play();
    }

    return () => { timer !== null && clearTimeout(timer) }
  }, [])

  useEffect(() => {
    if (!playing)
      return;

    if (playingBackwards) {
      if (currentText) {
        SetTimer(setTimeout(() => { SetCurrentText(currentText.slice(0, -1)); }, 100 / (props.speed > 0 ? props.speed : 1)));
      }
      else {
        PlayBackwards(false);
      }
    }
    else {
      if (currentText.length < props.text.length) {
        SetTimer(setTimeout(() => { SetCurrentText(currentText + props.text[currentText.length]); }, 150 / (props.speed > 0 ? props.speed : 1)));
      }
    }
  }, [currentText, playing, playingBackwards])

  if (typeof props.text !== "string") {
    console.error("Typing component must receive 'text' of type String, " + props.text + " given");
    return null;
  }


  function Play() {
    console.log("playing");
    PlayBackwards(props.back);
    SetCurrentText(props.back ? props.text : "");
    ShouldPlay(true);
  }

  function Stop() {
    clearTimeout(timer);
    SetCurrentText(props.text);
    ShouldPlay(false);
  }

  return (
    <div className={"typing" + (props.className ? " " + props.className : "")} onMouseEnter={props.onHover && Play} onMouseLeave={props.onHover && Stop}>
      <div className="full-text">
        {props.text}
      </div>
      <div className="current-text">
        {currentText}
      </div>
    </div>
  )
}

function StyledButtonOrLink(props) {
  let className = "";

  className += props.className ? props.className : "";
  className += props.bold ? " bold" : "";
  className += props.hoverable ? " hoverable" : "";
  className += props.secondary ? " secondary" : "";
  className += props.primary ? " primary" : "";
  className += props.shake ? " shake" : "";
  className += props.lightning ? " lightning" : "";
  className += props.gate ? " gate" : "";

  let content = [];

  if (props.lightning) {
    content.push(<Lightning key={content.length} />);
  }

  if (props.gate) {
    content.push(<Gate key={content.length}>{props.content}{props.children}</Gate>);
  }
  else if (props.typing) {
    content.push(<Typing key={content.length} onHover={props.onHover} back={props.back} speed={props.typingSpeed} text={props.content} />)
  }
  else {
    content.push(props.content);
    content.push(props.children);
  }


  return (
    <ButtonOrLink style={{ width: props.width, height: props.height }} className={className} onClick={props.onClick} link={props.link}>
      {content}
    </ButtonOrLink>
  )
}

function ButtonOrLink(props) {
  let className = "button " + (props.className ? props.className : "");

  let el = null;

  if (props.link) {
    className += " link";

    if (props.onClick) {
      console.warn("'onClick' event listenner for Button component will be ignored as 'link' property is set")
    }

    let url = window.location.pathname;
    el =
      <NavLink onClick={() => {
        if (url !== "/login" && url !== "/signup") {
          sessionStorage.setItem("lastPageBeforeAuth", url);
        }
      }} to={props.link} className={className}>
        {props.children}
      </NavLink>;
  }
  else {
    if (props.onClick) {
      el =
        <button style={props.style} className={className} onClick={e => { props.onClick(e) }}>
          {props.children}
        </button>
    }
    else {
      console.error("Button must have eihter 'link' on 'onClick' property")
    }
  }

  return el;
}

function Button(props) {
  if (!props.onClick) {
    console.warn("'Button' component should have 'onClick' event listenner");
  }
  return <StyledButtonOrLink {...props} />
}

function Link(props) {
  if (!props.link) {
    console.error("'Link' component must have 'link' property set");
    return null;
  }
  return (<StyledButtonOrLink {...props} />)
}

//Dynamicly loaded image
function Img(props) {
  let [src, SetSource] = useState("");

  useEffect(() => {
    let img = new Image(props.width, props.height)
    img.src = props.src;
    img.onload = e => {
      SetSource(img.src);
    }
  }, [])

  return (
    <img alt={props.alt} className={props.className} src={src} />
  )
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

  let type = (props.password && hidden) ? "password" : (checkbox ? "checkbox" : "");
  if (props.number) {
    type = "number";
  }


  return (
    <div ref={ref} className={"input" + (empty ? " empty" : "")
      + (props.sharpCorners ? "" : " rounded")
      + (props.fog ? " fog" : "")
      + (checkbox ? " checkbox" : "")
      + (props.password ? " password" : "")}
      style={{ width: props.width }}>

      <input type={type} onChange={e => {
        props.onInput && props.onInput(e);
        IsEmpty(!(e.target.value));
        if (props.checkbox && (e.target.checked === false)) {
          console.log("empty");
          IsEmpty(true);
        }
      }} style={{ paddingLeft: (icon ? "" : "1em") }} />

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
      <textarea placeholder={props.placeholder} onInput={e => {
        props.OnInput && props.OnInput(e.target.value);
        e.target.parentNode.dataset.value = e.target.value;
      }}></textarea>
    </div>
  )
}


function Section(props) {
  let [expanded, Expanded] = useState(false);
  let [height, SetHeight] = useState(0);
  let [autoHeight, AutoHeight] = useState(false);
  let [shouldCollapse, ShouldCollapse] = useState(false);
  let [timer, SetTimer] = useState(null);

  let content = createRef();
  let button = createRef();

  useEffect(() => {
    if (expanded && shouldCollapse) {
      ShouldCollapse(false);
      Expanded(false);
    }

    return clearTimeout.bind(null, timer);
  }, [expanded, shouldCollapse])

  function OnClick(e) {

    if (!expanded) {
      Expanded(true);
      // console.log(getComputedStyle(content.current))
      SetHeight(parseFloat(getComputedStyle(content.current).height) + parseFloat(getComputedStyle(button.current).height) + "px");
      SetTimer(setTimeout(() => { AutoHeight(true) }, 500));
    }
    else {
      AutoHeight(false);
      ShouldCollapse(true);
    }
  }

  return (
    <div className={"section" + (expanded ? " expanded" : "") + (props.className ? " " + props.className : "")}>
      <div ref={button} className="section-button" onClick={OnClick}>
        <i className={"material-icons" + (expanded ? " up" : "")}>&#xe5c6;</i>

        {props.title}
      </div>

      <div className="content-wrapper" onClick={() => { AutoHeight(true) }} style={{ height: (expanded ? (autoHeight ? "auto" : height) : "0px") }}>
        <div ref={content} className="section-content">
          {props.children}
        </div>
      </div>
    </div>
  )
}


function Dropdown(props) {
  let options = props.options instanceof Array && props.options.map((el, i) => {
    if (el.link) {
      return <Link key={i} {...el} />
    }
    if (el.onClick) {
      return <Button key={i} {...el} />
    }
    if (React.isValidElement(el)) {
      return React.cloneElement(el, { key: i });
    }
    return null;
  })

  return (
    <div className={"dropdown" + (props.right ? " right" : "") + (props.className ? " " + props.className : "")}>
      <button>{props.content}</button>
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
  let context = useContext(themeContext);
  let [rot, setRot] = useState(GetCookie("theme") === "dark" ? 180 : 0);

  return (
    <div className="theme-toggle">
      <div style={{ transform: `translateX(-100%) rotateZ(${rot}deg)` }}>
        <div className="dark" onClick={() => { context.ToggleTheme(); setRot(rot + 180) }}>
          <i className="fas fa-moon" />
        </div>
        <i className="light fas fa-sun" onClick={() => { context.ToggleTheme(); setRot(rot + 180) }} />
      </div>
    </div>
  )
}


function DefaultSearchResultsDisplayer(props) {
  let res = props.results.map((el, i) => {
    el = el.section;

    if (el.sections) {
      return (
        <Section className="hoverable" key={i} title={el.title}>{GetAllLessons(el).map((l, li) =>
          <React.Fragment key={li}>
            <Link primary className="hoverable" link={"/lessons/" + l.url} content={l.title} />
          </React.Fragment>)}
        </Section>
      )
    }

    return (
      <React.Fragment key={i}>
        <Link className="hoverable" link={"/lessons/" + el.url} content={el.title} />
      </React.Fragment>)
  })

  return (
    <Window className="search-results" OnClose={() => { props.OnClose() }}>
      <Subtitle title={"Резултати от търсенето"} />
      {res.length ? res : "Няма намерени резултати"}
    </Window>
  )
}

function Search(request, constrictions) {

  const k = { order: 0, exact: 1000, lengthDif: 0.01, length: 5, wordTreshold: 3, relWordTreshold: 0.5, treshold: 0.0, mistakeCost: 0.5 }


  //Tries to match string1 in string2
  function RelativeMatch(string1, string2) {
    if (!string1.trim() || !string2.trim()) {
      return 0;
    }


    if (string1.trim().toUpperCase() === string2.trim().toUpperCase()) {
      //return k.exact;
    }

    let words1 = string1.toUpperCase().split(" ");
    let words2 = string2.toUpperCase().split(" ");



    let matches = [];

    //w stands for word
    for (let w1i in words1) {
      let w1 = words1[w1i];

      for (let w2i in words2) {
        let w2 = words2[w2i];

        let max_match = 0;

        //To do: remove two similar loops

        // o stands for offset
        for (let o = w2.length - 1; o >= -w1.length; o--) {
          let match = 0;
          let lo = 0;

          if (o > 0) {
            for (let i = 0; i + lo < w1.length && i + o < w2.length; i++) {
              if (w1[i + lo] === w2[i + o]) {
                match++;
              }
              else {
                match -= k.mistakeCost;

                if (i + o + 1 < w2.length && w1[i + lo] === w2[i + o + 1]) {
                  lo--;
                } else if (i + lo + 1 < w1.length && w1[i + lo + 1] === w2[i + o]) {
                  lo++;
                  match++;
                }
              }
            }
          } else {
            for (let i = 0; i - o < w1.length && i + lo < w2.length; i++) {
              if (w1[i - o] === w2[i + lo]) {
                match++;
              }
              else {
                match -= k.mistakeCost;

                if (i - o + 1 < w1.length && w1[i - o + 1] === w2[i + lo]) {
                  lo--;
                } else if (i + lo + 1 < w2.length && w1[i + o] === w2[i + lo + 1]) {
                  lo++;
                  match++;
                }
              }
            }
          }

          if (match > max_match) {
            max_match = match;
          }
        }



        let match = Math.pow(max_match, k.length) / w1.length;



        if (matches.length && matches[matches.length - 1].string2 < w2i) {
          match *= 1 + k.order;
        }

        if (match) {
          console.log(w1, w2, max_match, match);
        }

        if (max_match / w1.length > k.relWordTreshold || max_match > k.wordTreshold) {
          matches.push({ string1: w1i, string2: w2i, match });
        }
      }
    }

    //return matches;


    return matches.reduce((sum, current, i) => {
      return sum + current.match
    }, 0) * (1 - k.lengthDif * Math.abs(string1.length - string2.length) / string1.length);
  }


  let results = [];

  function Match(section) {

    let points = RelativeMatch(request, section.title);

    if (points) {
      results.push({ section, points });
    }

    if (section.sections instanceof Array) {
      section.sections.forEach(Match);
    }
  }



  if (!constrictions) {
    constrictions = {};
  }

  if (!constrictions.lessons) {
    let grades = GetFormattedLessons(lessons.biology);

    Match({ title: "Биология", sections: grades });
  }

  results.sort((first, second) => second.points - first.points);
  results = results.filter(({ points }) => points > k.treshold);

  return results;
}

function SearchField(props) {
  let [expanded, Expand] = useState(false);
  let [keepExpanded, KeepExpanded] = useState(false);
  let [searchRequest, SetSearchRequest] = useState("");
  let [searchResult, SetSearchResult] = useState(null);
  let [mousePressed, MouseIsPressed] = useState(false);


  useEffect(() => {
    document.addEventListener("mousedown", e => {
      KeepExpanded(false);
      //console.log(mousePressed);

      Expand(false);
      SetSearchRequest("");
    })

    document.addEventListener("mouseup", e => {
      //console.log("mouseup");
      MouseIsPressed(false);
    })

  }, [])

  function OnHover() {
    Expand(true);
  }

  function OnMouseLeave(e) {
    //console.log("mouse leaved")
    if (mousePressed)
      return;
    //console.log(mousePressed, e);

    if (!keepExpanded) {
      Expand(false);
    }
  }

  function OnClick(e) {
    KeepExpanded(true);
    MouseIsPressed(true);
    //console.log("Clicked");

    e.stopPropagation();
  }

  function OnMouseUp(e) {
    console.log("Mouse up on search field");

    MouseIsPressed(false);

    e.stopPropagation();
  }

  function OnSearch() {
    if (!expanded || searchRequest.length === 0) {
      return;
    }

    let results = Search(searchRequest);
    console.log(results);

    props.onSearch && props.onSearch(results);

    if (props.SearchResultsDisplayer) {
      SetSearchResult(<props.SearchResultsDisplayer OnClose={() => {
        SetSearchResult(null);
      }} results={results} />);
    }
    else {
      document.body.classList.add("no-scroll");
      SetSearchResult(<DefaultSearchResultsDisplayer OnClose={() => {
        SetSearchResult(null);
        document.body.classList.remove("no-scroll");
      }} results={results} />);
    }
  }

  return (
    <div
      className={"search" + (searchRequest ? "" : " empty") + (expanded ? " expanded" : "")}
      onMouseEnter={OnHover} onMouseLeave={OnMouseLeave}
      onMouseDown={OnClick}
      onMouseUp={OnMouseUp}
      style={{ width: expanded ? props.width : "0px" }}>

      <i className="fas fa-search" onClick={OnSearch} />
      <input spellCheck={false} placeholder={props.placeholder} value={searchRequest} onKeyDown={e => { (e.key === "Enter") && OnSearch(); }} onInput={e => {
        SetSearchRequest(e.target.value);
      }} />
      <i className="fas fa-plus" onClick={() => { SetSearchRequest("") }} />

      {searchResult}
    </div>
  );

}


function Title(props) {
  return (
    <div className={"content-title" + (props.subtitle ? " content-subtitle" : "")}>
      {props.title}
      {props.children}
    </div>)
}

const Subtitle = props => <Title subtitle {...props} />;


function Video(props) {
  return (
    <div className="video">
      <VideoPlayer {...props} className="vjs-fluid" />
    </div>)
}

function Window(props) {

  function Close() {
    if (props.OnClose) {
      props.OnClose();
    }
  }

  return (
    <div className={"window-frame" + (props.className ? " " + props.className : "")}>
      <div className="window">
        {!props.noCloseIcon && <i className="fas fa-plus" onClick={() => { Close() }} />}
        {props.children}
      </div>
    </div>
  )
}

function CookiesWindow(props) {
  const { accepted, Accept } = useContext(cookiesContext);

  if (accepted) {
    return null;
  }

  return (
    <Window className="agree-cookies-window" noCloseIcon>
      <div className="background">
        <img src="Images/cookie.jfif"></img>
        <img src="Images/cookie.jfif"></img>
      </div>
      <h1>Ние ползваме cookies (бисквитки)</h1>
      <p>
        Julemy използва cookies (бисквитки) с цел подобряване на качеството на
        нашите услуги и нормалното функциониране на уебсайта. За да използвате <strong style={{ color: "var(--secondary)" }}>julemy.bg</strong> моля приемете използването на cookies.
        <br />
        За повече информация за това как събираме и използваме вашите лични данни
      </p>
      <Button secondary hoverable height={"2em"} onClick={Accept}>Приемам</Button>
    </Window>)
}

function DefaultMenu(props) {
  let options = [
    { content: "Вход", link: "/login", bold: true },
    { content: "Регистрация", link: "/signup", bold: true },
    { content: "Pro акаунт", link: "/pro", lightning: true, bold: true },
    { content: "Уроци", link: "/lessons", typing: true, onHover: true, back: true, bold: true },
    { content: "Университети", link: "/universities", bold: true },
    { content: "Правила и условия", link: "/terms-and-conditions" },
    { content: "Защита на данни", link: "/privacy-policy" },
    { content: "Съобщете за проблема", link: "/raise-a-problem" }
  ]

  return (
    <Dropdown right={props.right} offset={20} className="default-menu" content={<i className="fas fa-bars" />}>
      {options.map((el, i) => <Link key={i} shake {...el} />)}
      {props.themeToggle ? <ThemeToggle /> : null}
    </Dropdown>
  )
}

function Footer() {

  function FLink(props) {
    return (
      <a target="_blank" rel="external noopener noreferrer" href="https://instagram.com/">
        <div>
          <i className={props.className} />
        </div>
        <p>{props.name}</p>
      </a>
    )
  }

  return (
    <div className="footer" >
      <Link className="home" link="/">
        <img alt="logo" src="/Images/LogoLightCyan.png" className="light" />
        <img alt="logo" src="/Images/LogoDark.png" className="dark" />
      </Link>

      <div className="social">
        <FLink className="fab fa-instagram" name="Инстаграм" />
        <FLink className="fa fa-telegram" name="Телеграм" />
        <FLink className="fab fa-facebook" name="Фейсбук" />
      </div>

      <div className="links">
        <Link content="Уроци" link="/lessons" />
        <Link content="Университети" link="/universities" />
        <Link content="За julemy" link="/about" />
      </div>

    </div>
  );
}

function LegalityBar() {
  return (
    <div className="legality-bar">
      <Link className="hoverable" link="/terms-and-conditions">Правила и условия</Link>
      <Link className="hoverable" link="/privacy-policy">Запазване на данни</Link>
      <span><i className="far fa-copyright" /> Julemy.bg</span>
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

function Page({ children, ignoreCookiesPolicy, className }) {
  let page = null;

  const WrapPage = page => <div className={"page" + (className ? (" " + className) : "")}>
    {page}
  </div>

  const context = useContext(cookiesContext);

  if (ignoreCookiesPolicy) {
    return WrapPage(children);
  }

  if (context === undefined) {
    console.warn("'Page' component must have access to 'cookiesContext' (must be inside 'CookiesAcceptedProvider' component)");
    return null;
  }

  const { accepted } = context;

  if (accepted) {
    page = children
  }
  else {
    page = <CookiesWindow />
  }

  return WrapPage(page);
}

function DefaultPage(props) {
  return <Page {...props}>
    <DefaultNavbar />
    <div className="content">
      {props.children}
    </div>
    <Footer />
    <LegalityBar />
  </Page>
}

export {
  Typing,

  Link,
  Button,
  Input,
  Img,
  Textarea,
  Dropdown,
  Section,
  SearchField,
  Title,
  Subtitle,
  Video,
  Window,
  CookiesWindow,
  Page,

  ThemeToggle,
  Footer,
  LegalityBar,
  DefaultMenu,
  DefaultNavbar,
  DefaultPage,

  //Next are exported for testing and shouldn't be used directly
  Search
};
import './Style/Colors.css'
import render from './index'
import {getCookie, setCookie} from './Cookies'

const colors = {
    lightcyan: "var(--lightcyan)",
    cyan: "var(--cyan)",
    darkcyan: "var(--darkcyan)",

    darker: "var(--darker)",
    dark: "var(--dark)",
    notSoDark: "var(--not-so-dark)",
    notSoLight: "var(--not-so-light)",
    light: "var(--light)",

    text: { dark: "var(--text-d)", light: "var(--text-l)" },
    title: { dark: "var(--title-d)", light: "var(--title-l)" },

    content: { dark: "var(--content-d)", light: "var(--content-l)"},
    header: { dark: "var(--header-d)", light: "var(--header-l)"},
    footer: { dark: "var(--footer-d)", light: "var(--footer-l)"},
    navbar: { dark: "var(--navbar-d)", light: "var(--navbar-l)"},
    button: { dark: "var(--button-d)", light: "var(--button-l)"},
}

var theme = "light";

window.addEventListener("load", ()=>{
    let cookie = getCookie("theme")
    if(cookie !== undefined)
        theme = cookie
    else
        setCookie("theme", "light", 24 * 30)
    console.log(cookie)
})

function changeTheme()
{
    if(theme === "light")
    {
        theme = "dark"
        setCookie("theme", "dark", 24 * 30)
        document.getElementById("root").style.backgroundColor = "var(--dark)";
    }
    else
    {
        theme = "light";
        setCookie("theme", "light", 24 * 30)
        document.getElementById("root").style.backgroundColor = "var(--light)";
    }

    render();
}

export {colors, changeTheme, theme};
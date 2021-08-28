import { useEffect, useState } from "react"
import { Dropdown, Link } from "../../Components"


function Menu() {
    return (
        <Dropdown right fontSize = "30px" offset={20} name={<i className="fas fa-bars" />} options={[
            { name: "Вход", link: "/login" },
            { name: "Регистрация", link: "/signup" },
            { name: "Уроци", link: "/lessons" }
        ]}>
        </Dropdown>
    )
}

export default function Navbar() {
    let [shadowOffset, ShadowOffset] = useState(-10);

    function OnScroll()
    {
        ShadowOffset((window.scrollY < 100 ? (window.scrollY / 5 - 20) : 0))
    }

    useEffect(()=>{
        document.addEventListener("scroll", OnScroll);

        return () => {
            document.removeEventListener("scroll", OnScroll);
        }
    }, [])

    return (
        <div className={"navbar"} style = {{boxShadow: `0 ${shadowOffset}px 10px 0 var(--important)`}}>
            <Link className="home" link="/">
                <img alt="logo light" src="Images/LogoPurple.png" className="dark" />
                <img alt="logo light" src="Images/LogoCyan.png" className="light" />
            </Link>
            <Menu />
        </div>
    )
}
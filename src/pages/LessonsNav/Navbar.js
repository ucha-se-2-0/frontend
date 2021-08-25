import { Dropdown, Link, SearchField, ThemeToggle } from "../../Components";

function Menu() {
    return (
        <Dropdown right offset={20} className="navigation" name={<i className="fas fa-bars" />} options={[
            { name: "Вход", link: "/login" },
            { name: "Регистрация", link: "/signup" },
            { name: "Уроци", link: "/lessons" }
        ]}>
        </Dropdown>
    )
}

export default function Navbar() {
    return (
        <div className="navbar">
            <Link className = "home" link = "/">
                <img src="Images/LogoPurple.png" className="dark" />
                <img src="Images/LogoCyan.png" className="light" />
            </Link>
            <SearchField />
            <Menu />
        </div>
    );
}
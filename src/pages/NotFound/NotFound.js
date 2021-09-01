import { useEffect } from "react";
import { ThemeToggle, Link } from "../../Components";

export default function NotFound() {
    useEffect(() => {
        import('./NotFound.css');
    }, [])

    return (
        <div className="page page-not-found">
            <div className="navbar">
                <Link link="/" className = "home">
                <img src = "/Images/LogoLightCyan.png" className = "light"></img>
                <img src = "/Images/LogoPurple.png" className = "dark"></img>
                </Link>
                <ThemeToggle />
            </div>
            <div className="header">
                <div>404</div>
                <div>404</div>
                <div>404</div>
                Страницата не съществува
            </div>
        </div>
    )
}
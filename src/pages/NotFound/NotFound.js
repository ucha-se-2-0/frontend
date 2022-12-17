import { Link, Page } from "../../Components";

import './NotFound.css';

export default function NotFound() {
    return (
        <Page className="page-not-found">
            <div className="navbar">
                <Link link="/" className="home" style={{marginRight: "auto"}}>
                    <img alt="logo" src="/Images/LogoLightCyan.png" className="light"></img>
                    <img alt="logo" src="/Images/LogoPurple.png" className="dark"></img>
                </Link>
            </div>
            <div className="header">
                <div>404</div>
                <div>404</div>
                <div>404</div>
                Страницата не съществува
            </div>
        </Page>
    )
}
import { DefaultPage, Subtitle, Title } from "../../Components";

import './Legality.css';

export default function Privacy() {
    return (
        <DefaultPage className="legality-page">
            <div className="header">ОБЩИ ПРАВИЛА И УСЛОВИЯ</div>
            <div className="last-update">Последно актуализирано: <strong>1.09.2021</strong></div>
            <Title title = "Правата на потребителя относно личните данни" />
            <Title title = "Как събираме лични данни" />
            <Subtitle title = "Cookies (Бисквитки)" />
            <Subtitle title = "Регистрация и вход" />
        </DefaultPage>
    )
}
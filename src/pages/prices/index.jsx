import { DefaultPage, Subtitle, Title } from "../../Components";

export default function Prices() {
    return <DefaultPage className="prices">
        <Subtitle> Всички курсове се предлагат и в онлайн формат</Subtitle>
        <Subtitle> Посочените цени са за едномесечно обучение ! </Subtitle>

        <ul style={{ lineHeight: "1.75em" }}>
            <li>
                Шах мат
                <ul>
                    <li>2 пъти седмично - понеделник/петък (1 час на урок) – 70 лева</li>
                    <li>Единичен урок – 15 лева</li>
                </ul>
            </li>
            <li>
                Английски език
                <ul>
                    <li>2 пъти седмично по 2 учебни часа – 100 лева</li>
                    <li>1 път седмично - 60 лева</li>
                    <li>Единичен урок - 15 лева</li>
                </ul>
            </li>
            <li>
                Руски език
                <ul>
                    <li>2 пъти седмично по 2 учебни часа – 90 лева</li>
                    <li>1 път седмично - 50 лева</li>
                    <li>Единичен урок - 13 лева</li>
                </ul>
            </li>
            <li>
                Български език и литература
                <ul>
                    <li>2 пъти седмично по 2 учебни часа- 120 лева</li>
                    <li>1 път седмично: 60 лева</li>
                    <li>Единичен урок: 20 лева</li>
                </ul>
            </li>
            <li>
                Математика
                <ul>
                    <li>2 пъти седмично - 100 лева</li>
                    <li>1 път седмично - 50 лева</li>
                    <li>Единичен урок - 20 лева</li>
                </ul>
            </li>
            <li>
                География
                <ul>
                    <li>2 пъти седмично по 2 учебни часа - 125 лева</li>
                    <li>1 път седмично - 65 лева</li>
                </ul>
            </li>
            <li>
                Интензивна подготовка за нво
                <ul>
                    <li>Курс по математика 4 учебни часа седмично : 180 лева</li>
                    <li>Курс по български език и литература 4 учебни часа седмично: 180 лева</li>
                    <li>Обединено: 335 лева</li>
                </ul>
            </li>
            <li>
                Пробни матури за 4-ти,7-ми,10-ти и 12-ти клас
                <br />
                Предлагат се за всички предмети!
                <br />
                -60 лева (не се включва допълнителен урок ,,анализ на грешки'', за него се доплащат 30 лева)
            </li>
            <li>
                Пробни кандидатстудентски изпити за всички университети
                <ul>
                    <li>30 лева за български вуз-ове</li>
                    <li>100 лева за чуждестранни вуз-ове</li>
                </ul>
            </li>
        </ul>
        <Subtitle>Занималня</Subtitle>
        <ul>
            <li>
                Клуб 'интеракт' - забавни детски интелектуални и развлекателни игри
                <ul>
                    <li>1 път седмично за 1 час - 20 лева</li>
                    <li>2 пъти седмично - 35 лева</li>
                </ul>
            </li>
            <li>
                Занимания през почивни, празнични и ваканционни дни - 20 лева на час
            </li>
        </ul>
    </DefaultPage>
}
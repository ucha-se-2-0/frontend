import { useState, useContext } from "react"
import { Button, Input, Link, UrlContext } from '../../Components'
import { Loading } from "../../Icons";
import { GetAPIUrl } from "../../Utilities";




function Form() {
    let [username, SetUsername] = useState("");
    let [password, SetPassword] = useState("");
    let [remember, Remember] = useState(false);

    let [loading, IsLoading] = useState(false);
    let [redirect, Redirect] = useState(false);

    let [error, SetError] = useState();

    let context = useContext(UrlContext)

    if (redirect) {
        setTimeout(() => { context.Redirect(sessionStorage.getItem("lastPageBeforeAuth")) }, 0);
    }

    function Login() {

        if (!username ||
            !username.match(/(^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?)$)|(^[^А-Яа-яA-Za-z][^А-Яа-яA-Za-z0-9]*$)/) ||
            username.length < 6 ||
            username.length > 30 ||
            password.length < 8 ||
            password.length > 30 ||
            password.includes(' ')) {
            return true;
        }

        IsLoading(true);

        let xhr = new XMLHttpRequest();
        xhr.open("POST", GetAPIUrl("login"));
        xhr.onload = () => {
            IsLoading(false);

            switch (xhr.status) {
                case 200:
                    {
                        Redirect(true);
                        break;
                    }
                case 400:
                    {
                        SetError(true);
                        break;
                    }
            }
        }

        xhr.send({ username, password, remember });
    }

    return (
        <div className="form">
            <Link className="home" link="/">
                <img alt="logo light" src="Images/LogoPurple.png" />
                <img alt="logo light" src="Images/LogoCyan.png" className="light" />
            </Link>

            <div className="title">
                Вход
            </div>

            <Input
                placeholder="Имейл или потребителско име"
                icon={<i className="material-icons">email</i>}
                OnInput={e => {
                    SetUsername(e.target.value);
                    SetError(false);
                }}
            />

            <Input
                placeholder="Парола"
                icon={<i className="material-icons">vpn_key</i>}
                password
                OnInput={e => {
                    SetPassword(e.target.value);
                    SetError(false);
                }}
            />

            <Input
                checkbox
                fontSize="calc(18px - 0.3vw)"
                label="Запомни ме"
                OnInput={e => { Remember(true && e.target.checked) }}
            />

            {error && <div className="error">Грешно потребителско име или парола</div>}

            <Button className="submit" name="Вход" onClick={()=>{SetError(Login())}} />

            <div className="redirect">
                Още нямате акаунт? <Button secondary name="Регистрация" link="/signup" />
            </div>

            {loading && <Loading />}

        </div>

    );
}

var submit;
const getData = () => {
    console.log("dadlad");
    const xhr = new XMLHttpRequest();
    xhr.open("POST", "http://localhost:3000/Login");

    xhr.onload = () => {
        console.log(xhr.response);
    };
    xhr.send();
};


export default Form;
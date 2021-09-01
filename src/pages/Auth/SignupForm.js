import { useState, useContext } from "react"
import { Link } from "../../Components";
import { Button, Input, UrlContext } from '../../Components'
import { Loading } from "../../Icons";
import { GetAPIUrl } from "../../Utilities";


function Form() {
    let [email, SetEmail] = useState("");
    let [username, SetUsername] = useState("");
    let [password, SetPassword] = useState("");
    let [passwordV, SetPasswordV] = useState("");
    let [remember, Remember] = useState(false);

    let [loading, IsLoading] = useState(false);
    let [error, SetError] = useState(null);
    let [redirect, Redirect] = useState(false);

    let context = useContext(UrlContext);

    if (redirect) {
        setTimeout(() => { context.Redirect(sessionStorage.getItem("lastPageBeforeAuth")) }, 0);
    }



    if (error === null) {
        if (email && email.match(/[^А-Яа-яA-Za-z0-9@.]/)) {
            SetError({ email: "Невалиден имейл" })
        }

        if (username && username.match(/[^А-Яа-яA-Za-z0-9]/)) {
            SetError({ username: "Потребителско име може да съдържа само букви от кирилица или латиница или цифри" })
        }

        if (username && !username[0].match(/[А-Яа-яA-Za-z]/)) {
            SetError({ username: "Потребителско име трябва да започва с буква от кирилица или латиница" })
        }
    }

    function Signup() {

        if (!(email && email.length > 7 && email.length < 100 && email.match(/^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?)$/))) {
            console.log("error 1")
            return { email: "Невалиден имейл" };
        }

        if (username.length < 6) {
            return { username: "Потребителско име не може да е по-малко от 6 символа" };
        }

        if (username.length > 30) {
            return { username: "Потребителско име не може да е повече от 30 символа" };
        }


        if (password.length < 8) {
            return { password: "Паролата не може да е по-малко от 8 символа" };
        }

        if (password.length > 30) {
            return { password: "Паролата не може да е повече от 30 символа" };
        }

        if (password.includes(' ')) {
            return;
        }

        if (password !== passwordV) {
            return { passwordV: "Паролите не съвпадат" };
        }

        IsLoading(true);

        let xhr = new XMLHttpRequest();
        xhr.open("POST", GetAPIUrl("signup"));
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
                        if (xhr.response.error === "emailAlreadyInUseException") {
                            SetError({email: "Акаунт с този имейл вече съществува"});
                        }
                        else if(xhr.response.error === "usernameNotAvailableException")
                        {
                            SetError({username: "Това потребителско име вече е заето"});
                        }
                        break;
                    }
            }
        }

        xhr.send({ username, email, password, remember });
    }

    function ErrorNode(msg) {
        return <div className="error">{msg}</div>
    }

    return (
        <div className="form">
            <Link className="home" link="/">
                <img alt="logo dark" src="Images/LogoPurple.png" />
                <img alt="logo light" src="Images/LogoCyan.png" className="light" />
            </Link>

            <div className="title">
                Регистрация
            </div>

            <Input
                placeholder="Имейл"
                icon={<i className="material-icons">email</i>}
                OnInput={e => {
                    SetEmail(e.target.value);
                    error && error.email && SetError(null);
                }}
            />

            {error && error.email && ErrorNode(error.email)}

            <Input
                placeholder="Потребителско име"
                icon={<i className="fas fa-user-alt" />}
                OnInput={e => {
                    SetUsername(e.target.value);
                    error && error.username && SetError(null);
                }}
            />

            {error && error.username && ErrorNode(error.username)}


            <Input
                placeholder="Парола"
                icon={<i className="material-icons">vpn_key</i>}
                password
                OnInput={e => {
                    SetPassword(e.target.value);
                    error && error.password && SetError(null);
                }}
            />

            {error && error.password && ErrorNode(error.password)}


            <Input
                placeholder="Подтвърдете паролата"
                icon={<i className="material-icons">vpn_key</i>}
                password
                OnInput={e => {
                    SetPasswordV(e.target.value);
                    error && error.passwordV && SetError(null);
                }}
            />

            {error && error.passwordV && ErrorNode(error.passwordV)}

            <Input checkbox fontSize="15px" label="Запомни ме" OnInput={e => { Remember(e.target.checked) }} />

            <Button className="submit" name="Регистрация" onClick={()=>{SetError(Signup())}} />

            <div className="redirect">
                Вече имате акаунт? <Button secondary name="Вход" link="/login" />
            </div>

            {loading && <Loading />}
        </div>

    );
}

export default Form;
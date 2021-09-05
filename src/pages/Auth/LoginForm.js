import { useState } from "react"
import { withRouter, Redirect } from "react-router";
import { Button, Input, Link } from '../../Components'
import { Loading } from "../../Icons";
import { GetAPIUrl } from "../../Utilities";




function Form(props) {
    let [username, SetUsername] = useState("");
    let [password, SetPassword] = useState("");
    let [remember, Remember] = useState(false);

    let [loading, IsLoading] = useState(false);
    let [redirect, ShouldRedirect] = useState(false);

    let [error, SetError] = useState();

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
                        ShouldRedirect(true);
                        break;
                    }
                case 400:
                    {
                        SetError(true);
                        break;
                    }
                default:
                    {
                        SetError(true);
                    }
            }
        }

        xhr.send({ username, password, remember });
    }

    let prevLocation = sessionStorage.getItem("lastPageBeforeAuth");
    if(!prevLocation)
        prevLocation = "/";

    return (
        redirect ?
            <Redirect to={prevLocation} /> :
            <div className="form">
                <Link className="home" link="/">
                    <img alt="logo" src="Images/LogoLightCyan.png" className="light" />
                    <img alt="logo" src="Images/LogoPurple.png" className="dark" />
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

                <Button className="submit" content="Вход" onClick={() => { SetError(Login()) }} />

                <div className="redirect">
                    Още нямате акаунт? <Link secondary content="Регистрация" link="/signup" />
                </div>

                {loading && <Loading />}

            </div>

    );
}


export default withRouter(Form);
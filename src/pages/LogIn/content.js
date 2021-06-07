import React from "react"
import {Button} from '../../Components'
function Content(){
    return (
        <div className="content">
            <div className="main">
                <form className="MyForm" action="" method="click">
                    <div className="user_box">
                        <input name="username" type="text" placeholder="имейл или потребителско име"></input>
                    </div>

                    <div className="user_box">
                        <input name="password" type="password" placeholder="парола"></input>
                    </div>

                    <div className="button_box">
                        <Button id="sbm" type = "submit" class="enter_button" onClick = {getData} name="вход" />
                    </div>


                </form>

                <div className="link_contain"><a href="/PopUp">Забравена парола?</a></div>

                <div className="separate"/>
                <div className="inside"><h3>или</h3></div>
                <div className="separate"/>

            </div>

            <div className="register">
                <div>
                    <h4 className="register_text">Все още нямате акаунт?</h4>
                    <div className="link_contain"><a href="/">Регистрирай се!</a></div>
                </div>
            </div>

        </div>

    );
}

var submit;
const getData = () => {
    console.log("dadlad");
    const xhr = new XMLHttpRequest();
    xhr.open("POST","http://localhost:3000/Login");

    xhr.onload = () => {
        console.log(xhr.response);
    };
    xhr.send();
};


export default Content;
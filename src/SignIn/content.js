import React from "react"
import {Button} from '../Components'
function Content(){
    return (
        <div className="content">
            <div className="main" onClick={()=>{console.log("ne")}}>

                <div className="user_box">
                    <input name="username" type="text" placeholder="имейл или потребителско име"></input>
                </div>

                <div className="user_box">
                    <input name="password" type="text" placeholder="парола"></input>
                </div>

                <div className="button_box">
                    <Button class="enter_button" name="вход"/>
                </div>

                <div className="separate"/>
                <div className="inside"><h3>или</h3></div>
                <div className="separate"/>

                <div className="link_contain" onClick={()=>{console.log("dkasjka")}}><a href="/">Забравена парола?</a></div>

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

export default Content;
import React, { useEffect } from 'react'
import LoginForm from './LoginForm'
import SignupForm from './SignupForm'


function Auth(props) {
    useEffect(()=>{
        import('./Form.css');
        import('./Auth.css');
    }, [])

    return (
        <div className = "page">
            <img alt = "background light" src="Images/Waves.png" className="background light" />
            <img alt = "background light" src="Images/WavesDarkBlue.png" className="background dark" />

            {props.login ? <LoginForm/> : null}
            {props.signup ? <SignupForm/> : null}
        </div>
    );
}

export const Login = () => <Auth login/>
export const Signup = () => <Auth signup/>
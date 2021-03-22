import React from 'react';

switch(window.location.pathname)
{
  case "/universities": import('./Header.css'); console.log("Unis"); break;
}

class Header extends React.Component {
    render() {
        return (
            <div className="header">
                <div style = {{padding: "50px"}}>
                    Julemy ще Ви помогне да изберете най-подходящ университет (или нещо такова)
                </div>
            </div>
        );
    }
}

export default Header;
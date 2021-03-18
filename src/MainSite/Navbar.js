import React from 'react';
import './Navbar.css';

class DropdownElement extends React.Component 
{  
  render() {
    if(this.props.roundCorner)
    {
      return <li style = {{borderBottomRightRadius: "10px"}}>{this.props.name}</li>
    }
    else
    {
      return <li>{this.props.name}</li>
    }
  }

  static defaultProps = {roundCorner: false};
}


var navbar;

function MouseClicked(navbar)
{
  if(!navbar.state.hover && !navbar.state.hidden)
  {
    var style = document.getElementById("dropdown-content").style;

    style.height = "0px";

    setTimeout(() => {
      document.getElementById("dropdown-content").style.display = "none";
    }, 500);

    navbar.setState({hidden: true});
  }
}

class Navbar extends React.Component 
{
  constructor(props)
  {
    super(props);
    this.state = {hidden: true, hover: false};
    navbar = this;
  }
  
  render() 
  {
    return (
      <div className="navbar">
        <a className="button sign-up" href="">
          Регистрация
      </a>
        <a className="button" href="">
          Вход
      </a>
        <div className="dropdown" onMouseEnter = {()=>{this.setState({hover: true})}} onMouseLeave = {()=>{this.setState({hover: false})}}>
          <i className="fa fa-bars" id="dropdown-button" onClick={this.OnDropdownButton}></i>
          <ul id="dropdown-content">
          <DropdownElement name = "aaa"/>
          <DropdownElement name = "aaa"/>
          <DropdownElement name = "aaa"/>
          <DropdownElement name = "aaa"/>
          <DropdownElement name = "aaa"/>
          <DropdownElement name = "aaa"/>
          <DropdownElement name = "aaa" roundCorner = {true}/>
          </ul>
        </div>
        <img style={{ fontSize: "13px", width: "80px", float: "left" }} alt="Тук може да е логото"></img>
      </div>);
  }

  OnDropdownButton = () => {
    var style = document.getElementById("dropdown-content").style;

    if (this.state.hidden) 
    {
      style.display = "block";

      setTimeout(()=>{style.height = 47 * 7 + 4 + "px"});
    }
    else 
    {
      style.height = "0px";

      setTimeout(() => {
        style.display = "none";
      }, 500);
    }

    this.setState({hidden: !this.state.hidden});
  }
}

window.onclick = function()
{
  MouseClicked(navbar);
}

export default Navbar;

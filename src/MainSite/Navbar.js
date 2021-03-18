import React from 'react';
import './Navbar.css';

class DropdownElement extends React.Component 
{
  static defaultProps = {timeOffset: 0};
  
  render() {
    return <li style = {{animation: "showDropdownA 300ms " + (300 - this.props.timeOffset) + "ms" + " ease-in-out " + "both"}}>{this.props.name}</li>
  }
}


var navbar;

function MouseClicked(navbar)
{
  if(!navbar.state.hover && !navbar.state.hidden)
  {
    //will maybe replace with react stuff
    document.querySelectorAll("#dropdown-content li").forEach((element) => {
      element.style.animationName = "hideDropdownA";
      element.style.animationDelay = (300 - Number(element.style.animationDelay.slice(0, -2))) + "ms";
    });

    setTimeout(() => {
      document.getElementById("dropdown-content").style.display = "none";
    }, 600);

    navbar.setState({hidden: true});
  }
}

class Navbar extends React.Component 
{
  constructor(props)
  {
    super(props);
    this.state = {height: "130px", hidden: true, hover: false};
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
          <DropdownElement name = "aaa" timeOffset = {50}/>
          <DropdownElement name = "aaa" timeOffset = {100}/>
          <DropdownElement name = "aaa" timeOffset = {150}/>
          <DropdownElement name = "aaa" timeOffset = {200}/>
          <DropdownElement name = "aaa" timeOffset = {250}/>
          <DropdownElement name = "aaa" timeOffset = {300}/>
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

      document.querySelectorAll("#dropdown-content li").forEach((element) => {
        element.style.animationName = "showDropdownA";
        element.style.animationDelay = (300 - Number(element.style.animationDelay.slice(0, -2))) + "ms";
      });

    }
    else 
    {
      //will maybe replace with react stuff
      document.querySelectorAll("#dropdown-content li").forEach((element) => {
        element.style.animationName = "hideDropdownA";
        element.style.animationDelay = (300 - Number(element.style.animationDelay.slice(0, -2))) + "ms";
      });

      setTimeout(() => {
        style.display = "none";
      }, 600);
    }

    this.setState({hidden: !this.state.hidden});
  }
}

window.onclick = function()
{
  MouseClicked(navbar);
}

export default Navbar;

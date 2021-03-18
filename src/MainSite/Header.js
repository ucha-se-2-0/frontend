import React from 'react';
import './Header.css';

class DropdownElement extends React.Component 
{
  constructor(props)
  {
    super(props);
  }

  static defaultProps = {timeOffset: 0};
  
  render() {
    return <li style = {{animation: "showDropdownA 300ms " + (300 - this.props.timeOffset) + "ms" + " ease-in-out " + "both"}}>{this.props.name}</li>
  }
}

class Header extends React.Component 
{
  constructor(props)
  {
    super(props);
    this.state = {height: "130px", hidden: true};
  }
  
  render() 
  {
    return (
      <div className="header">
        <a className="button sign-up" href="">
          Регистрация
      </a>
        <a className="button" href="">
          Вход
      </a>
        <div className="dropdown">
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

export default Header;

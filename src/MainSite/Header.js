import React from 'react';
import './Header.css';

class DropdownElement extends React.Component {
  constructor(props) {
    super(props);
  }

  static defaultProps = { timeOffset: "0ms" };

  render() {
    return <li style={{}}>{this.props.name} </li>
  }
}

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = { height: "130px", hidden: true };
  }

  render() {
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
            <DropdownElement name="aaa" />
            <DropdownElement name="aaa" />
            <DropdownElement name="aaa" />
            <DropdownElement name="aaa" />
            <DropdownElement name="aaa" />
            <DropdownElement name="aaa" />
            <DropdownElement name="aaa" />
          </ul>
        </div>
        <img style={{ fontSize: "13px", width: "80px", float: "left" }} alt="Тук може да е логото"></img>
      </div>);
  }

  OnDropdownButton = () => {
    var style = document.getElementById("dropdown-content").style;
    style.transition = "height 0.5s";

    if (this.state.hidden) {
      style.display = "block";
      setTimeout(() => { style.height = 43 * 7 + 4 + "px" });
    }
    else {
      style.height = "0px";
      setTimeout(() => { style.display = "none" }, 500);
    }
    this.setState({ hidden: !this.state.hidden });
  }

}

export default Header;

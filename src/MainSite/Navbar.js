import React from 'react';
import './Navbar.css';

class Navbar extends React.Component {
  render() {
    return (
      <div className="navbar">
        <div className="dropdown">
          <a className="button" href="">Предмети</a>
          <ul className="dropdown-content">
            <li>Анатомия</li>
            <li>Физиология</li>
            <li>Цитология</li>
            <li>Генетика</li>
            <li>Биохимия</li>
          </ul>
        </div>

        <a className="button" href="">Вход</a>

        <a id="unis" className="button" href="">Университети</a>
      </div>
    );
  }
}

function Response() {
  if (window.innerWidth < 1100) 
  {
    document.querySelectorAll(".navbar>*").forEach((element) => { element.style.minWidth = "20%"; });
    
        if (window.innerWidth < 700) 
        {
          document.querySelectorAll(".navbar *").forEach((element) => { element.style.minWidth = "5%"; });
          
                if (window.innerWidth < 650) 
                {
                  document.querySelectorAll(".navbar *").forEach((element) => { element.style.fontSize = "20px"; });
          
                  var unis = document.getElementById("unis");
                  if (window.innerWidth < 450) 
                  {
                    unis.innerHTML = "";
                    unis.classList.add("fa");
                    unis.classList.add("fa-university");
                  }
                  else 
                  {
                    unis.innerHTML = "Университети";
                    unis.classList.remove("fa");
                    unis.classList.remove("fa-university");
                  }
                }
                else 
                {
                  document.querySelectorAll(".navbar *").forEach((element) => { element.style.fontSize = "30px"; });
                }
        }
        else 
        {
          document.querySelectorAll(".navbar>*").forEach((element) => { element.style.minWidth = "20%"; });
        }
  }
  else {
    document.querySelectorAll(".navbar>*").forEach((element) => { element.style.minWidth = "29%"; });
  }


}

export { Navbar, Response };

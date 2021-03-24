//Here are complex and often-used components that 
//can be imported and simply used

import React from "react"
import "./Style/Components.css"


export class Button extends React.Component {

  constructor(props) {
    super(props);
    this.state = { cursor: "default" }
    if (this.props.link !== undefined) {
      this.state.cursor = "pointer";
    }
  }

  render() {
    const style = { width: this.props.width, height: this.props.height, cursor: this.state.cursor };
    return (
      <a id={this.props.id} className={"button " + this.props.class} href={this.props.link} style={style} onClick = {this.props.onClick}>
        <div className="button-content" style={{ cursor: this.state.cursor }}>
          {this.props.name}
        </div>
        <div className="button-background"> </div>
      </a>
    );
  }
}

export class SearchField extends React.Component {
  render() {
    return (
      <Button class={"search " + this.props.class} name={
        <>
          <i className="fa fa-search"></i>
          <input type = "text" onKeyUp = { event=>{
              if(event.key === "Enter") 
                if(this.props.search !== undefined) 
                  this.props.search(event.target.value); 
                else
                  console.log("Search function not given! Set it using 'search' property of 'SearchField'");
              }
              }></input>
        </>
      } height = {this.props.height}/>
    );
  }
}

export class Footer extends React.Component
{
  render()
  {
    return(
      <div className = "footer">
        {/*TO DO*/}
      </div>
    );
  }
}

export default { Button, SearchField, Footer };
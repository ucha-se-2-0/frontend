import React from "react"
import "./Components.css"

class Button extends React.Component
{

    constructor(props)
    {
        super(props);
        this.state = {cursor: "default"}
        if(this.props.link !== undefined)
        {
            this.state.cursor = "pointer";
        }
    }

  render()
  {
    const style = {width: this.props.width, height: this.props.height, cursor: this.state.cursor};
    console.log(this.state.cursor);
    return (
      <a id = {this.props.id} className = "button" href = {this.props.link} style = {style}>
        <div className = "button-text" style = {{cursor: this.state.cursor}}>
          {this.props.name}
        </div>
        <div className = "button-background"> </div>
      </a>
    );
  }

  
}

export default Button;
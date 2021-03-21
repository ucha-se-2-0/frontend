import React from "react"
import "./Components.css"

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
      <a id={this.props.id} className={"button " + this.props.class} href={this.props.link} style={style}>
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
      <Button class="search" name={
        <>
          <i className="fa fa-search"></i>
          {/* <input type = "text"></input> */}
        </>
      } />
    );
  }
}



export default { Button, SearchField };
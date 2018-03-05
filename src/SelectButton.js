import React, { Component } from "react";
import "./TodoList.css";
 
class SelectButton extends Component {

	 constructor(props) {
	    super(props);
	    this.state = {
	    	toggle_select: false
	    };

	    this.handleClick = this.handleClick.bind(this);
	  }

  handleClick() {
		this.setState(function(prevState) {
			return {
				toggle_select: !prevState.toggle_select
			};
		});
	}

  render() {
  	let fgColor = this.props.buttonCharacter === "ibb" ? 
  		(this.state.toggle_select ? "#66bc5c" : "white") :
  		(this.state.toggle_select ? "#a82341" : "white")

  	let bgColor = this.props.buttonCharacter === "ibb" ? "#a0ef97" : "#e58b9f"

	  return (
	    <button className="button icon-button add"
	    	style={{color: fgColor, backgroundColor: bgColor}}
	    	onClick={this.handleClick} type="button">
        <span className="icon is-small">
          <i className="fa fa-heart"></i>
        </span>
      </button>
	  );
	}
}
 
export default SelectButton;
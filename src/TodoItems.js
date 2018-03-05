import React, { Component } from "react";
import FlipMove from 'react-flip-move';
 
class TodoItems extends Component {
	constructor(props, context) {
    super(props, context);
 
    this.createTasks = this.createTasks.bind(this);
  }
 
  delete(key) {
    this.props.delete(key);
  }

  createTasks(item) {
    var person = "white";
    if (item.ibb && item.obb) {
      person = "#87efff";
    } else if (item.ibb) {
      person = "#a0ef97";
    } else if (item.obb) {
      person = "#e58b9f";
    }

	  return (
      <div className="todo-list-item" key={item.key}>
        <button className="button icon-button check" onClick={() => this.delete(item.key)} >
          <span className="icon is-small">
            <i className="fa fa-check"></i>
          </span>
        </button>
        <div className="divider" style={{backgroundColor: person}}>
        </div>
  	  	<li>
          {item.text}
  	    </li>
      </div>
	  );
	}
 
  render() {
    var todoEntries = this.props.entries;
    var listItems = todoEntries.map(this.createTasks);
 
    return (
      <ul className="todo-list">
        <FlipMove duration={250} easing="ease-out">
          {listItems}
        </FlipMove>
      </ul>
    );
  }
};
 
export default TodoItems;
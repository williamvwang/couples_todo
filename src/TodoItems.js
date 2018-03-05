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
	  return (
      <div className="todo-list-item" key={item.key}>
        <button className="button icon-button check" onClick={() => this.delete(item.key)} >
          <span className="icon is-small">
            <i className="fa fa-check"></i>
          </span>
        </button>
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
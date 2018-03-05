import React, { Component } from "react";
 
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
        <button className="button check-button" onClick={() => this.delete(item.key)} >
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
          {listItems}
      </ul>
    );
  }
};
 
export default TodoItems;
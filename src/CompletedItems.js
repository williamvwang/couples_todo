import React, { Component } from "react";
 
class TodoItems extends Component {
	constructor(props, context) {
    super(props, context);
 
    this.state = {};

    this.createTasks = this.createTasks.bind(this);
    this.taskHTML = this.taskHTML.bind(this);
  }

  dividerColor(item) {
    if (item.ibb && item.obb) {
      return "#87efff";
    } else if (item.ibb) {
      return "#a0ef97";
    } else if (item.obb) {
      return "#e58b9f";
    }
  }

  dividerHTML(item) {
    return (
      <div className="divider" style={{ backgroundColor: this.dividerColor(item) }}></div>
    );
  }

  taskHTML(item) {
    return (
      <div className="task-item item">
        {this.dividerHTML(item)}
        <div className="task">{item.text}</div>
      </div>
    );
  }

  createTasks(item) {
	  return (
        <li className="row" key={item.key}>
          { this.taskHTML(item) }
        </li>
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
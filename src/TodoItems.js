import React, { Component } from "react";
import FlipMove from 'react-flip-move';
 
class TodoItems extends Component {
	constructor(props, context) {
    super(props, context);
 
    this.state = {
      icon: "check",
      showDeleteConfirm: false,
      taskKeyToDelete: null
    };

    this.createTasks = this.createTasks.bind(this);
    this.toggleDeleteConfirm = this.toggleDeleteConfirm.bind(this);
    this.handleContextMenu = this.handleContextMenu.bind(this);
  }

  handleContextMenu(e) {
    this.setState(function(prevState) {
      return { icon: (prevState.icon === "check") ? "times" : "check" }
    });

    e.preventDefault();
  }

  toggleDeleteConfirm(key) {
    this.setState(function(prevState) {
      return { 
        showDeleteConfirm: !prevState.showDeleteConfirm,
        taskKeyToDelete: key
      }
    });
  }

  completeTodo(key) {
    this.props.delete(key);
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

  timesButtonHTML(item) {
    return (
      <button className="button icon-button times" onClick={() => this.toggleDeleteConfirm(item.key)}>
        <span className="icon is-small">
          <i className="fa fa-times"></i>
        </span>
      </button> 
    );
  }

  checkButtonHTML(item) {
    return (
      <button className="button icon-button check" onClick={() => this.completeTodo(item.key)}>
        <span className="icon is-small">
          <i className="fa fa-check"></i>
        </span>
      </button>
    );
  }

  dividerHTML(item) {
    return (
      <div className="divider" style={{ backgroundColor: this.dividerColor(item) }}></div>
    );
  }

  deleteConfirm(item) {
    return (
      <div className="delete-confirm">
        { this.dividerHTML(item) }

        <li>
          are you sure?
        </li>

        { this.timesButtonHTML(item) }
        { this.checkButtonHTML(item) }
      </div>
      );
  }

  taskItem(item) {
    return (
      <div className="task">
        { this.dividerHTML(item) }

        <li>
          { item.text }
        </li>

        { this.state.icon === "check" ?
           this.checkButtonHTML(item)  :
           this.timesButtonHTML(item) 
        }
      </div>
      );
  }

  createTasks(item) {

	  return (
      <div className="todo-list-item" key={item.key} onContextMenu={this.handleContextMenu}>
        { this.state.showDeleteConfirm && this.state.taskKeyToDelete === item.key ?
          this.deleteConfirm(item) :
          this.taskItem(item)
        }
      </div>
	  );
	}
 
  render() {
    var todoEntries = this.props.entries;
    var listItems = todoEntries.map(this.createTasks);
 
    return (
      <ul className="todo-list">
        <FlipMove duration={300} easing="ease-out">
          {listItems}
        </FlipMove>
      </ul>
    );
  }
};
 
export default TodoItems;
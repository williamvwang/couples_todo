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
    this.deleteTodo = this.deleteTodo.bind(this)
    this.toggleDeleteConfirm = this.toggleDeleteConfirm.bind(this);
    this.handleContextMenu = this.handleContextMenu.bind(this);

    this.taskItem = this.taskItem.bind(this);
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

  deleteConfirm(item) {
    var person = "white";
    if (item.ibb && item.obb) {
      person = "#87efff";
    } else if (item.ibb) {
      person = "#a0ef97";
    } else if (item.obb) {
      person = "#e58b9f";
    }

    return (
      <div className="todo-list-item">
        <div className="divider" style={{backgroundColor: person}}></div>

        <li>
          are you sure?
        </li>

        <button className="button icon-button times" onClick={() => this.toggleDeleteConfirm(item.key)} >
          <span className="icon is-small">
            <i className="fa fa-times"></i>
          </span>
        </button> 

        <button className="button icon-button check" onClick={() => this.completeTodo(item.key)} >
          <span className="icon is-small">
            <i className="fa fa-check"></i>
          </span>
        </button>
      </div>
      );
  }

  completeTodo(key) {
    this.props.delete(key);
  }

  deleteTodo(key) {
    this.props.delete(key);
    this.toggleDeleteConfirm();
  }

  taskItem(item) {
    var person = "white";
    if (item.ibb && item.obb) {
      person = "#87efff";
    } else if (item.ibb) {
      person = "#a0ef97";
    } else if (item.obb) {
      person = "#e58b9f";
    }

    return (
      <div className="todo-list-item">
        <div className="divider" style={{backgroundColor: person}}></div>

        <li>
          { item.text }
        </li>

        { this.state.icon === "check" ?
          <button className="button icon-button check" onClick={() => this.completeTodo(item.key)} >
            <span className="icon is-small">
              <i className="fa fa-check"></i>
            </span>
          </button> :
          <button className="button icon-button times" onClick={() => this.toggleDeleteConfirm(item.key)} >
            <span className="icon is-small">
              <i className="fa fa-times"></i>
            </span>
          </button> 
        }
      </div>
      );
  }

  createTasks(item) {

	  return (
      <div className="todo-list-items" key={item.key} onContextMenu={this.handleContextMenu}>

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
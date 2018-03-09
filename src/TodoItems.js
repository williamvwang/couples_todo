import React, { Component } from "react";
import FlipMove from 'react-flip-move';
import TodoItem from "./TodoItem";
//import ReactCSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';
 
class TodoItems extends Component {
	constructor(props, context) {
    super(props, context);
 
    this.state = {
      icon: "check",
      showDelete: false,
      showDeleteConfirm: false,
      taskKeyToDelete: null
    };

    this.createTasks = this.createTasks.bind(this);
    this.toggleDeleteConfirm = this.toggleDeleteConfirm.bind(this);
    this.handleContextMenu = this.handleContextMenu.bind(this);
  }

  handleContextMenu(e) {
    this.setState(function(prevState) {
      return { showDelete: !prevState.showDelete }
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

  createTasks(item) {
	  return (
        <TodoItem item={item} key={item.key} completeTodo={this.completeTodo.bind(this)} handleContextMenu={this.handleContextMenu}
          showDelete={this.state.showDelete}/>
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
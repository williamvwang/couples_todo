import React, { Component } from "react";
//import ReactCSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';
 
class TodoItem extends Component {
	constructor(props, context) {
    super(props, context);
 
    this.state = {
      showDeleteConfirm: false,
      taskKeyToDelete: null
    };

    this.taskHTML = this.taskHTML.bind(this);
    this.toggleMoreIcons = this.toggleMoreIcons.bind(this);
  }

  toggleDeleteConfirm(key) {
    this.setState(function(prevState) {
      return { 
        showDeleteConfirm: !prevState.showDeleteConfirm,
        taskKeyToDelete: key
      }
    });
  }

  toggleMoreIcons() {
    console.log("hello");
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
      <button className="button icon-button check" onClick={() => this.props.completeTodo(this.props.item.key)}>
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

  confirmHTML(item) {
    return (
      <div className="task-item confirm-delete">
        { this.dividerHTML(item) }
        <div className="are-you-sure">are you sure?</div>
        <div className="confirm-btn">
          <div className="btn">{ this.checkButtonHTML(item) }</div>
          <div className="btn">{ this.timesButtonHTML(item) }</div>
        </div>
      </div>
    );
  }

  taskHTML(item) {
    return (
      <div className="task-item item">
        {this.dividerHTML(item)}
        <div className="task" onClick={this.toggleMoreIcons}>{item.text}</div>
        <div className="btn">
          { !this.props.showDelete ? this.checkButtonHTML(item) : this.timesButtonHTML(item) }
        </div>
      </div>
    );
  }
 
  render() {
    var item = this.props.item;
 
    return (
    	<li className="row" key={item.key} onContextMenu={this.props.handleContextMenu}>
        { this.state.showDeleteConfirm ? this.confirmHTML(item) : this.taskHTML(item) }
	    </li>
	  );
  }
};
 
export default TodoItem;
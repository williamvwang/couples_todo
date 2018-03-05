import React, { Component } from "react";
import TodoItems from "./TodoItems";
import SelectButton from "./SelectButton"
import "./TodoList.css";
 
class TodoList extends Component {
	constructor(props) {
	  super(props);
	 
	  this.state = {
	    items: []
	  };
	 
	  this.addItem = this.addItem.bind(this);
	  this.deleteItem = this.deleteItem.bind(this);
	}
   
  addItem(e) {
	  if (this._inputElement.value !== "") {
	    var newItem = {
	      text: this._inputElement.value,
	      key: Date.now()
	    };
	 
	    this.setState((prevState) => {
	      return { 
	        items: prevState.items.concat(newItem) 
	      };
	    });
	   
	    this._inputElement.value = "";
	  }
	     
	  e.preventDefault();
	}

	deleteItem(key) {
	  var filteredItems = this.state.items.filter(function (item) {
	    return (item.key !== key);
	  });
	 
	  this.setState({
	    items: filteredItems
	  });
	}

  render() {
	  return (
	    <div className="todo-list-main">
	      <div className="header">
	        <form onSubmit={this.addItem}>
	          <input className="input" ref={(a) => this._inputElement = a} 
							placeholder="what do you need to do?">
	          </input>
	          <SelectButton buttonCharacter="ibb"/>
	          <SelectButton buttonCharacter="obb"/>
	          {/*<button className="button icon-button ibb" type="button">
		          <span className="icon is-small">
		            <i className="fa fa-heart"></i>
		          </span>
		        </button>
		        <button className="button icon-button obb" type="button">
		          <span className="icon is-small">
		            <i className="fa fa-heart"></i>
		          </span>
		        </button>*/}
	        </form>
	      </div>
	      <TodoItems entries={this.state.items}
          delete={this.deleteItem}/>
	    </div>
	  );
	}
}
 
export default TodoList;
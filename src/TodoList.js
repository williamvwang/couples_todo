import React, { Component } from "react";
import TodoItems from "./TodoItems";
import CompletedItems from "./CompletedItems";
//import SelectButton from "./SelectButton"
import "./TodoList.css";
 
class TodoList extends Component {
	constructor(props) {
	  super(props);
	 
	  this.state = {
	    items: [],
	    completed_items: [],
	    show_completed: false,
	    ibbToggle: false,
	    obbToggle: false
	  };
	 
	  this.addItem = this.addItem.bind(this);
	  this.completeItem = this.completeItem.bind(this);
	  this.deleteItem = this.deleteItem.bind(this);
	  this.handleClick = this.handleClick.bind(this);
	  this.toggleCompleted = this.toggleCompleted.bind(this);
	}

	handleClick(character) {
		this.setState(function(prevState) {
			return (character === "ibb") ? 
				{ ibbToggle: !prevState.ibbToggle } :
				{ obbToggle: !prevState.obbToggle };
		});
	}
   
 	addItem(e) {
  	e.preventDefault();

  	if (this._inputElement.value !== "") {
			if (!this.state.ibbToggle && !this.state.obbToggle) {
	  		alert('please assign the task to somebody!');
	  		return;
	  	}

	    var newItem = {
	      text: this._inputElement.value,
	      key: Date.now(),
	      ibb: this.state.ibbToggle,
	      obb: this.state.obbToggle
	    };
	 
	    this.setState((prevState) => {
	      return { 
	        items: prevState.items.concat(newItem),
	      //   ibbToggle: false,
	    		// obbToggle: false
	      };
	    });
	   
	    this._inputElement.value = "";
	  }
	}

	completeItem(key) {
		console.log('TodoList.completeItem called on item ' + key);
		var completedItem = this.state.items.find(item => item.key === key);
		var filteredItems = this.state.items.filter(item => item.key !== key);

		this.setState(prevState => {
      return { 
        items: filteredItems,
        completed_items: prevState.completed_items.concat(completedItem)
      };
    });
	}

	deleteItem(key) {
	  var filteredItems = this.state.items.filter(function (item) {
	    return (item.key !== key);
	  });
	 
	  this.setState({
	    items: filteredItems
	  });
	}

	toggleCompleted() {
		this.setState(prevState => {
			return {
				show_completed: !prevState.show_completed
			}
		});
	}

  render() {
  	let ibbColor = this.state.ibbToggle ? "#66bc5c" : "white";
  	let obbColor = this.state.obbToggle ? "#a82341" : "white"

	  return (
	    <div className="todo-list-main">
	      <div className="header">
		        <form onSubmit={this.addItem}>
		          <input className="input" ref={(input) => this._inputElement = input} 
					placeholder="what do you need to do?">
		          </input>

				      <button className="button icon-button add"
					    	style={{color: ibbColor, backgroundColor: "#a0ef97"}}
					    	onClick={() => this.handleClick("ibb")} type="button">
				        <span className="icon is-small">
				          <i className="fa fa-heart"></i>
				        </span>
				      </button>  

				      <button className="button icon-button add"
					    	style={{color: obbColor, backgroundColor: "#e58b9f"}}
					    	onClick={() => this.handleClick("obb")} type="button">
				        <span className="icon is-small">
				          <i className="fa fa-heart"></i>
				        </span>
				      </button>  
		        </form>
	      </div>
	      { !this.state.show_completed ? 
	      	<TodoItems entries={this.state.items} complete={this.completeItem} delete={this.deleteItem}/> :
	      	<CompletedItems entries={this.state.completed_items}/>
	      }

	    	{/* sketchy conditionals for displaying completed item switcher */}
	      {this.state.completed_items.length > 0 && 
		      	<span style={{cursor: 'pointer', textDecoration: 'underline'}} onClick={() => this.toggleCompleted()}>
		      		{this.state.show_completed ?
		      			'back to to-do' :
		      			'show ' + this.state.completed_items.length + ' completed item' + (this.state.completed_items.length > 1 ? 's' : '')
	      			}
	      		</span>
	      }
	    </div>
	  );
	}
}
 
export default TodoList;
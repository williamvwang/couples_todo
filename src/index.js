import React from "react";
import ReactDOM from "react-dom";
import 'bulma/css/bulma.css'
import "./index.css";
import TodoList from "./TodoList";
import 'font-awesome/css/font-awesome.min.css';
  
var destination = document.querySelector("#container")
  
ReactDOM.render(
       <TodoList/>,
    destination
);
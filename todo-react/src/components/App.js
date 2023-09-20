import "./App.css";
import AddTask from "./AddTask";
import TaskList from "./TaskList";
import React, { Component } from "react";

class App extends Component {
  state = {
    tasks: [
      {
        id: 0,
        text: "zagrać w Wiedźmina",
        date: "22-09-2023",
        important: false,
        active: false,
        finishDate: null,
      },
      {},
    ],
  };
  render() {
    return (
      <div className="App">
        TODO APP
        <AddTask />
        <TaskList />
      </div>
    );
  }
}

export default App;

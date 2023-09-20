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
      {
        id: 1,
        text: "wyrzucić śmieci",
        date: "11-09-2024",
        important: false,
        active: false,
        finishDate: null,
      },
      {
        id: 2,
        text: "pocisnąć 200kg na płaskiej",
        date: "25-09-2026",
        important: false,
        active: false,
        finishDate: null,
      },
      {
        id: 3,
        text: "przesłuchać pierwszą płytę Justina Biebera",
        date: "01-01-2024",
        important: false,
        active: false,
        finishDate: null,
      },
      {
        id: 4,
        text: "zjeść tort urodzinowy",
        date: "19-05-2024",
        important: false,
        active: false,
        finishDate: null,
      },
      {
        id: 5,
        text: "iść na ryby ze stachurskim",
        date: "13-11-2027",
        important: false,
        active: false,
        finishDate: null,
      },
      {
        id: 6,
        text: "skoczyć z dywanu",
        date: "22-07-2025",
        important: false,
        active: false,
        finishDate: null,
      },
      {
        id: 7,
        text: "tak",
        date: "22-09-2029",
        important: false,
        active: false,
        finishDate: null,
      },
    ],
  };
  render() {
    return (
      <div className="App">
        TODO APP
        <AddTask />
        <TaskList tasks={this.state.tasks} />
      </div>
    );
  }
}

export default App;

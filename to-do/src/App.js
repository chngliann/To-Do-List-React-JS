// import React components
import React, { useState } from "react"; //useState Hook allows us to track state(data, properties,..) in a function component

//import bootstrap
import "bootstrap/dist/css/bootstrap.css";

// import fontawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleCheck,
  faPen,
  faTrash, // mark task as completed, edit task, delete task
} from "@fortawesome/free-solid-svg-icons";

import "./App.css";

function App() {
  //Main state to store todo list tasks
  const [toDo, setToDo] = useState([
    { id: 1, title: "Task 1", status: false },
    { id: 2, title: "Task 2", status: false },
  ]);

  //Temp state - use inputs to add new tasks, or update tasks already in system
  const [newTask, setNewTask] = useState("");
  const [updateData, setUpdateData] = useState("");

  // event handler function component - to add task
  const addTask = () => {};
  //  to delete tasks
  const deleteTask = () => {};
  //  to mark tasks as completed
  const markDone = () => {};
  //   to cancel update
  const cancelUpdate = () => {};
  //  to change task from update - takes a value from an event
  const changeTask = (e) => {};
  //  to update task
  const updateTask = () => {};

  return (
    //use bootstrap's container class?
    <div className="container App">
      <h2>To Do List (ReactJS)</h2>
      <br></br>
      {/* display message if there are no tasks */}
      {toDo && toDo.length ? "" : "No Tasks"}

      {toDo.map((task, index) => {
        return (
          <React.Fragment key={task.id}>
            <div className="taskBg">
              <div className={task.status ? "done" : ""}>
                <span className="taskText">{index + 1}</span>
                <span className="taskText">{task.title}</span>
              </div>
            </div>
          </React.Fragment>
        );
      })}
    </div>
  );
}

export default App;

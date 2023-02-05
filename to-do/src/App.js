//Q: why downloaded bootstrap through reactstrap?? also why he skip some seemingly core command runs??
//before the imports:
// install Font Awesome React components: npm i --save @fortawesome/react-fontawesome@latest
// import bootstrap in app code: npm install --save bootstrap

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
  const [toDo, setToDo] = useState([
    { id: 1, title: "Task 1", status: false },
    { id: 2, title: "Task 2", status: false },
  ]);

  return (
    //use bootstrap's container class?
    <div className="container App">
      <h2>To Do List (ReactJS)</h2>
      <br></br>
      {/* <span>{toDo.title}</span> if there is only one task to display */}
      {/* display tasks - the below does not work if toDo not intialised with a list of dicts because .map only works on arrays*/}
      {toDo.map((task) => {
        return (
          <React.Fragment>
            <span className="taskText">{task.id}</span>
            <span className="taskText">{task.title}</span>
          </React.Fragment>
        );
      })}
    </div>
  );
}

export default App;

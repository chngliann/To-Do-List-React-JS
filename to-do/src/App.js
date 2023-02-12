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
      {/* display message if there are no tasks */}
      {/* ternary operator 
      - {conditionToTest ? ValueIfTrue : ValueIfFalse}
      - https://www.freecodecamp.org/news/how-the-question-mark-works-in-javascript/
      */}
      {/* short circuit evalutation 
      - (if this part is true) && (this part will execute)
      - https://stackoverflow.com/questions/40682064/what-does-operator-indicate-with-this-props-children-react-cloneelemen */}
      {toDo && toDo.length ? "" : "No Tasks"}
      {/* Q: Why doesnt it work when I put toDo instead of "" ????? 
      A: because it just returns empty string, the actual printing of tasks*/}

      {/* <span>{toDo.title}</span> if there is only one task to display */}
      {/* display tasks - the below does not work if toDo not intialised with a list of dicts because .map only works on arrays*/}
      {/* you could put task.id instead of index too but index is a built in parameter of map anyway so can use */}
      {/* React Fragments - https://reactjs.org/docs/fragments.html */}
      {toDo.map((task, index) => {
        return (
          <React.Fragment key={task.id}>
            <span className="taskText">{index + 1}</span>
            <span className="taskText">{task.title}</span>
          </React.Fragment>
        );
      })}
    </div>
  );
}

export default App;

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
  const [toDo, setToDo] = useState({});

  return (
    //use bootstrap's container class?
    <div className="container App">
      <h2>To Do List (ReactJS)</h2>
    </div>
  );
}

export default App;

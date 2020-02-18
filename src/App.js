import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([{ text: "Learn Hooks" }]);  //object datatype

  useEffect(() => {  // same componentDidMount and componentDidUpdate
    document.title = "You clicked " + count + "times";
  });

  return (
    <div>        
      <p>You clicked {count} times</p>         
      <button onClick={() => setCount(count + 1)}>Click me</button>  
    </div>               //setState , after this , comp.DidMount(here useEffect) invoked 
  );
}

export default App;

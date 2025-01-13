import { useState, useEffect } from "react";
import { useEffect, useState } from "react";

function App() {
  const [counter, setCount] = useState(0);
  const [keyword, setKeyword] = useState("");
  const onClick = () => setCount((prev) => prev + 1);
  //const onChange = (event) => setKeyword(event.target.value);
  useEffect(() => {
    console.log("call the API");
  }, []);
  useEffect(() => {
    console.log("i run when 'keyword' changes.");
  }, [keyword]);
  useEffect(() => {
    console.log("i run when 'counter' changes.");
  }, [counter]);
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);
  const onChange = (event) => setToDo(event.target.value);
  const onSubmit = (event) => {
    event.preventDefault();
    if (toDo === "") {
      return;
    }
    setToDos((currentArray) => [toDo, ...currentArray]);
    setToDo("");
  };
  const deleteToDo = (index) => {
    setToDos(toDos.filter((item, todoIndex) => index !== todoIndex));
  };
  useEffect(() => console.log(toDos), [toDos]);
  return (
    <div>
      <input
        value={keyword}
        onChange={onChange}
        type="text"
        placeholder="Search Here..."
      />
      <h1>{counter}</h1>
      <button onClick={onClick}>Press the button</button>
      <h1>My To Dos({toDos.length})</h1>
      <form onSubmit={onSubmit}>
        <input
          value={toDo}
          onChange={onChange}
          text="text"
          placeholder="Write your to do"
        />
        <button>Add To Do</button>
      </form>
      <hr />
      <ul>
        {toDos.map((item, index) => (
          <li key={index}>
            {item}
            <span onClick={() => deleteToDo(index)}>❌</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

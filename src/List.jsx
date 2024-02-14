import { useEffect, useState } from "react";

export default function List() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const [display, setDisplay] = useState("ALL");
  const onChange = (e) => {
    setTodo(e.target.value);
  };
  const onClick = () => {
    setTodos((prev) => [...prev, { name: todo, checked: false }]);
    setTodo("");
  };
  const onDelete = (idx) => {
    setTodos((prev) => prev.filter((item, index) => index !== idx));
  };
  const onChangeRadio = (e) => {
    setDisplay(e.target.value);
    console.log(e.target.value);
    console.log(display);
  };
  return (
    <div>
      <div>
        <input
          type="radio"
          name="header"
          id="all"
          value="ALL"
          onChange={onChangeRadio}
          checked={display === "ALL"}
        />
        <label htmlFor="all">All</label>
        <input
          type="radio"
          name="header"
          id="active"
          value="ACTIVE"
          onChange={onChangeRadio}
          checked={display === "ACTIVE"}
        />
        <label htmlFor="active">Active</label>
        <input
          type="radio"
          name="header"
          id="completed"
          value="COMPLETED"
          onChange={onChangeRadio}
          checked={display === "ACTIVE"}
        />
        <label htmlFor="completed">Completed</label>
      </div>
      <ul>
        {/* {todos.map((oneTodo, idx) => (
          <li key={idx} style={{ display: "flex" }}>
            <input type="checkbox" /> {oneTodo.name}
            <span style={{ paddingLeft: "10px" }} onClick={() => onDelete(idx)}>
              X
            </span>
          </li>
        ))} */}
        {display === "ALL" &&
          todos.map((oneTodo, idx) => (
            <li key={idx} style={{ display: "flex" }}>
              <input type="checkbox" /> {oneTodo.name}
              <span
                style={{ paddingLeft: "10px" }}
                onClick={() => onDelete(idx)}
              >
                X
              </span>
            </li>
          ))}
        {display === "ACTIVE" &&
          todos
            .filter((item) => !item.checked)
            .map((oneTodo, idx) => (
              <li key={idx} style={{ display: "flex" }}>
                <input type="checkbox" /> {oneTodo.name}
                <span
                  style={{ paddingLeft: "10px" }}
                  onClick={() => onDelete(idx)}
                >
                  X
                </span>
              </li>
            ))}
        {display === "COMPLETED" &&
          todos
            .filter((item) => item.checked)
            .map((oneTodo, idx) => (
              <li key={idx} style={{ display: "flex" }}>
                <input type="checkbox" /> {oneTodo.name}
                <span
                  style={{ paddingLeft: "10px" }}
                  onClick={() => onDelete(idx)}
                >
                  X
                </span>
              </li>
            ))}
      </ul>
      <input type="text" value={todo} onChange={onChange} />
      <button onClick={onClick}>Add</button>
    </div>
  );
}

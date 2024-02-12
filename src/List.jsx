import { useEffect, useState } from "react";

export default function List() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const onChange = (e) => {
    setTodo(e.target.value);
  };
  const onClick = () => {
    setTodos((prev) => [...prev, todo]);
    setTodo("");
  };
  const onDelete = (idx) => {
    setTodos((prev) => prev.splice(idx, 1));
  };
  return (
    <div>
      <div>
        <input type="radio" name="header" id="all" />
        <label htmlFor="all">All</label>
        <input type="radio" name="header" id="active" />
        <label htmlFor="active">Active</label>
        <input type="radio" name="header" id="completed" />
        <label htmlFor="completed">Completed</label>
      </div>
      <ul>
        {todos.map((todo, idx) => (
          <div style={{ display: "flex" }}>
            <li key={idx}>
              <input type="checkbox" /> {todo}
            </li>
            <span
              style={{ display: "flex", paddingLeft: "10px" }}
              onClick={() => onDelete({ idx })}
            >
              X
            </span>
          </div>
        ))}
      </ul>
      <input type="text" value={todo} onChange={onChange} />
      <button onClick={onClick}>Add</button>
    </div>
  );
}

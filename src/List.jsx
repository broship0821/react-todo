import { useEffect, useState } from "react";
import TodoHeader from "./components/TodoHeader";
/**
 * 컴포넌트화 해보기
 * 다크모드 지원
 * 로컬스토리지에 저장
 * @returns
 */
export default function List() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const [display, setDisplay] = useState("all");
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
  const onChangeCheckbox = (idx) => {
    setTodos((prev) =>
      prev.map((item, index) => {
        if (index === idx)
          return {
            ...item,
            checked: !item.checked,
          };
        return item;
      })
    );
  };
  return (
    <div>
      <TodoHeader display={display} setDisplay={setDisplay} />
      <ul>
        {(display === "all"
          ? todos
          : todos.filter((item) =>
              display === "completed" ? item.checked : !item.checked
            )
        ).map((oneTodo, idx) => (
          <li key={idx} style={{ display: "flex" }}>
            <input
              type="checkbox"
              checked={oneTodo.checked}
              onChange={() => onChangeCheckbox(idx)}
            />{" "}
            {oneTodo.name}
            <span style={{ paddingLeft: "10px" }} onClick={() => onDelete(idx)}>
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

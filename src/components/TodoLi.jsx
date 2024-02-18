import { useContext } from "react";
import { DarkModeContext } from "../context/DarkModeContext";

export default function TodoLi({ oneTodo, idx, setTodos }) {
  const { darkMode } = useContext(DarkModeContext);
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

  const onDelete = (idx) => {
    setTodos((prev) => prev.filter((item, index) => index !== idx));
  };

  return (
    <li style={{ display: "flex" }}>
      <input
        type="checkbox"
        checked={oneTodo.checked}
        onChange={() => onChangeCheckbox(idx)}
      />{" "}
      <p style={darkMode ? { backgroundColor: "black", color: "white" } : {}}>
        {oneTodo.name}
      </p>
      <span style={{ paddingLeft: "10px" }} onClick={() => onDelete(idx)}>
        X
      </span>
    </li>
  );
}

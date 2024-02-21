import { useEffect, useState } from "react";
import TodoHeader from "./components/TodoHeader";
import TodoLi from "./components/TodoLi";
import AddTodoBtn from "./components/AddTodoBtn";
import { DarkModeProvider } from "./context/DarkModeContext";
/**
 * 컴포넌트화 해보기
 * 다크모드 지원 -> DarkModeProvider 랑 context랑 같은곳에서 사용하면 안됨
 * 로컬스토리지에 저장
 * @returns
 */
export default function List() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState(
    localStorage.getItem("todos")
      ? JSON.parse(localStorage.getItem("todos"))
      : []
  );
  const [display, setDisplay] = useState("all");
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <DarkModeProvider>
      <TodoHeader display={display} setDisplay={setDisplay} />
      <ul>
        {(display === "all"
          ? todos
          : todos.filter((item) =>
              display === "completed" ? item.checked : !item.checked
            )
        ).map((oneTodo, idx) => (
          <TodoLi
            key={idx}
            oneTodo={oneTodo}
            idx={idx}
            todos={todos}
            setTodos={setTodos}
          />
        ))}
      </ul>
      <AddTodoBtn
        todo={todo}
        setTodo={setTodo}
        todos={todos}
        setTodos={setTodos}
      />
    </DarkModeProvider>
  );
}

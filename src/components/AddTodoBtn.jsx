export default function AddTodoBtn({ todo, setTodo, setTodos }) {
  const onChange = (e) => {
    setTodo(e.target.value);
  };
  const onClick = () => {
    setTodos((prev) => [...prev, { name: todo, checked: false }]);
    setTodo("");
  };
  return (
    <>
      <input type="text" value={todo} onChange={onChange} />
      <button onClick={onClick}>Add</button>
    </>
  );
}

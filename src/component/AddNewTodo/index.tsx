import React from "react";
import "./AddNewTodo.css";
import { useTodo } from "../../context/TodosContext";
import { nanoid } from "nanoid";

function AddNewTodo() {
  const { todos, setTodo, todo, setTodos } = useTodo()!;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setTodo(e.target.value);
  };

  const addTodo = (): void => {
    if (todo !== "") {
      debugger;
      setTodos([...todos, { id: nanoid(), name: todo, isDone: false }]);
    }

    setTodo("");
  };

  return (
    <div>
      <input className="inputText" value={todo} onChange={handleChange} />
      <br />
      <button className="custom-btn btn-6" onClick={addTodo}>
        <span>Add New Task</span>
      </button>
    </div>
  );
}

export default AddNewTodo;

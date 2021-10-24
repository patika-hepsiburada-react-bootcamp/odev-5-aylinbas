import { useEffect } from "react";
import { useTodo } from "../context/TodosContext";
import AddNewTodo from "./AddNewTodo";
import FilterButtonGroup from "./FilterButtonGroup";
import Header from "./Header";
import TodoList from "./TodoList";

export default function Container() {
  const { todos, filter, setFilteredTodos, filteredTodos } = useTodo()!;

  useEffect(() => {
    var fTodos;
    if (filter === "Active") {
      fTodos = filteredTodos.filter(function (obj) {
        debugger;
        return obj.isDone !== true;
      });
      setFilteredTodos([...fTodos]);
    } else if (filter === "Completed") {
      fTodos = filteredTodos.filter(function (obj) {
        return obj.isDone !== false;
      });
      setFilteredTodos([...fTodos]);
    }
  }, [filter]);

  useEffect(() => {
    setFilteredTodos([...todos]);
  }, [todos]);

  return (
    <div className="container">
      <div className="todoList">
        <div>
          <Header />
        </div>
        <TodoList />
        <br />
        <AddNewTodo />
      </div>
      <FilterButtonGroup />
    </div>
  );
}

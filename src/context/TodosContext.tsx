import { createContext, useState, useContext, FC } from "react";
import { nanoid } from "nanoid";
import { ITodos, IContext } from "./types";

export const TodosContext = createContext<IContext | null>(null);

const TodoProvider: FC = ({ children }) => {
  const [todos, setTodos] = useState<ITodos[]>([
    { id: nanoid(), name: "deneme", isDone: true },
    { id: nanoid(), name: "deneme2", isDone: false },
  ]);

  const [filteredTodos, setFilteredTodos] = useState<ITodos[]>([
    { id: nanoid(), name: "deneme", isDone: true },
    { id: nanoid(), name: "deneme2", isDone: false },
  ]);

  const addTodo = (todo: ITodos) => {
    setTodos([...todos, todo]);
  };

  const [todo, setTodo] = useState<string>("");
  const [filter, setFilter] = useState<string>("All");
  const [checked, setChecked] = useState(false);

  return (
    <TodosContext.Provider
      value={{
        todos,
        addTodo,
        filteredTodos,
        setFilteredTodos,
        todo,
        setTodo,
        filter,
        setFilter,
        checked,
        setChecked,
        setTodos,
      }}
    >
      {children}
    </TodosContext.Provider>
  );
};

export const useTodo = () => useContext(TodosContext);

export default TodoProvider;

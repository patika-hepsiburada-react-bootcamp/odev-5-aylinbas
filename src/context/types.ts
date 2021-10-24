export interface ITodos {
  id: string;
  name: string;
  isDone: boolean;
}

export interface IContext {
  todos: ITodos[];
  addTodo: (todo: ITodos) => void;
  setTodos: (todos: ITodos[]) => void;
  filteredTodos: ITodos[];
  setFilteredTodos: (todos: ITodos[]) => void;
  todo: string;
  setTodo: (todo: string) => void;
  filter: string;
  setFilter: (filter: string) => void;
  checked: boolean;
  setChecked: (isDone: boolean) => void;
}

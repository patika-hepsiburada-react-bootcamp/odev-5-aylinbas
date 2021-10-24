import "./FilterButtonGroup.css";
import { useTodo } from "../../context/TodosContext";

function FilterButtonGroup() {
  const { todos, filter, setFilter, setFilteredTodos } = useTodo()!;
  const changeFilter = (myFilter: string): void => {
    debugger;
    if (myFilter !== filter) {
      setFilter(myFilter);
      setFilteredTodos([...todos]);
    }
  };
  return (
    <div className="btn-group">
      <button onClick={() => changeFilter("All")}>All</button>
      <button onClick={() => changeFilter("Active")}>Active</button>
      <button onClick={() => changeFilter("Completed")}>Completed</button>
    </div>
  );
}

export default FilterButtonGroup;

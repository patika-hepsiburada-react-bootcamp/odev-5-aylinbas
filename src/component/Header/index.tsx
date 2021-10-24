import { useTodo } from "../../context/TodosContext";
import "./Header.css";

function Header() {
  const { filter } = useTodo()!;
  return (
    <div>
      <h1> {filter} Todos</h1>
    </div>
  );
}

export default Header;

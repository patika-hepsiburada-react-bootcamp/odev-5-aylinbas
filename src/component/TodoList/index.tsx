import { useTodo } from "../../context/TodosContext";
import { ITodos } from "../../context/types";
import "./TodoList.css";

function TodoList() {
  const { todos, filteredTodos, setChecked, checked } = useTodo()!;

  const checkTodo = (item: ITodos): void => {
    todos.map((myTodo: ITodos) => {
      if (myTodo.id === item.id) {
        setChecked(!checked);
        if (myTodo.isDone) {
          myTodo.isDone = false;
        } else {
          myTodo.isDone = true;
        }
      }
    });
  };
  return (
    <div>
      {filteredTodos.map((item, i) => (
        <div key={item.id + "div"} className="todosContainer">
          <input
            key={item.id + "chckbox"}
            className="chckbox"
            type="checkbox"
            checked={item.isDone}
            onChange={() => checkTodo(item)}
          />
          <p
            key={item.id + "name"}
            className={` todoItem ${item.isDone ? "passive" : "active"} `}
          >
            {item.name}
          </p>
        </div>
      ))}
    </div>
  );
}

export default TodoList;

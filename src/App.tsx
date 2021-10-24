import React from "react";
import "./App.css";
import Container from "./component/Container";

import TodoProvider from "./context/TodosContext";

function App() {
  return (
    <div className="App">
      <TodoProvider>
        <Container />
      </TodoProvider>
    </div>
  );
}

export default App;

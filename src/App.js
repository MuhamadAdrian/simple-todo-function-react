import { useState } from "react";
import Todo from "./components/Todo";

function App() {
  const [todos, setTodos] = useState([
    { title: "Learn React" },
    { title: "Learn Vue" },
    { title: "Learn Angular" },
  ]);

  const [todo, setTodo] = useState(null);

  function removeFromList(index) {
    let copyTodos = [...todos];

    copyTodos.splice(index, 1);
    setTodos(copyTodos);
  }

  function addTodo(event) {
    if (event.code === "Enter") {
      setTodos([...todos, { title: todo }]);
    }
  }

  return (
    <div>
      <h1>My Todos</h1>
      <input
        type="text"
        onChange={(event) => {
          setTodo(event.target.value);
        }}
        onKeyDown={addTodo}
      />
      {todos.map((todo, index) => (
        <Todo
          key={index}
          index={index}
          title={todo.title}
          removeFromList={removeFromList}
        />
      ))}
    </div>
  );
}

export default App;

import { useEffect, useState } from "react";
import { TodoProvider } from "./contexts";

function App() {
  const [todos, setTodos] = useState<TodoType[]>([]);

  const addTodo = (todo: TodoType) => {
    setTodos((prev) => [todo, ...prev]);
  };

  const deleteTodo = (id: TodoType["id"]) => {
    setTodos((prev) => prev.filter((prevTodo) => prevTodo.id !== id));
  };

  const updateTodo = (id: TodoType["id"], msg: TodoType["todo"]) => {
    setTodos((prev) =>
      prev.map((prevTodo) =>
        prevTodo.id === id ? { id, todo: msg, isCompleted: false } : prevTodo
      )
    );
  };

  const toggleTodoComplete = (id: TodoType["id"]) => {
    setTodos((prev) =>
      prev.map((prevTodo) =>
        prevTodo.id === id
          ? { ...prevTodo, isCompleted: !prevTodo.isCompleted }
          : prevTodo
      )
    );
  };

  useEffect(() => {
    const todos: TodoType[] = JSON.parse(localStorage.getItem("todos")!);
    if (todos && todos.length > 0) setTodos(todos);
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <TodoProvider
      value={{ todos, addTodo, deleteTodo, updateTodo, toggleTodoComplete }}>
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">
            Manage Your Todos
          </h1>
          <div className="mb-4">{/* Todo form goes here */}</div>
          <div className="flex flex-wrap gap-y-3">
            {/*Loop and Add TodoItem here */}
          </div>
        </div>
      </div>
    </TodoProvider>
  );
}

export default App;

import { createContext, useContext } from "react";

const TodoContext = createContext<TodoContextType>({
  todos: [],
  addTodo(todo) {},
  deleteTodo(id) {},
  updateTodo(id, msg) {},
  toggleTodoComplete(id) {},
});

export const TodoProvider = TodoContext.Provider;

export function useTodo() {
  return useContext(TodoContext);
}

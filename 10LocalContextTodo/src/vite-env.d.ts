/// <reference types="vite/client" />
type TodoType = {
  id: number;
  todo: string;
  isCompleted: boolean;
};

interface TodoContextType {
  todos: TodoType[];
  addTodo: (todo: TodoType) => void;
  deleteTodo: (id: TodoType["id"]) => void;
  updateTodo: (id: TodoType["id"], msg: TodoType["todo"]) => void;
  toggleTodoComplete: (id: TodoType["id"]) => void;
}

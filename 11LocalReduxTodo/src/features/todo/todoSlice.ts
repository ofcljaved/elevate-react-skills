import { PayloadAction, createSlice, nanoid } from "@reduxjs/toolkit";

const initialState: { todos: TodoType[] } = {
  todos: JSON.parse(localStorage.getItem("todos")!) || [],
};

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<TodoType["msg"]>) => {
      const todo: TodoType = {
        id: nanoid(),
        msg: action.payload,
        isCompleted: false,
      };
      state.todos.push(todo);
    },

    removeTodo: (state, action: PayloadAction<TodoType["id"]>) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },

    updateTodo: (
      state,
      action: PayloadAction<{ id: TodoType["id"]; todoMsg: TodoType["msg"] }>
    ) => {
      const { id, todoMsg } = action.payload;
      const todo = state.todos.find((todo) => todo.id === id);
      if (todo) {
        todo.msg = todoMsg;
      }
    },

    toggleTodoComplete: (state, action: PayloadAction<TodoType["id"]>) => {
      const todo = state.todos.find((todo) => todo.id === action.payload);
      if (todo) todo.isCompleted = !todo.isCompleted;
    },
  },
});

export const { addTodo, removeTodo, updateTodo, toggleTodoComplete } =
  todoSlice.actions;

export default todoSlice.reducer;

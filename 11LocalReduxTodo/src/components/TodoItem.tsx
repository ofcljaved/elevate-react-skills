import { ChangeEventHandler, MouseEventHandler, useState } from "react";
import {
  removeTodo,
  toggleTodoComplete,
  updateTodo,
} from "../features/todo/todoSlice";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../app/store";

function TodoItem({ todo }: { todo: TodoType }) {
  const dispatch = useDispatch<AppDispatch>();

  const [todoMsg, setTodoMsg] = useState<TodoType["msg"]>(todo.msg);
  const [isTodoEditable, setIsTodoEditable] = useState<boolean>(false);

  const handleCheckboxChange: ChangeEventHandler<HTMLInputElement> = () => {
    dispatch(toggleTodoComplete(todo.id));
  };
  const editTodo = (): void => {
    dispatch(updateTodo({ id: todo.id, todoMsg }));
    setIsTodoEditable((prev) => !prev);
  };

  const handleDeleteClick: MouseEventHandler<HTMLButtonElement> = () => {
    dispatch(removeTodo(todo.id));
  };

  return (
    <div
      className={`flex border border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300  text-black ${
        todo.isCompleted ? "bg-[#c6e9a7]" : "bg-[#ccbed7]"
      }`}>
      <input
        type="checkbox"
        className="cursor-pointer"
        checked={todo.isCompleted}
        onChange={handleCheckboxChange}
        disabled={isTodoEditable}
      />
      <input
        type="text"
        className={`border outline-none w-full bg-transparent rounded-lg ${
          isTodoEditable ? "border-black/10 px-2" : "border-transparent"
        } ${todo.isCompleted ? "line-through" : ""}`}
        value={todoMsg}
        onChange={(e) => setTodoMsg(e.target.value)}
        readOnly={!isTodoEditable}
      />
      {/* Edit, Save Button */}
      <button
        className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50"
        onClick={() => {
          if (todo.isCompleted) return;

          if (isTodoEditable) {
            editTodo();
          } else setIsTodoEditable((prev) => !prev);
        }}
        disabled={todo.isCompleted}>
        {isTodoEditable ? "📁" : "✏️"}
      </button>
      {/* Delete Todo Button */}
      <button
        className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0"
        onClick={handleDeleteClick}>
        ❌
      </button>
    </div>
  );
}

export default TodoItem;

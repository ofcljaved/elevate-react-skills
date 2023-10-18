import { FormEventHandler, useState } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../app/store";
import { addTodo } from "../features/todo/todoSlice";

function TodoForm() {
  const dispatch = useDispatch<AppDispatch>();
  const [todoInput, setTodoInput] = useState<TodoType["msg"]>("");

  const handleSubmit: FormEventHandler<HTMLFormElement> = (evt) => {
    evt.preventDefault();
    dispatch(addTodo(todoInput));
    setTodoInput("");
  };
  return (
    <form className="flex" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Write Todo..."
        className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
        value={todoInput}
        onChange={(evt) => setTodoInput(evt.target.value)}
      />
      <button
        type="submit"
        className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0">
        Add
      </button>
    </form>
  );
}

export default TodoForm;

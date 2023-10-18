import { FormEventHandler, useState } from "react";
import { useTodo } from "../contexts";

function TodoForm() {
  const { addTodo } = useTodo();
  const [todoInput, setTodoInput] = useState<TodoType["todo"]>("");

  const handleSubmit: FormEventHandler<HTMLFormElement> = (evt) => {
    evt.preventDefault();
    addTodo({ id: Date.now(), todo: todoInput, isCompleted: false });
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

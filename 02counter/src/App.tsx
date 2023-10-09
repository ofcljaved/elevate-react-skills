import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState<number>(0);

  const addValue = (): void => {
    if (count >= 20) return;
    setCount((prev) => prev + 1);
  };

  const deleteValue = (): void => {
    if (count <= 0) return;
    setCount((prev) => prev - 1);
  };

  return (
    <>
      <h1>Counter</h1>
      <p>value: {count}</p>
      <button type="button" onClick={addValue}>
        Add
      </button>
      <button type="button" onClick={deleteValue}>
        Delete
      </button>
    </>
  );
}

export default App;

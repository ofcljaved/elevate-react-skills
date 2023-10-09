# React + TypeScript | Counter

This project showcases the fundamental use of hooks in React, demonstrating why they are essential. While JavaScript allows for easy variable replacement and mutation, updating the user interface (UI) across the entire page when a variable changes is a task best handled by React, which utilizes state management.

In this project, TypeScript is employed to explicitly define that the state should be of type `number`:

```typescript
const [count, setCount] = useState<number>(0);
```

Additionally, two functions, `addValue` and `deleteValue`, are implemented to modify the state. Since these functions do not return a value, their return type is specified as `void`:

```typescript
const addValue = (): void => {
  /* ...code */
};

const deleteValue = (): void => {
  /* ...code */
};
```

This project serves as a practical illustration of how React and TypeScript can be used together to manage state and build dynamic UI components.

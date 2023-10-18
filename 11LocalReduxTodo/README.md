# React + TypeScript | TODO with RTK

This is a todo app that uses React, TypeScript, and Redux Toolkit (RTK). It is similar to the app in [project 10](../10LocalContextTodo/), but it uses RTK to optimize the use of the store and have a better data flow.

When using Redux, we need to configure a global store that contains all the slices or reducers inside of it.

```ts
const store = configureStore({
  reducer: todoReducer,
});
```

To use type safety, we need to export the types of the useSelector hook and the useDispatch hook.

```ts
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
```

RTK provides a better way to create reducers using createSlice, which has reducer functions inside of it and has the initial state of the store.

```ts
const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    ....reducers
  },
});

export const { addTodo, removeTodo, updateTodo, toggleTodoComplete } =
  todoSlice.actions;

export default todoSlice.reducer;
```

From the slice, we export all the reducer functions that we are going to call inside the useDispatch of react-redux. The initial state can get the data from the database or local storage.

```ts
const initialState: { todos: TodoType[] } = {
  todos: JSON.parse(localStorage.getItem("todos")!) || [],
};
```

Instead of calling the context API, we use useSelector to access the state and useDispatch to dispatch the reducer functions.

```ts
const dispatch = useDispatch<AppDispatch>();
const todos = useSelector((state: RootState) => state.todos);
```

Just like the context API, we need to wrap our app inside the Provider of Redux and pass the store as a prop.

```ts
<Provider store={store}>
  <App />
</Provider>
```

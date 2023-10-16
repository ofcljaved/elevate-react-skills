# React + TypeScript | Context API

In order to eliminate prop drilling and make application state accessible throughout the entire app, it is essential to establish a global store or context. The React Context API is a powerful tool for achieving this goal. In this project, a "usercontext" has been created to hold user information, making it available to all components.

```ts
const UserContext = createContext<UserContextType>({
  user: null,
  setUser: () => {},
});
```

This code snippet defines the "UserContext," which is a context that accepts a user and a function for setting that user. The actual implementation of this function is located inside the `UserContextProvider`.

```ts
const UserContextProvider = ({ children }: UserContextProviderProps) => {
  const [user, setUser] = useState<UserType | null>(null);
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
```

The `UserContextProvider` component is responsible for managing the user's state. It initializes the user state and provides the `setUser` function, which allows for updates to the user information. By wrapping your entire application in the `UserContextProvider`, you ensure that all child components can access the user context.

```ts
<UserContextProvider>
  <Login />
  <Profile />
</UserContextProvider>
```

In the code above, the entire application, consisting of the `Login` and `Profile` components, is wrapped in the `UserContextProvider`. This arrangement ensures that these components have access to the user context, making user-related information available as needed.

import { Login, Profile } from "./components";
import UserContextProvider from "./context/UserContextProvider";
import "./App.css";
const App = () => {
  return (
    <UserContextProvider>
      <Login />
      <Profile />
    </UserContextProvider>
  );
};

export default App;

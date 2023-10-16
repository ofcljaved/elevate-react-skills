import { createContext } from "react";

const UserContext = createContext<UserContextType>({
  user: null,
  setUser: () => {},
});

export default UserContext;

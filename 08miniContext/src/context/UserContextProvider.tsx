import { useState } from "react";
import UserContext from "./UserContext";

const UserContextProvider = ({ children }: UserContextProviderProps) => {
  const [user, setUser] = useState<UserType | null>(null);
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;

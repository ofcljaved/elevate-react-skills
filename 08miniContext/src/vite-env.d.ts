/// <reference types="vite/client" />

interface UserContextProviderProps {
  children: ReactNode;
}

type UserType = {
  username: string;
  password: string;
};

interface UserContextType {
  user: UserType | null;
  setUser: (user: UserType | null) => void;
}

/// <reference types="vite/client" />
type EnvType = {
  [key: string]: string;
};

interface LoginUserAccount {
  email: string;
  password: string;
}

interface CreateUserAccount extends LoginUserAccount {
  name: string;
}

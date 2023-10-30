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

interface UpdatePost {
  title: string;
  content: string;
  featuredImg: string;
  status: string;
}

interface CreatePost extends UpdatePost {
  slug: string;
  userId: string;
}

type AuthState = {
  status: boolean;
  userData: Models.Session | null;
};

type NavItem = {
  name: string;
  url: string;
  active: boolean;
};

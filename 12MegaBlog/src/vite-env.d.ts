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

interface ButtonProps {
  children: PropsWithChildren;
  type?: string;
  bgColor?: string;
  textColor?: string;
  className?: string;
  [x: string]: any;
}

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  type?: string;
  className?: string;
  [x: string]: any;
}

interface SelectProps extends InputHTMLAttributes<HTMLSelectElement> {
  label?: string;
  options?: string[];
  className?: string;
  [x: string]: any;
}

interface CardProps {
  $id: string;
  title: string;
  featuredImage: string;
}

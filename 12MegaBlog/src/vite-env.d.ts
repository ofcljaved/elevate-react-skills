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
  featuredImg: string | undefined;
  status: string;
}

interface CreatePost extends UpdatePost {
  slug: string;
  userId: string;
}

interface PostForm extends Omit<UpdatePost, 'featuredImg'> {
  image: FileList;
  slug: string;
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

interface InputProps extends HTMLProps<HTMLInputElement> {
  label?: string;
  type?: string;
  className?: string;
  [x: string]: any;
}

interface SelectProps extends HTMLProps<HTMLSelectElement> {
  label?: string;
  options?: string[];
  className?: string;
  [x: string]: any;
}

interface CardProps {
  title: string;
  featuredImage: string;
}

interface ProtectedLayoutProps {
  children: PropsWithChildren;
  authentication?: boolean;
}

interface RTEProps {
  name?: string;
  control: Control<FieldValues>;
  label?: string;
  defaultValue?: string;
}

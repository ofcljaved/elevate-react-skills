/// <reference types="vite/client" />

type ReactElementProps = {
  href: string;
  target?: string;
  [key: string]: any;
};

type ReactElement = {
  type: string;
  props: ReactElementProps;
  children: string;
};

# React + TypeScript | React-Router-Dom

This project showcases the integration of React, TypeScript, and React Router Dom. It is designed as a multipage project, with routes defined in the `RouterProvider`. These routes facilitate navigation through the application and require only the route objects as demonstrated below:

```ts
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "", element: <Home /> },
      { path: "about", element: <About /> },
      { path: "contact", element: <Contact /> },
      { path: "user/:userid", element: <User /> },
      { path: "github", loader: githubInfoLoader, element: <Github /> },
    ],
  },
]);
```

Each route object specifies the path of the page and the component to be rendered. The components themselves can be found within the 'components' folder of the project.

To ensure consistency throughout the application, the header and footer components remain the same. This is achieved by employing the 'Layout' component, a feature of React Router Dom:

```ts
import { Outlet } from "react-router-dom";
import { Header, Footer } from "./components";

const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
```

The 'Outlet' element is responsible for rendering the components specified in the route objects of the 'RouterProvider'.

```ts
{ path: "github", loader: githubInfoLoader, element: <Github /> },
```

The 'github' path within the route object includes a loader, which is used to optimize API calls. Inside the 'githubInfoLoader' function, an API call is made, as shown below:

```ts
const githubInfoLoader = async (): Promise<GithubData> => {
  const response = await fetch("https://api.github.com/users/ofcljaved");
  return response.json();
};
```

The data retrieved from this API call is passed on to the 'Github' component, where it can be accessed using the `const data = useLoaderData() as GithubData;` method and used as needed within the component.

We are excited about the evolution of React Router and the incorporation of features from Next.js into this project.

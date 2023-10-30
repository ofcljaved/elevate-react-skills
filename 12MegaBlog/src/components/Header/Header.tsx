import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const authStatus = useSelector<RootState>(
    (state) => state.auth.status
  ) as AuthState["status"];

  const navItems: NavItem[] = [
    {
      name: "Home",
      url: "/",
      active: true,
    },
    {
      name: "Login",
      url: "/login",
      active: !authStatus,
    },
    {
      name: "Signup",
      url: "/signup",
      active: !authStatus,
    },
    {
      name: "All Posts",
      url: "/all-posts",
      active: authStatus,
    },
    {
      name: "Add Post",
      url: "/add-post",
      active: authStatus,
    },
  ];

  const navigate = useNavigate();

  return <div>Header</div>;
};

export default Header;

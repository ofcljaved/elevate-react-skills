import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { Link, useNavigate } from "react-router-dom";
import { Container, Logo, LogoutBtn } from "..";

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

  return (
    <header className="py-3 shadow bg-gray-500">
      <Container>
        <nav className="flex">
          <div className="mr-4">
            <Link to="/">
              <Logo width="70px" />
            </Link>
            <ul className="flex ml-auto">
              {navItems.map(
                (item) =>
                  item.active && (
                    <li key={item.name}>
                      <button
                        className="inline-bock px-6 py-2 duration-200 hover:bg-blue-100 rounded-full"
                        onClick={() => navigate(item.url)}>
                        {item.name}
                      </button>
                    </li>
                  )
              )}
              {authStatus && (
                <li>
                  <LogoutBtn />
                </li>
              )}
            </ul>
          </div>
        </nav>
      </Container>
    </header>
  );
};

export default Header;

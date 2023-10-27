import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import authService from "./appwrite/auth";
import { login, logout } from "./store/authSlice";
import { Footer, Header } from "./components";

function App() {
  const [loading, setLoading] = useState<boolean>(true);
  const dispatch = useDispatch();

  useEffect(() => {
    authService
      .isLoggedIn()
      .then((user) => {
        console.log(user);
        user ? dispatch(login(user)) : dispatch(logout());
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => setLoading(false));
  }, []);

  return !loading ? (
    <div className=" min-h-screen bg-gray-400 grid grid-rows-[max-content_auto_max-content]">
      <Header />
      <main>
        <h1 className="text-center text-4xl bg-gray-400 text-gray-50">Hello</h1>
      </main>
      <Footer />
    </div>
  ) : null;
}

export default App;

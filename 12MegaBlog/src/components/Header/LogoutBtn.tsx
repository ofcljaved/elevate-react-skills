import { useDispatch } from "react-redux";
import authService from "../../appwrite/auth";
import { logout } from "../../store/authSlice";

const LogoutBtn = () => {
  const dispatch = useDispatch();

  const logoutHandler = async (): Promise<void> => {
    try {
      await authService.logout();
      dispatch(logout);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <button
      className="inline-bock px-6 py-2 duration-200 hover:bg-blue-100 rounded-full"
      onClick={logoutHandler}>
      LogoutBtn
    </button>
  );
};

export default LogoutBtn;

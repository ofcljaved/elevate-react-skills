import { useContext } from "react";
import UserContext from "../context/UserContext";

const Profile = () => {
  const { user } = useContext(UserContext);
  return <h1>Welcome {user?.username}</h1>;
};

export default Profile;

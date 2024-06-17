import { signOut } from "firebase/auth";
import { auth } from "../firebase-config";
import { useNavigate } from "react-router-dom";
export const Dashboard = () => {
  const navigate = useNavigate();
  const Logout = async () => {
    await signOut(auth);
    navigate("/login");
  };

  return (
    <>
      <h1>Deshboard</h1>
      <button
        onClick={Logout}
        className="bg-yellow-500 hover:bg-yellow-600 text-white rounded px-4 py-1"
      >
        sign out
      </button>
    </>
  );
};

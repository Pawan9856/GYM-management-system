import React from "react";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase-config";

export const UserDashBoard = () => {
  const navigate = useNavigate();
  const Logout = async () => {
    await signOut(auth);
    navigate("/login");
  };
  return (
    <>
      <div>UserDashBoard</div>
      <button
        onClick={Logout}
        className="bg-yellow-500 hover:bg-yellow-600 text-white rounded px-4 py-1"
      >
        sign out
      </button>
    </>
  );
};

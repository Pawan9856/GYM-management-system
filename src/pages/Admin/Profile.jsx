import React from "react";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth,db } from "../../firebase-config";

const Profile = () => {
  const navigate = useNavigate();
  const Logout = async () => {
    await signOut(auth);
    navigate("/login");
  };
  return (
    <>
      <div>Profile</div>
      <button
        onClick={Logout}
        className="bg-yellow-500 hover:bg-yellow-600 text-white rounded px-4 py-1"
      >
        sign out
      </button>
    </>
  );
};

export default Profile;

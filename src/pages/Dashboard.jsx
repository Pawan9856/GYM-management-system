import { signOut } from "firebase/auth";
import { auth, db } from "../firebase-config";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth/web-extension";
import { collection, getDocs, query, where } from "firebase/firestore";
export const Dashboard = () => {
  const navigate = useNavigate();
  const [currUser, setUser] = useState(null);
  const Logout = async () => {
    await signOut(auth);
    navigate("/login");
  };
  useEffect(() => {
    const getData = () =>
      onAuthStateChanged(auth, async (user) => {
        console.log(user.email);
        const usersRef = collection(db, "Users");
        const q = query(usersRef, where("email", "==", user.email));
        const querySnapshot = await getDocs(q);
        setUser(querySnapshot.docs[0].data());
      });
    getData();
    console.log(currUser);
  }, []);
  
  useEffect(() => {
    if (currUser?.role == "user") navigate("/user-dashboard");
    if (currUser?.role == "admin") navigate("/admin-dashboard");
  }, [currUser]);

  return (
    <>
      <h1>Dashboard</h1>
      <button
        onClick={Logout}
        className="bg-yellow-500 hover:bg-yellow-600 text-white rounded px-4 py-1"
      >
        sign out
      </button>
    </>
  );
};

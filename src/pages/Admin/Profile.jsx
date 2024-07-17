import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { signOut, onAuthStateChanged } from "firebase/auth";
import { getDocs, query, collection, where } from "firebase/firestore";
import { auth, db } from "../../firebase-config";
import InfoCard from "../../components/Admin/InfoCard";

const Profile = () => {
  const navigate = useNavigate();
  const currEmail = auth.currentUser.email;
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    getUsers(currEmail);
  }, []);

  const getUsers = async (email) => {
    try {
      const q = query(collection(db, "Users"), where("email", "==", email));
      const querySnapshot = await getDocs(q);
      const data = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setUserData(data[0]);
    } catch (err) {
      console.log("err:", err.message);
    }
  };
  console.log("user", userData);
  const Logout = async () => {
    await signOut(auth);
    navigate("/login");
  };
  return (
    <>
      <div className="w-full h-screen flex justify-center">
        <div className="w-2/3 h-2/3 bg-slate-100 shadow-lg rounded px-5 py-3">
          <h1 className="text-2xl font-bold">Profile</h1>
          {userData &&
            Object.entries(userData).map(
              ([key, value]) =>
                key != "id" && <InfoCard title={key} info={value} />
            )}
          <button onClick={Logout}>Sign out</button>
        </div>
      </div>
    </>
  );
};

export default Profile;

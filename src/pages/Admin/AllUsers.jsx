import { useState, useEffect } from "react";
import { getDocs, collection } from "firebase/firestore";
import { db } from "../../firebase-config";
import UserCard from "../../components/UserCard";

const AllUsers = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "Users"));
        const allUsers = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setUsers(allUsers);
        // console.log(allUsers);
      } catch (err) {
        console.log(err.message);
      }
    };
    getUsers();
  }, []);


  return (
    <>
    
      <div className="grid grid-cols-3">
        {users.map((user) => {
          return <UserCard user={user} key={user.id} />;
        })}
      </div>
    </>
  );
};

export default AllUsers;

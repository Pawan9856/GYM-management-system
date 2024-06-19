import React from "react";

const UserCard = ({user}) => {
  return (
    <>
      <div  className="bg-slate-100 border rounded m-2 p-3 w-60 ">
        <ul>
          <li>
            {user.firstName} {user.lastName}
          </li>
          <li>{user.email}</li>
          <li>{user.phoneNo}</li>
          <div className="flex justify-between ">
            <button className="bg-green-500 text-white hover:bg-green-600 px-3 py-1 rounded my-3">
              Make Member
            </button>
            <button className="bg-red-500 text-white hover:bg-red-600 px-3 py-1 rounded my-3">
              delete
            </button>
          </div>
        </ul>
      </div>
    </>
  );
};

export default UserCard;

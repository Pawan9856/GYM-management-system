import { useState } from "react";

const Info = ({ userData, active }) => {
  return (
    <>
      <div className="mb-3 bg-slate-100 rounded px-3 py-2">
        <span className="text-gray-600 block">Name:</span>
        <span className="block text-lg">
          {userData?.firstName} {userData?.lastName}
        </span>
      </div>
      <div className="mb-3 bg-slate-100 rounded px-3 py-2">
        <span className="text-gray-600 block">Email:</span>
        <span className="block text-lg">{userData?.email}</span>
      </div>
      <div className="mb-3 bg-slate-100 rounded px-3 py-2">
        <span className="text-gray-600 block">Phone Number:</span>
        <span className="block text-lg">{userData?.phoneNo}</span>
        <span className="block  text-red-600">
          {!userData.phoneNo ? "~ Not Available" : null}
        </span>
      </div>
      <div className="mb-3 bg-slate-100 rounded px-3 py-2">
        <span className="text-gray-600 block">Address:</span>
        <span className="block text-lg">{userData?.address}</span>
        <span className="block text-red-600">
          {!userData.address ? "~ Not Available" : null}
        </span>
      </div>
      <div className="mt-5">
        <button
          className="bg-transparent border-2 border-blue-500 px-8 py-2 rounded-md text-blue-500 hover:border-blue-600 hover:text-blue-600 text-sm"
          onClick={active}
        >
          Edit Profile
        </button>
      </div>
    </>
  );
};

export default Info;

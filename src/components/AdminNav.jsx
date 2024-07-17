import React from "react";
import { useState } from "react";

const Navbar = ({ active, setActive }) => {
  return (
    <div className="flex justify-center mb-3">
      <nav className="grid grid-cols-6 bg-green-100 px-2 w-full rounded-lg">
        <ul className="col-start-1 col-end-5 flex space-x-4">
          <li className=" px-4 py-2">
            <a
              href="#"
              onClick={() => setActive("allUsers")}
              className={` ${
                active === "allUsers" ? "border-b-2 border-black" : ""
              } py-2 px-3 hover:bg-green-200`}
            >
              All Users
            </a>
          </li>
          <li className=" px-4 py-2">
            <a
              href="#"
              onClick={() => setActive("announcements")}
              className={` ${
                active === "announcements" ? "border-b-2 border-black" : ""
              } py-2 px-3 hover:bg-green-200`}
            >
              Announcements
            </a>
          </li>
          <li className=" px-4 py-2">
            <a
              href="#"
              onClick={() => setActive("managePackage")}
              className={` ${
                active === "managePackage" ? "border-b-2 border-black" : ""
              } py-2 px-3 hover:bg-green-200`}
            >
              Manage Package
            </a>
          </li>
          <li className=" px-4 py-2">
            <a
              href="#"
              onClick={() => setActive("createBills")}
              className={` ${
                active === "createBills" ? "border-b-2 border-black" : ""
              } py-2 px-3 hover:bg-green-200`}
            >
              Create Bills
            </a>
          </li>
        </ul>
        <div className="col-end-7 flex justify-center">
          <button onClick={() => setActive("profile")} className="">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-person-circle"
              viewBox="0 0 16 16"
              className="w-6 h-6"
            >
              <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
              <path
                fill-rule="evenodd"
                d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"
              />
            </svg>
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

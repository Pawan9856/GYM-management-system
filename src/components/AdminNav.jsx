import { useState } from "react";
import Profile from "../assets/Profile.svg";
import { IoMdMenu } from "react-icons/io";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { Button } from "@/components/ui/button";
import { FaUserCircle } from "react-icons/fa";

const Navbar = ({ active, setActive }) => {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };
  return (
    <div className="flex justify-center mb-3 ">
      <nav className="grid grid-cols-6 bg-green-100 px-2 w-full rounded-lg py-2 lg:py-0">
        <ul className="hidden col-start-1 col-end-5 lg:flex space-x-4">
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
              onClick={() => setActive("bills")}
              className={` ${
                active === "bills" ? "border-b-2 border-black" : ""
              } py-2 px-3 hover:bg-green-200`}
            >
              Bills
            </a>
          </li>
        </ul>
        <div className="col-start-1 lg:hidden flex justify-start items-center px-2">
          <Sheet>
            <SheetTrigger>
              <IoMdMenu className="text-2xl " />
            </SheetTrigger>
            <SheetContent side="left" className="bg-green-100/90">
              <SheetHeader>
                <SheetTitle className="mb-5 pl-3">MENU</SheetTitle>
                <SheetDescription>
                  <SheetClose asChild>
                    <ul className="flex flex-col gap-5 text-lg ">
                      <li
                        className="hover:bg-green-300 rounded-lg cursor-pointer p-3"
                        onClick={() => setActive("allUsers")}
                      >
                        All Users
                      </li>
                      <li
                        className="hover:bg-green-300 rounded-lg cursor-pointer p-3"
                        onClick={() => setActive("announcements")}
                      >
                        Announcements
                      </li>
                      <li
                        className="hover:bg-green-300 rounded-lg cursor-pointer p-3"
                        onClick={() => setActive("managePackage")}
                      >
                        Manage Package
                      </li>
                      <li
                        className="hover:bg-green-300 rounded-lg cursor-pointer p-3"
                        onClick={() => setActive("bills")}
                      >
                        Bills
                      </li>
                    </ul>
                  </SheetClose>
                </SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </div>
        <div className="col-end-7 flex justify-center">
          <button onClick={() => setActive("profile")} className="">
            <FaUserCircle
              className={`text-gray-600 text-3xl hover:text-black transition-all duration-300 ${
                active === "profile" ? "text-black" : ""
              }`}
            />
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

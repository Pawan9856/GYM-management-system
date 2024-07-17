import { useState } from "react";
import Navbar from "../../components/AdminNav";
import CreateBills from "./CreateBills";
import AllUsers from "./AllUsers";
import Announcements from "./Announcements";
import ManagePackage from "./ManagePackage";
import Profile from "./Profile";

export const AdminDashBoard = () => {
  const [active, setActive] = useState("allUsers");

  return (
    <>
      <div className="bg-gradient-to-r from-green-300 to-green-200 w-full min-h-screen">
        <Navbar setActive={setActive} active={active} />
        {active === "allUsers" && <AllUsers />}
        {active === "announcements" && <Announcements />}
        {active === "createBills" && <CreateBills />}
        {active === "managePackage" && <ManagePackage />}
        {active === "profile" && <Profile />}
      </div>
    </>
  );
};

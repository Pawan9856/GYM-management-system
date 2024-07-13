import { useState } from "react";
import Navbar from "../../components/AdminNav";
import CreateBills from "./CreateBills";
import AllUsers from "./AllUsers";
import SendMessage from "./SendMessage";
import ManagePackage from "./ManagePackage";
import Profile from "./Profile";

export const AdminDashBoard = () => {
  const [active, setActive] = useState("allUsers");

  return (
    <>
      <div className="bg-gradient-to-r from-green-300 to-blue-400 w-full min-h-screen">
        <Navbar setActive={setActive} active={active} />
        {active === "allUsers" && <AllUsers />}
        {active === "sendMessages" && <SendMessage />}
        {active === "createBills" && <CreateBills />}
        {active === "managePackage" && <ManagePackage />}
        {active === "profile" && <Profile />}
      </div>
    </>
  );
};

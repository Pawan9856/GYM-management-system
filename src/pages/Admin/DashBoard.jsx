import { useState } from "react";
import Navbar from "../../components/AdminNav";
import CreateBills from "./CreateBills";
import AllUsers from "./AllUsers";
import SendMessage from "./SendMessage";
import ManagePackage from "./ManagePackage";

export const DashBoard = () => {
  const [active, setActive] = useState("allUsers");

  return (
    <>
      <Navbar setActive={setActive} active={active} />
      {active === "allUsers" && <AllUsers />}
      {active === "sendMessages" && <SendMessage />}
      {active === "createBills" && <CreateBills />}
      {active === "managePackage" && <ManagePackage />}
    </>
  );
};

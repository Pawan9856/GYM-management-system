import { useEffect, useState } from "react";
import ProfileCard from "../../components/User/ProfileCard";
import ProfileLogo from "../../assets/ProfileLogo.svg";

const Profile = () => {
  return (
    <>
      <div className="w-full h-full flex items-start justify-center mt-10">
        <div className="w-[90%] max-w-[900px]">
          <ProfileCard />
        </div>
      </div>
    </>
  );
};

export default Profile;

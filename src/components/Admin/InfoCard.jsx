import React from "react";

const InfoCard = ({ title, info }) => {
  return (
    <>
      <div className="grid grid-cols-7 gap-2  text-gray-700">
        <div className="col-start-1 col-span-2">{title}</div>
        <div className="col-start-3 col-span-3">{info}</div>
        <div className="col-end-8 col-span-2">
          <button>Edit</button>
        </div>
      </div>
    </>
  );
};

export default InfoCard;

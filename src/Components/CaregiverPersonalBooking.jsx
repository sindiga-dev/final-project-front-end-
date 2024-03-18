import React, { useState, useEffect } from "react";
import "../Styles/CaregiverPage.css";
function CaregiverPage({ parent }) {
  console.log(parent);

  const [click, setClick] = useState(false);
  //   const profile=parent.map((p)=>p)
  //   console.log(profile)
  return (
    <>
      <div className="lg:w-2/3 m-auto lg:grid grid-cols-2 gap-x-6 sm:flex fle-row pt-10">
        <div className="g">
          <div className=" bg-slate-400 h-full flex flex-col justify-center items-center rounded-lg">
            <img
              className="h-48 w-48 rounded-full"
              src={parent.parent.image}
              alt="Profile"
            />
            <h3 className="pt-4">{parent.parent.username}</h3>
          </div>
        </div>
        <div className="c-det">
          <h2 className="md:text-3xl  pb-4">
            Hurray!You have a pending appointment
          </h2>
          <div className="flex justify-between items-center mt-8 border-b">
            <h3>Name </h3>
            <h3>{parent.parent.username}</h3>
          </div>

          <div className="flex justify-between items-center mt-8 border-b">
            <h3>Address </h3>
            <h3></h3>
          </div>
          <div className="flex justify-between items-center mt-8 border-b">
            <h3>Phone Number </h3>
            <h3>{parent.parent.phone} </h3>
          </div>
          <div className="flex justify-between mt-10">
          <button className="w-1/4 flex flex-row justify-between rounded-md bg-gradient-to-r from-teal-500 to-cyan-600 py-3 px-4 font-medium text-white shadow hover:from-teal-600 hover:to-cyan-700">
              Call
            </button>
            <button className="w-1/4 flex flex-row justify-between rounded-md bg-gradient-to-r from-teal-500 to-cyan-600 py-3 px-4 font-medium text-white shadow hover:from-teal-600 hover:to-cyan-700">
              Message
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default CaregiverPage;

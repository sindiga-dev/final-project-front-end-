import React, { useState } from "react";
import ConfirmationPage from "./ConfirmationPage";
function StatusPage({ bb }) {
  const [click, setClick] = useState(false);
 

  return (
    <div>
      <div className="lg:w-2/3 xl:w-1/2 m-auto sm:w-full pt-0 mt-0 pb-20 mb-20">
        <div className="justify-center items-center h-full">
          <>
            <div className="pt-0 lg:h-64 sm:h-96 bg-gradient-to-r from-teal-500 to-cyan-600 ">
              <h1 className="pt-2 lg:text-3xl md:text-xl text-white text-center">
                Request Received. Please await Confirmation
              </h1>
              <div className="text-white lg:flex flex-row pb-10">
                <div className="mt-0 pl-2 lg-flex lg:flex-col ">
                  <img
                    className="rounded-full object-cover h-48 w-48"
                    src={bb.image.image1}
                    alt="Caregiver"
                  />
                </div>
                <div className=" lg:text-white sm:text-white ml-10 mt-10">
                  <h2 className="lg:text-2xl">{bb.username}</h2>
                  <h4>Location: {bb.location.city}</h4>
                </div>
              </div>
            </div>
           {bb.bookings.map((status)=><ConfirmationPage status={status.status} />) }
            <div className="mt-10 border-t p-5 border-b">
              <h1 className="lg:text-2xl pb-6 flex justify-start items-center">
                Stats
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="green"
                  class="w-10 h-10"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M7.5 14.25v2.25m3-4.5v4.5m3-6.75v6.75m3-9v9M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z"
                  />
                </svg>
              </h1>
              <div className="flex justify-around text-center py-1">
                <div className="border-r w-1/3">
                  <h5 className="mb-1">53</h5>
                  <h5 className="mb-0">Clients</h5>
                </div>
                <div className="border-r w-1/3">
                  <h5 className="mb-1">49</h5>

                  <h5 className="pt-2 mb-0 flex items-center justify-center">
                    Satisfied Clients
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="orange"
                      className="w-8 h-8"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z"
                      />
                    </svg>
                  </h5>
                </div>
                <div className="border-r  w-1/3">
                  <h5 className="mb-1">4</h5>
                  <h5 className="mb-0 flex justify-center items-center pr-2">
                    Unsatisfied Clients
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="red"
                      class="w-8 h-8"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm-3.536-3.475a.75.75 0 001.061 0 3.5 3.5 0 014.95 0 .75.75 0 101.06-1.06 5 5 0 00-7.07 0 .75.75 0 000 1.06zM9 8.5c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S7.448 7 8 7s1 .672 1 1.5zm3 1.5c.552 0 1-.672 1-1.5S12.552 7 12 7s-1 .672-1 1.5.448 1.5 1 1.5z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </h5>
                </div>
              </div>
            </div>
            <div className="text-gray-600 p-4">
              <div className="mb-20 w-3/4 ">
                <h1 className="lg:text-2xl mb-1">About me</h1>
                <div className="p-4 border-b pb-10">
                  <p>{bb.bio}</p>
                </div>
              </div>
              <div className="flex justify-start items-center mb-0">
                <h2 className="text-gray-600 pb-2 lg:text-2xl">
                  Contact Section
                </h2>
              </div>
              <div className="flex justify-center ">
                <div className="mr-4">
                  <button className="w-full flex flex-row justify-between rounded-md bg-gradient-to-r from-teal-500 to-cyan-600 py-3 px-4 font-medium text-white shadow hover:from-teal-600 hover:to-cyan-700">
                    Call
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="w-6 h-6"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M20.25 3.75v4.5m0-4.5h-4.5m4.5 0l-6 6m3 12c-8.284 0-15-6.716-15-15V4.5A2.25 2.25 0 014.5 2.25h1.372c.516 0 .966.351 1.091.852l1.106 4.423c.11.44-.054.902-.417 1.173l-1.293.97a1.062 1.062 0 00-.38 1.21 12.035 12.035 0 007.143 7.143c.441.162.928-.004 1.21-.38l.97-1.293a1.125 1.125 0 011.173-.417l4.423 1.106c.5.125.852.575.852 1.091V19.5a2.25 2.25 0 01-2.25 2.25h-2.25z"
                      />
                    </svg>
                  </button>
                </div>
                <div className=" ml-4">
                  <button
                    onClick={() => setClick(true)}
                    className="block  flex flex-row justify-between w-full rounded-md bg-gradient-to-r from-teal-500 to-cyan-600 py-3 px-4 font-medium text-white shadow hover:from-teal-600 hover:to-cyan-700"
                  >
                    Message Now
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="w-6 h-6"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </>
          {click ? (
            <div className="text-gray-700 border-t mt-10">
              <form className="flex lg:flex-row justify-between items-center mb-20 pb-20">
                <textarea
                  className="w-full rounded text-gray-700 border rounded mr-10"
                  placeholder="Your Message Here "
                />
                <button className="w-1/2 rounded-md bg-gradient-to-r from-teal-500 to-cyan-600 py-3 px-4 font-medium text-white shadow hover:from-teal-600 hover:to-cyan-700 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-gray-900">
                  Submit
                </button>
              </form>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default StatusPage;

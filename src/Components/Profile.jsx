import React, { useState } from "react";
// import {Link} from "react-router-dom";
import "../Styles/Profile.css";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";

function Profile({ user,caregiver }) {

  const [clicked, setClicked] = useState(false);
  const [value, setValue] = React.useState("");

  return (
    <div className="lg:flex lg:flex-row md:flex-col sm:flex-col m-auto lg:w-1/2 sm:w-full lg:justify-center lg:mt-10 md:mt-0 sm:mt-0">
      <div className="g1-card">
        <div className="g1-image-section">
          <img
            className="h-48 w-48 rounded-full"
            src="https://pbs.twimg.com/media/FhC3LvHXkAEMEUZ.png"
            alt="Profile"
          />
        </div>

        <div className="g1-content">
          <h2>Title One</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
            debitis, ad ratione error at animi optio odio dolores dolor earum
            atque, facilis voluptatem quas eveniet maiores quaerat enim
            voluptatibus sapiente?
          </p>
          {/* <Link to="/blog/blog1"><button id="g-btn">Read More</button></Link> */}
        </div>
      </div>
      <div className="rightSide text-black">
        <h1> Profile</h1>
        <div>
          <div>
            <h2 className="lg:text-3xl border-b pb-4">Personal Info</h2>
            <div className="flex justify-between items-center mt-8 border-b">
              <h3>Full name</h3>
              <h3 className="mr-20">{user.username}</h3>
            </div>
            <div className="flex justify-between items-center mt-8 border-b">
              <h3>Email </h3>
              <h3 className="mr-20">{user.email}</h3>

            </div>
            <div className="flex justify-between items-center mt-8 border-b">
              <h3>{user.phone} </h3>
            </div>
            <div className="flex justify-between items-center mt-8 border-b">
              <h3></h3>
            </div>
          </div>
          <div className="flex justify-end">
            <button
              className="mt-8 flex w-1/4 items-end justify-center rounded-md border border-transparent bg-gradient-to-r from-teal-500 to-cyan-600 py-3 px-8 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              onClick={() => setClicked(true)}
            >
              Update Profile
            </button>
          </div>
        </div>
        {clicked ? (
          <form id="profile-form" method="POST" className="text-black">
            <div className="sm:col-span-3">
              <label
                htmlFor="country"
                className="block text-md font-medium text-black pb-3"
              >
                City
              </label>
              <div className="mt-1">
                <select
                  id="city"
                  name="city"
                  autoComplete="city-name"
                  className="block w-2/3 min-w-0 text-black flex-1 p-3 rounded border border-gray-400 focus:border-indigo-6 00 focus:ring-indigo-500 sm:text-sm "
                >
                  <option>Nairobi</option>
                  <option>Mombasa</option>
                  <option>Nakuru</option>
                  <option>Kisumu</option>
                  <option>Thika</option>
                  <option>Machakos</option>
                  <option>Eldoret</option>
                </select>
              </div>
            </div>

            <div className="sm:col-span-6">
              <label
                htmlFor="street-address"
                className="block text-md font-medium text-black pb-3"
              >
                Street address
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  name="street-address"
                  id="street-address"
                  autoComplete="street-address"
                  className="block w-2/3 min-w-0 text-black flex-1 p-3 rounded border border-gray-400 focus:border-indigo-6 00 focus:ring-indigo-500 sm:text-sm "
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label
                htmlFor="city"
                className="block text-sm font-medium text-black "
              >
                Town
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  name="city"
                  id="city"
                  autoComplete="address-level2"
                  className="block w-2/3 min-w-0 text-black flex-1 p-3 rounded border border-gray-400 focus:border-indigo-6 00 focus:ring-indigo-500 sm:text-sm "
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label
                htmlFor="region"
                className="block text-sm font-medium text-black"
              >
                State / Province
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  name="region"
                  id="region"
                  autoComplete="address-level1"
                  className="block w-2/3 min-w-0 text-black flex-1 p-3 rounded border border-gray-400 focus:border-indigo-6 00 focus:ring-indigo-500 sm:text-sm "
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label
                htmlFor="postal-code"
                className="block text-sm font-medium text-black"
              >
                ZIP / Postal code
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  name="postal-code"
                  id="postal-code"
                  autoComplete="postal-code"
                  className="block w-2/3 min-w-0 text-black flex-1 p-3 rounded border border-gray-400 focus:border-indigo-6 00 focus:ring-indigo-500 sm:text-sm "
                />
              </div>
            </div>
            <div className="sm:col-span-3">
              <label
                htmlFor="country"
                className="block text-md font-medium text-black pb-3"
              >
                Phone Number
              </label>
              <div className="mt-1">
                <PhoneInput
                  className="block w-2/3 min-w-0 flex-1 object-contain  rounded border border-gray-400 focus:border-indigo-6 00 focus:ring-indigo-500 sm:text-sm"
                  international={false}
                  defaultCountry="KE"
                  value={value}
                  onChange={setValue}
                />
              </div>
            </div>
            <div className="flex justify-end">
              <button className="mt-8 flex w-1/4 items-center justify-center rounded-md border border-transparent bg-gradient-to-r from-teal-500 to-cyan-600 py-3 px-8 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                Submit
              </button>
            </div>
          </form>
        ) : null}
      </div>
    </div>
  );
}

export default Profile;
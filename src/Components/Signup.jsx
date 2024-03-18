import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link, useNavigate } from "react-router-dom";
export default function Signup({ onLogin }) {
  const [email, setEmail] = React.useState("");
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [passwordConfirmation, setPasswordConfirmation] = React.useState("");
  const [errors, setErrors] = React.useState([]);
  const navigate = useNavigate();

  const showToastMessage = () => {
    toast.success("Signup Successfull!", {
      position: toast.POSITION.TOP_CENTER,
      className: "toast-message",
    });
  };
  const passwordError = errors
    .map((err) => err)
    .filter((a) => a)
    .includes("Password confirmation doesn't match Password");
  const usernameError = errors
    .map((err) => err)
    .filter((a) => a)
    .includes("Username has already been taken");

  function handleSubmit(e) {
    e.preventDefault();
    setErrors([]);
    fetch("http//:localhost:3000/signup_parent", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        username,
        password,
        password_confirmation: passwordConfirmation,
      }),
    }).then((r) => {
      if (r.ok) {
        r.json().then((user) => onLogin(user));
        showToastMessage();
        setTimeout(() => {
          navigate("/login");
        }, 1000);
      } else {
        r.json().then((err) => {
          setErrors(err.errors);
        });
      }
    });
  }
  return (
    <>
      <div className="flex-col justify-center py-12 sm:px-6 lg:px-8">
        <ToastContainer />

        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <h2 className="mt-6 text-center text-5xl font-bold tracking-tight text-indigo-600">
            Create an Account
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Or{" "}
            <Link
              to="/Login"
              className="font-medium text-indigo-600 hover:text-indigo-500"
            >
              Login Here
            </Link>
          </p>
        </div>

        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
            <form
              onSubmit={handleSubmit}
              className="space-y-6"
              action="#"
              method="POST"
            >
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Username
                </label>
                <div className="mt-1">
                  <input
                    onChange={(e) => setUsername(e.target.value)}
                    id="name"
                    name="name"
                    type="text"
                    required
                    className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email
                </label>
                <div className="mt-1">
                  <input
                    onChange={(e) => setEmail(e.target.value)}
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  />
                </div>
              </div>
              {usernameError ? <div className="flex items-center"><p className="italic text-red-600 justify-center">Username already taken. Try another</p></div> : null}
              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700"
                >
                  Password
                </label>
                <div className="mt-1">
                  <input
                    onChange={(e) => setPassword(e.target.value)}
                    id="password"
                    name="password"
                    type="password"
                    required
                    className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700"
                >
                  Confirm Password
                </label>
                <div className="mt-1">
                  <input
                    onChange={(e) => setPasswordConfirmation(e.target.value)}
                    id="password_confirmation"
                    name="password_confirmation"
                    type="password"
                    required
                    className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  />
                </div>
              </div>
              {passwordError ? (
                <div className="flex items-center justify-start">
                  <p className="italic text-red-600">
                    The passwords doesn't match❗
                  </p>
                </div>
              ) : null}

              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md border border-transparent bg-gradient-to-r from-teal-500 to-cyan-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  Sign Up
                </button>
              </div>
            </form>
          </div>
          <div className="mt-10 flex items-center justify-center">
            <p className="text-gray-700 sm:text-xl md:text-xl lg:text-2xl">
              To register as a Caregiver. Click{" "}
              <Link
                className="text-indigo-600 font-bold underline"
                to="/sign_up/caregiver"
              >
                Here
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

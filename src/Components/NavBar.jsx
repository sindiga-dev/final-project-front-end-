import { Fragment, useState } from "react";
import { Popover, Transition, Menu } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link, useNavigate } from "react-router-dom";
function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function NavBar({ user, caregiver, setUser, setCaregiver}) {
  // const [loggedIn, setLoggedIn]=useState(true)
const nav=useNavigate()

  function logOut() {
    if (user) {
      fetch("https://bbcare.onrender.com/logout", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json"
        }
      }).then(r => {
        if (r.ok) {
          nav('/')
          setUser(null)
        }
      })
    } else {
      fetch("https://bbcare.onrender.com/caregiver/logout", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json"
        }
      })
        .then(r => {
          if (r.ok) {
            nav('/')
            setCaregiver(null)
          }
        })
    }



  }


  // const [loggedIn, setLoggedIn]=useState(true)

  return (
    <div>
      <div className="relative ">
        <Popover as="header" className="relative">
          <div className="bg-slate-400 pt-6 items-center pb-4">
            <nav
              className="relative mx-auto flex w-4/5 items-center justify-between px-4 sm:px-6"
              aria-label="Global"
            >
              <div className="flex flex-1 items-center">
                <div className="flex w-full items-center justify-between md:w-auto">
                  <Link to="/about">
                    <h1 className="font-medium text-white hover:text-gray-300 lg:text-4xl md:text-2xl">
                      Bb<span className="text-emerald-800">Care</span>
                    </h1>
                  </Link>
                  <div className="-mr-2 flex items-center md:hidden">
                    <Popover.Button className="focus-ring-inset inline-flex items-center justify-center rounded-md bg-gray-900 p-2 text-gray-400 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-white">
                      <span className="sr-only">Open main menu</span>
                      <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                    </Popover.Button>
                  </div>
                </div>
                <div className="hidden space-x-8 md:ml-10 md:flex">
                  <Link
                    to="/"
                    className="text-base font-2xl text-gray-900 focus:text-red-600 focus:text-xl hover:text-gray-300"
                  >
                    Home
                  </Link>
                  <Link
                    to="/about"
                    className="text-base focus:text-red-600 focus:text-xl font-medium text-gray-900 hover:text-gray-300"
                  >
                    About Us
                  </Link>
                  <Link
                    to="/contact_us"
                    className="text-base focus:text-red-600 focus:text-xl font-medium text-gray-900 hover:text-gray-300"
                  >
                    Contact Us
                  </Link>
                  <Link
                    to="/blog"
                    className="text-base focus:text-red-600 focus:text-xl font-medium text-gray-900 hover:text-gray-300"
                  >
                    Blog
                  </Link>
                </div>
              </div>
              {user || caregiver ? (null) : (<div className="hidden md:flex md:items-center md:space-x-6">
                <Link
                  to="/login"
                  className="text-base font-medium text-gray-900 hover:text-gray-300"
                >
                  Log in
                </Link>
                <Link
                  to="/sign_up"
                  className="bg-emerald-800 inline-flex items-center rounded-md border border-transparent bg-gray-600 px-4 py-2 text-base font-medium text-white hover:bg-gray-700"
                >
                  Sign Up
                </Link>
              </div>)}
              {user || caregiver ? (<div className="hidden sm:ml-6 sm:block">
                <div className="flex items-center">
                  {/* Profile dropdown */}
                  <Menu as="div" className="relative ml-3">
                    <div>
                      <Menu.Button className="flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-cyan-600 focus:ring-offset-2 focus:ring-offset-teal-800">
                        <span className="sr-only">Open user menu</span>
                        <img
                          className="h-12 w-12 rounded-full"
                          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                          alt=""
                        />
                      </Menu.Button>
                    </div>
                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-100"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-75"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95"
                    >
                      <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-cyan-600">
                        <Menu.Item>
                          {({ active }) => (
                            <Link
                              to="/userprofile"
                              className={classNames(
                                active ? 'bg-gradient-to-r from-teal-500 to-cyan-600' : '',
                                'block px-4 py-2 text-sm text-gray-700'
                              )}
                            >
                              Your Profile
                            </Link>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <Link
                              to="#"
                              className={classNames(
                                active ? 'bg-gradient-to-r from-teal-500 to-cyan-600' : '',
                                'block px-4 py-2 text-sm text-gray-700'
                              )}
                            >
                              Settings
                            </Link>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <Link
                              to="#"
                              className={classNames(
                                active ? 'bg-gradient-to-r from-teal-500 to-cyan-600' : '',
                                'block px-4 py-2 text-sm text-gray-700'
                              )}

                              onClick={logOut}
                            >
                              sign out
                            </Link>
                          )}
                        </Menu.Item>
                      </Menu.Items>
                    </Transition>
                  </Menu>
                </div>
              </div>) : (null)}
            </nav>
          </div>

          <Transition
            as={Fragment}
            enter="duration-150 ease-out"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="duration-100 ease-in"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <Popover.Panel
              focus
              className="absolute inset-x-0 top-0 origin-top transform p-2 transition md:hidden"
            >
              <div className="overflow-hidden rounded-lg bg-white shadow-md ring-1 ring-black ring-opacity-5">
                <div className="flex items-center justify-between px-5 pt-4">
                  <div>
                    <h1 className="font-medium text-black hover:text-gray-300 lg:text-4xl md:text-2xl">
                      Bb<span className="text-red-600">Care</span>
                    </h1>
                  </div>
                  <div className="-mr-2">
                    <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-cyan-600">
                      <span className="sr-only">Close menu</span>
                      <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                    </Popover.Button>
                  </div>
                </div>
                <div className="pt-5 pb-6">
                  <div className="space-y-1 px-2">
                    <Link
                      to="/"
                      className="block rounded-md px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-50"
                    >
                      Home
                    </Link>
                    <Link
                      to="/about"
                      className="block rounded-md px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-50"
                    >
                      About Us
                    </Link>
                    <Link
                      to="/contact_us"
                      className="block rounded-md px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-50"
                    >
                      Contact Us
                    </Link>
                    <Link
                      to="/blog"
                      className="block rounded-md px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-50"
                    >
                      Blog
                    </Link>
                  </div>
                  <div className="mt-6 px-5">
                    <Link
                      to="/sign_up"
                      className="block w-full rounded-md bg-gradient-to-r from-teal-500 to-cyan-600 py-3 px-4 text-center font-medium text-white shadow hover:from-teal-600 hover:to-cyan-700"
                    >
                      Sign up
                    </Link>
                  </div>
                  <div className="mt-6 px-5">
                    <p className="text-center text-base font-medium text-gray-500">
                      Already have an account?{" "}
                      <Link
                        to="/login"
                        className="text-gray-900 hover:underline"
                      >
                        Login
                      </Link>
                    </p>
                  </div>

                </div>
              </div>
            </Popover.Panel>
          </Transition>
        </Popover>
      </div>
    </div>
  );
}

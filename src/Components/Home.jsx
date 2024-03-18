import React from "react";
import { ChevronRightIcon } from "@heroicons/react/20/solid";
import { Link } from "react-router-dom";
import Service from "./Service";
import Testimonials from "./Testimonials";
import img1 from "../Images/image1.webp";
import Footer from './Footer'
import Contact from './Contact'
function Home({user, caregiver}) {
  return (
    <div>
      <main>
        <div className=" h-screen bg-slate-400 pt-10 sm:pt-16 lg:overflow-hidden lg:pt-8 lg:pb-14">
          <div className="mx-auto w-4/5 lg:px-8">
            <div className="lg:grid lg:grid-cols-2 lg:gap-10">
              <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 sm:text-center lg:flex lg:items-center lg:px-0 lg:text-left">
                <div className="lg:py-24">
                  {user?
                    (<Link
                      to="/cards"
                      className="inline-flex items-center rounded-full bg-black p-1 pr-2 text-white hover:text-gray-200 sm:text-base lg:text-sm xl:text-base"
                    >
                      <span className="rounded-full bg-emerald-800 px-5 py-0.5 text-sm font-semibold leading-10 text-white">
                        Looking for a nanny?
                      </span>
                      <span className="ml-4 text-sm">
                        Check Available babysitters
                      </span>
                      <ChevronRightIcon
                        className="ml-2 h-5 w-5 text-gray-500"
                        aria-hidden="true"
                      />
                    </Link>):(
                      <Link
                      to="/caregiver"
                      className="inline-flex items-center rounded-full bg-black p-1 pr-2 text-white hover:text-gray-200 sm:text-base lg:text-sm xl:text-base"
                    >
                      <span className="rounded-full bg-emerald-800 px-5 py-0.5 text-sm font-semibold leading-10 text-white">
                        Pending Bookings
                      </span>
                      <span className="ml-4 text-sm">
                        Check your Recent bookings
                      </span>
                      <ChevronRightIcon
                        className="ml-2 h-5 w-5 text-gray-500"
                        aria-hidden="true"
                      />
                    </Link>
                    )
                  }
                  <h1 className="mt-4 text-4xl font-bold tracking-tight text-gray-900 sm:mt-5 sm:text-6xl lg:mt-6 xl:text-6xl">
                    <span className="block">
                      Want your baby well taken care of?
                    </span>
                    <span className="block bg-emerald-900 bg-clip-text pb-3 text-transparent sm:pb-5">
                      we got you
                    </span>
                  </h1>
                  <p className="text-base text-gray-900 sm:text-xl lg:text-lg xl:text-xl">
                    An exemplary baby-sitting service company, we recruit the
                    best nannies, and as per your request, they are available to
                    your home address..
                  </p>
                  <div className="sm:mt-12 ml-0">
                    <form action="POST" className="sm:mx-auto lg:mx-0">
                      <div className="flex items-center m-0">
                        <div className="min-w-0 flex-1">
                          <label htmlFor="email" className="sr-only">
                            Email address
                          </label>
                          <input
                            id="email"
                            type="email"
                            placeholder="Enter your email"
                            className="block w-full rounded-md border-0 px-4 py-3 text-base text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-gray-900"
                          />
                        </div>
                        <div className="sm:mt-0 sm:ml-3">
                          <Link to="/sign_up">
                            <button className="block w-full rounded-md bg-emerald-800 py-3 px-4 font-medium text-white shadow hover:from-teal-600 hover:to-cyan-700 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-gray-900">
                              Get Started
                            </button>
                            </Link>
                          </div>
                        </div>
                        <p className="mt-3 text-xl text-gray-900 sm:mt-4">
                          Register and get access to our amazing services, no credit card
                          necessary. By providing your email, you agree to our{" "}
                          <Link to="/services" className="font-medium text-gray-900">
                            terms of service
                          </Link>
                          .
                        </p>
                        </form>
                     
                    
                    </div>
                    <div>
                      <Link to="/cards">
                      <button className="flex justify-center w-1/2 rounded-md bg-emerald-800 py-3 px-4 font-medium text-white shadow hover:from-teal-600 hover:to-cyan-700 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-gray-900 mt-12">Visit Babysitters page</button>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="mt-12 -mb-16 sm:-mb-48 lg:relative lg:m-0">
                  <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 lg:max-w-none lg:px-0">
                    <img
                      className="w-full lg:rounded-xl lg:absolute lg:inset-y-0 lg:left-0 lg:h-full lg:w-full lg:max-w-none"
                      src={img1}
                      alt="image_cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
     
        <Service/>
        <Testimonials/>
        <Contact/>
        <Footer/>
    </div>
  );
}

export default Home;

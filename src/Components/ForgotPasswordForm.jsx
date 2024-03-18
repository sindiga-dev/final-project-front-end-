import { emphasize } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import React, { useState } from 'react'

export default function ForgotPasswordForm() {

  const [email, setEmail] = useState('')

  function handlePost(e) {
    e.preventDefault()
    fetch("https://bbcare.onrender.com/password/forgot_password", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify(email),
    })
      .then(response => alert(response.alert))
   
      .catch(console.log)
  }



  return (
    <div className="h-screen bg-gray-900 overflow-hidden">
      <div className="container mx-auto flex justify-center px-19 mt-24">
        <div className="w-full lg:w-1/2 bg-white p-5 rounded-lg ">
          <div className="px-8 mb-4 text-center">
            <h3 className="pt-4 mb-2 text-2xl">Forgot Your Password?</h3>
            <p className="mb-4 text-start text-gray-700">
              We get it, stuff happens. Just enter your email address below and
              we'll send you a link to reset your password!
            </p>
          </div>
          <form className="px-8 pt-6 pb-8 mb-4 bg-white rounded">
            <div class="mb-4">
              <label
                className="block mb-2 text-sm font-bold text-gray-700"
                for="email"
              >
                Email
              </label>
              <input
                className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow focus:ring-1 focus:ring-indigo-600"
                id="email"
                type="email"
                placeholder="Enter Email Address..."
                value={email} onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-6 flex justify-center">
              <button
                className="flex w-1/2 justify-center rounded-md border border-transparent bg-gradient-to-r from-teal-500 to-cyan-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 mt-12"
                type="submit"
                onClick={handlePost}
              >
                Reset Password
              </button>
            </div>
            <hr className="mb-6 border-t" />
            <div className="text-center">
              <Link
                className="font-medium text-indigo-600 hover:text-indigo-500"
                to="/sign_up"
              >
                Create an Account!
              </Link>
            </div>
            <div className="text-center">
              <p>
                {" "}
                Already have an account?
                <Link
                  className="font-medium text-indigo-600 hover:text-indigo-500"
                  to="/login"
                >
                  Login!
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}




// import { Link } from "react-router-dom";

// export default function ForgotPasswordForm() {
//   return (
//     <div className="h-screen bg-gray-900 overflow-hidden">
//       <div className="container mx-auto flex justify-center px-19 mt-24">
//         <div className="w-full lg:w-1/2 bg-white p-5 rounded-lg ">
//           <div className="px-8 mb-4 text-center">
//             <h3 className="pt-4 mb-2 text-2xl">Forgot Your Password?</h3>
//             <p className="mb-4 text-start text-gray-700">
//               We get it, stuff happens. Just enter your email address below and
//               we'll send you a link to reset your password!
//             </p>
//           </div>
//           <form className="px-8 pt-6 pb-8 mb-4 bg-white rounded">
//             <div class="mb-4">
//               <label
//                 className="block mb-2 text-sm font-bold text-gray-700"
//                 for="email"
//               >
//                 Email
//               </label>
//               <input
//                 className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow focus:ring-1 focus:ring-indigo-600"
//                 id="email"
//                 type="email"
//                 placeholder="Enter Email Address..."
//               />
//             </div>
//             <div className="mb-6 flex justify-center">
//               <button
//                 className="flex w-1/2 justify-center rounded-md border border-transparent bg-gradient-to-r from-teal-500 to-cyan-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 mt-12"
//                 type="submit"
//               >
//                 Reset Password
//               </button>
//             </div>
//             <hr className="mb-6 border-t" />
//             <div className="text-center">
//               <Link
//                 className="font-medium text-indigo-600 hover:text-indigo-500"
//                 to="/sign_up"
//               >
//                 Create an Account!
//               </Link>
//             </div>
//             <div className="text-center">
//               <p>
//                 {" "}
//                 Already have an account?
//                 <Link
//                   className="font-medium text-indigo-600 hover:text-indigo-500"
//                   to="/login"
//                 >
//                   Login!
//                 </Link>
//               </p>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }

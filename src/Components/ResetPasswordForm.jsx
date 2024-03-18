
import { emphasize } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import React, { useState } from 'react'

export default function ResetPasswordForm({setUser, setCaregiver}) {


  const [password_reset_token, setToken] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [password_confirmation, setPasswordConfirmation] = useState('')

  const [errors, setErrors] = useState([]);
  
  const navigate = useNavigate();


  function handlePost(e) {
    e.preventDefault();
    if (password !== password_confirmation) {
      alert("Passwords don't match");
      setPassword("");
      setPasswordConfirmation("");
    } else {
      fetch("https://bbcare.onrender.com/password/reset_password", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          password_reset_token,
          email,
          password,
          password_confirmation,
        }),
      }).then((r)=>{
        if (r.ok) {
            r.json().then((data) => {console.log(data)
              setUser(data)
              setTimeout(() => {
                navigate("/cards");
              }, 1000);
            }) 
           
        } else {
            r.json().then((err) => setErrors(err.errors))
        }
     })} 
      
        // .then((response) => response.json())
        // .then((response) => {
        //   console.log(response)
        //   alert(response.alert);
        //   navigate("/");
        // });
      //if (request.ok) {
      //       setUser(data)
      //       alert(response.alert)
      //       navigate("/")
      // } else {
      //   request.json().then(err => console.log(err))
      //   navigate("/")
      // }
    }
  


  // function handlePost(e) {
  //   e.preventDefault()
  //   if (password !== password_confirmation) {
  //     alert("Passwords don't match");
  //     setPassword('')
  //     setPasswordConfirmation('')
  //   }
  //   else {
  //   fetch("/password/reset_password", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },

  //     body: JSON.stringify({
  //       password_reset_token: password_reset_token,
  //       email: email,
  //       password: password,
  //       password_confirmation: password_confirmation
  //     }
  //     )).then(response => {
  //          alert(response.alert)
  //          navigate("/")
  //        }).then()
  //        .catch(console.log),
  //       }
  

    
    //if (request.ok) {
      //       setUser(data)
      //       alert(response.alert)
      //       navigate("/")
      // } else {
      //   request.json().then(err => console.log(err))
      //   navigate("/")
      // }
  


  return (
    <div className="h-screen bg-gray-900 overflow-hidden">
      <div className="container mx-auto flex justify-center px-19 mt-24">
        <div className="w-full lg:w-1/2 bg-white p-5 rounded-lg ">
          <div className="px-8 mb-4 text-center">
            <h3 className="pt-4 mb-2 text-2xl">Reset Your Password</h3>
      
          </div>
          <form className="px-8 pt-6 pb-8 mb-4 bg-white rounded">
            <div class="mb-4">
            <label  className="block mb-2 text-sm font-bold text-gray-700"for="token">Token:</label>
          <input className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow focus:ring-1 focus:ring-indigo-600" required id="token" value={password_reset_token} onChange={(e) => setToken(e.target.value)} name="token" placeholder="token"  type="token"/>
          <p>The code that was emailed to you. This is case-sensitive.</p>
          <label className="block mb-2 text-sm font-bold text-gray-700" for="email">Email:</label>
          <input   className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow focus:ring-1 focus:ring-indigo-600" required id="email" value={email} onChange={(e) => setEmail(e.target.value)}name="email" placeholder="email" type="email" />
          <label className="block mb-2 text-sm font-bold text-gray-700" for="password">New password:</label>
          <input className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow focus:ring-1 focus:ring-indigo-600" required id="password" value={password} onChange={(e) => setPassword(e.target.value)} name="password" placeholder="password" type="password"/>
        
          <label className="block mb-2 text-sm font-bold text-gray-700" for="passwordConfirm">Confirm new password:</label>
          <input  className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow focus:ring-1 focus:ring-indigo-600" required id="password_confirmation" value={password_confirmation} onChange={(e) => setPasswordConfirmation(e.target.value)} name="passworConfirm" placeholder="password confirmation" type="password"/>
          
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

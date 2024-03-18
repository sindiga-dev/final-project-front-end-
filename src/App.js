import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import NavBar from "./Components/NavBar";
import Home from "./Components/Home";
import About from "./Components/About";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import Blog from "./Components/Blog";
import Contact from "./Components/Contact";
import ForgotPasswordForm from "./Components/ForgotPasswordForm";
import ResetPasswordForm from "./Components/ResetPasswordForm";
import Blog1 from "./Components/Blog1";
import Blog2 from "./Components/Blog2";
import Blog3 from "./Components/Blog3";
import Cards from "./Components/Cards";
import Favourite from "./Components/Favourite";
import Caregiver from "./Components/CaregiverForm";
import CardItem from "./Components/CardItem";
import CheckoutstatusPage from "./Components/CheckoutStatusPage";
import Profile from "./Components/Profile";
import CaregiverReviewsPage from "./Components/CaregiverReviewsPage";
import CaregiverPage from "./Components/CaregiverPage";
import AppointmentTable from './Components/AppointmentTable';
function App() {
  const [data, setData] = useState([]);
  const [user, setUser] = useState(null);
  const [caregiver, setCaregiver] = useState(null)
  const [book, setBook] = useState(false)
  const [accept, setAccept] = useState(false)
  useEffect(() => {
    // auto-login
    fetch("https://bbcare.onrender.com/parent").then((r) => {
      if (r.ok) {
        r.json().then((user) => {
          console.log(user)
          setUser(user)});
      }
    });
  }, []);

  useEffect(() => {
    fetch(`https://bbcare.onrender.com/caregivers`)
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setData(data);
      });
  }, []);
  useEffect(() => {
    // auto-login
    fetch("https://bbcare.onrender.com/caregiver").then((r) => {
      if (r.ok) {
        r.json().then((caregiver) => {
          setCaregiver(caregiver)});
      }
    });
  }, []);


  return (
    <div>
      <NavBar user={user} caregiver={caregiver} setUser={setUser} setCaregiver={setCaregiver}/>
      <Routes>
        <Route path="/" element={<Home  user={user} caregiver={caregiver} />} />

        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/checkout_status" element={<CheckoutstatusPage user={user} accept={accept} />} />
        <Route path="/caregiver" element={<AppointmentTable user={caregiver} book={book} setAccept={setAccept}/>} />
        <Route path="caregiver">
          <Route path="bookings" element={<CaregiverPage user={caregiver}/>}/>
        </Route>
        <Route path="blog">
          <Route path="blog1" element={<Blog1 />} />
          <Route path="blog2" element={<Blog2 />} />
          <Route path="blog3" element={<Blog3 />} />
        </Route>
        <Route path="userprofile" element={<Profile user={user} caregiver={caregiver} />} />
        <Route path="/contact_us" element={<Contact />} />
        <Route path="/login" element={<Login setUser={setUser} setCaregiver={setCaregiver} />} />
        <Route path="/login/forgot_password" element={<ForgotPasswordForm />} />
        <Route path="/login/reset_password" element={<ResetPasswordForm setCaregiver={setCaregiver} setUser={setUser}/>} />
        <Route path="/sign_up" element={<Signup />} />
        <Route exact path="/">
          <Route
            exact
            path="/cards"
            element={<Cards user={user} data={data} />}
          />
          <Route exact path="/favourite" element={<Favourite />} />
                 </Route>
        <Route path="sign_up">
          <Route path="caregiver" element={<Caregiver />} />
        </Route>
        <Route path="cards">
          <Route path="card-item">
            <Route path="reviews" element={<CaregiverReviewsPage />} />
          </Route>
        </Route>

        <Route exact path="cards/:id" element={<CardItem data={data} user={user} setBook={setBook}/>} />

      </Routes>
    </div>
  );
}

export default App;

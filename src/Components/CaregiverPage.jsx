import React, { useState, useEffect } from "react";
import "../Styles/CaregiverPage.css";
import CaregiverPersonalBoooking from "./CaregiverPersonalBooking";
function CaregiverPage({ user }) {
  const [bookings, setBookings] = useState([]);
  useEffect(() => {
    fetch(`https://bbcare.onrender.com/caregivers/${user.id}/bookings`)
      .then((r)=>r.json())
      .then((data)=>{

        setBookings(data);
      })
   }, []);

console.log(bookings)
// console.log(trueBookings);
  return (
    <>
      {bookings.map((booking)=>(<CaregiverPersonalBoooking key={booking.id} parent={booking} />))}
    </>
  );
}

export default CaregiverPage;

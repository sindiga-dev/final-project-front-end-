import React, { useEffect, useState } from "react";
import StatusPage from "./StatusPage";

export default function CheckoutstatusPage({ user, accept }) {
  
  const [caregiver, setCaregiver] = useState([]);
  useEffect(() => {
    const interval=setInterval(async() =>{
      const response=await fetch(`https://bbcare.onrender.com/caregivers/booked_by_parent/${user.id}`)
      const updatedData=await response.json();
      setCaregiver(updatedData);
    },1000)
  return()=>clearInterval(interval)
  }, [accept]);
  
  return (
    <>
      {caregiver.map((bb) => (
        <StatusPage key={bb.id} bb={bb}/>
      ))}
    </>
  );
}

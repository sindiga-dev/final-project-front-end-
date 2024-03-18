import React from 'react'
import "../Styles/About.css"
import img2 from "../Images/image2.webp"
import Footer from "./Footer";

function About() {
  return (
    <div className="g-about lg:flex lg:flex-col md:flex-row sm:flex-row">
      <div className='g-abt'>
      <h1 id='g-h1'>About Our Nanny Application</h1>
      <p id='g-p'>Our nanny application is designed to make it easy for parents to find and connect with the best nannies in their area. Our platform allows parents to search for nannies based on their location, experience, and qualifications, and to view detailed profiles of each nanny before making a decision.</p>
      <p id='g-p'>All of the nannies on our platform have been thoroughly vetted and are required to have at least 2 years of experience and a clean background check. We also offer a secure messaging system and a convenient calendar to help parents schedule interviews and appointments with nannies.</p>
      <p id='g-p'>Our goal is to provide parents with a safe and reliable platform to find the perfect nanny for their family. We understand the importance of trust and peace of mind when it comes to the care of your children, and we are committed to providing top-notch service to our customers.</p>
      </div>
      <div>
      <img id='g-img' src={img2} alt="" />
      </div>
      <Footer/>
    </div>
  );
}

export default About;
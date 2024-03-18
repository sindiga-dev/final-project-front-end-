import React from "react";
import babyLeft from "../Images/babyLeft.jpg";
import "../Styles/Contact.css";

function Contact() {
  return (
    <div className="contact">
      <div
        className="leftSide"
        style={{ backgroundImage: `url(${babyLeft})` }}
      ></div>
      <div className="rightSide">
        <h1> Contact Us</h1>

        <form id="contact-form" method="POST">
          <label id="label" htmlFor="name">Full Name</label>
          <input id='input1' name="name" required placeholder="" type="text" />
          <label id="label" htmlFor="email">Email</label>
          <input id='input1' name="email" required placeholder="" type="email" />
          <label id="label" htmlFor="message">Message</label>
          <textarea id='textarea'
            rows="6"
            placeholder=""
            name="message"
            required
          ></textarea>
          <button id="btn101" type="submit"> Send Message</button>
        </form>
      </div>
     
     
    </div>
  );
}

export default Contact;
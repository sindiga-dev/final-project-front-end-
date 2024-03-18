import React from 'react'
import "../Styles/Footer.css"
import {FaFacebookF} from "react-icons/fa"
import {FaTwitter} from "react-icons/fa"
import {FaInstagram} from "react-icons/fa"
import {FaYoutube} from "react-icons/fa"
import { Link } from "react-router-dom";

const Footer = () => {
  return (
   <div className='footer'>
      <div className='top'>
        <div>
          <h1>Butterfly Peaks Babysitters</h1>
          <p>Stepping In When You Need To Step Out</p>
          <p>Register today and enjoy our exemplary services.</p>
        </div>
       <div className='footer_socials'>
        <a href="https://facebook.com"><FaFacebookF/> </a>
        <a href="https://twitter.com"><FaTwitter/></a>
        <a href="https://instagram.com"><FaInstagram/></a>
        <a href="https://youtube.com"><FaYoutube/></a>
       </div>
      </div>

      <div className='bottom'>
        <div>
          <Link to="/about">
        <a href='/'>About us</a>
        </Link>
          <h4>
            <p id='i-par'>Location</p>
            <p id='i-par'>Leadership</p>
            <p id='i-par'>How to hire</p>
            <p id='i-par'>Impact stories</p>
          </h4>
        </div>

        <div className='People'>
        <a href='/'>People</a>
          <h4>
            <p id='i-par'>Book your nanny</p>
            <p id='i-par' >Look for opportunity</p>
            <p id='i-par'>Join the community</p>
          </h4>
        </div>

        <div className='i-Contact'>
        <a href='/contact_us'>Contact Us</a>
          <h4>
            <p id='i-par'>Investors</p>
            <p id='i-par'>Blog</p>
            <p id='i-par'>butterflypeaks@gmail.com</p>
          </h4>
        </div>
        <ul>
						<li>
							{/* <h3 id="details">Newsletter</h3> */}
						</li>
						<li>
							<a href="/">Subscribe and get the latest updates</a>
						</li>
						<input id="email" type="text" placeholder="Enter your email" />

						<button id="submit" type="Submit">
							Submit
						</button>
					</ul>
      </div>
      <div className='coppyright'>
      <p id='copy'> &copy; 2023 butterflypeaksbabysitters.com</p>
      </div>
   </div>
  )
}

export default Footer
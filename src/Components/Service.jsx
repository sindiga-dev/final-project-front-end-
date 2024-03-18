import React from 'react'
import "../Styles/Service.css"
import img3 from "../Images/playing.webp"
import img4 from "../Images/diaper.webp"
import img5 from "../Images/trans.jpg"
import img6 from "../Images/meal.jpg"

function Service() {
  return (
    <div className='service'>
      <h1 id='g-serv' className='text-4xl'>Our Services</h1>
      <div className='service_box'>
        <div className='service_box_item'>
            <img id='s-img' src={img3}alt="" />
            {/* <h3>Discover</h3> */}
            <p>Entertaining Children with games and other activities</p>

        </div>
        <div className='service_box_item'>
           <img id='s-img' src={img5} alt="" />
            {/* <h3>Discover</h3> */}
            <p>Transporting children to and from school and helping children with their homework</p>

        </div>
        <div className='service_box_item'>
            <img id='s-img' src={img6} alt="" />
            {/* <h3>Discover</h3> */}
            <p>Preparing snacks and meals for children</p>

        </div>
        <div className='service_box_item'>
           <img id='s-img' src={img4} alt="" />
            {/* <h3>Discover</h3> */}
            <p>Changing diapers,Bathing children and putting them to bed</p>

        </div>
       
      </div>
    </div>
  )
}

export default Service
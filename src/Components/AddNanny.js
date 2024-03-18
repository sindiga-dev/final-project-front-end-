import React, {useState, } from 'react'
import "../Styles/AddNanny.css"

export default function AddNanny() {
    const [name, setName] = useState('');
    const [nannyPrice, setNannyPrice] = useState('');
    const [gender, setGender] = useState('');
    const [nannyLocation, setNannyLocation] = useState('');
    const [nanny_url, setNanny_url] = useState('');
       
    function submitForm(event) {
        event.preventDefault();
        const nanny_data = { name, nannyPrice, gender, nannyLocation, nanny_url}
        event.target.reset();

        fetch('https://bbcare.onrender.com/nannyData', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(nanny_data)
        })
            .then((res) => res.json())
            .then(() => {
                setName("")
                setNannyPrice("")
                setGender("")   
                setNannyLocation("")    
                setNanny_url("")   
            })
    }

    return (
        <div className='myform'>
            <form className="form-review" onSubmit={submitForm} >
              <h2>Book a Tour</h2>
           
                <label htmlFor="company-title">Full name</label>
                <input type="text" value={name} required placeholder='Enter Nannys name' onChange={(event) => setName(event.target.value)} />
               
                <label htmlFor="company-code"> Destination name</label>
                <input type="text" value={nannyPrice} required placeholder='Enter ratings' onChange={(event) => setNannyPrice(event.target.value)} />
           
                <label htmlFor="book-stockPrice">Gender</label>
                <input type="number" value={gender} required placeholder='Enter nanny gender' onChange={(event) => setGender(event.target.value)} />
          
                <label htmlFor="book-stockPrice">Location</label>
                <input type="number" value={nannyLocation} required placeholder='Enter nanny location' onChange={(event) => setNannyLocation(event.target.value)} />

                <label htmlFor="book-stockPrice">Photo/Avator</label>
                <input type="number" value={nanny_url} required placeholder='Enter avator url' onChange={(event) => setNanny_url(event.target.value)} />       
                
                <button id='my-booking-btn'>AddNanny</button>

            </form>
        </div >
    );
}
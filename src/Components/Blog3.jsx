import React from 'react'
import "../Styles/Blog3.css";
import img15 from "../Images/nanny.png";

function Blog3() {
  return (
    <div>
        <div className='good-nanny'>
            <h3  className='text-5xl'>What qualities make a good nanny?</h3>
            <img id='n-img' src={img15} alt="" />
            <h4 id='gg-nanny' className='text-2xl'>1. A good nanny has to be extremely patient with kids and learn how to deal with them properly.</h4>
            <p>Kids are not the easiest people to deal with, patience is really required when dealing with them.</p>
            <h4 id='gg-nanny'className='text-2xl'>2. Creative</h4>
            <p>Havig a creative nanny can improve your child's ability to concentrate well and solve problems.A creative nanny can also create activities that aren't boring or repetitive.This scenario would make the kid always excited about what to do on a daily.</p>
            <h4 id='gg-nanny'className='text-2xl'>3. Easy to get along with</h4>
            <p>This helps the child to quickly adapt to the nanny being around.As a nanny takes care of your kid,they can create a bond built with comort and trust.</p>
            <h4 id='gg-nanny'className='text-2xl'>4. Proactive and Responsible</h4>
            <p>A nanny can solve and manage circumstances such as sudden kid's tantrums and anger issues.This is adventageous for working parents since they know that the nanny can handle such iissues well without having to rely on them.They will do what can solve the matter and take responsibility.</p>
        </div>
    </div>
  )
}

export default Blog3
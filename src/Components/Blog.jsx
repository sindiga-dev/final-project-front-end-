import React from "react";
import "../Styles/Blog.css"
import {Link} from "react-router-dom"
import Footer from "./Footer";

function Blog() {
  return (
    <div>
      {/* <h1>Blog</h1>
      <p>
        This blog is a collection of blog posts. It is used by blog posts only
      </p> */}
      <div className="g-section">
        <div className="g-card">
          <div className="g-image-section img-one"></div>
          <div className="g-content">
            <h2> Diaper Changing Steps for Childcare Settings</h2>
            <p>How do you change a diaper after pooping?</p>
            <Link to="/blog/blog1"><button id="g-btn">Read More</button></Link>

          </div>
        </div>

        <div className="g-card">
          <div className="g-image-section img-two"></div>
          <div className="g-content">
            <h2> How do I start toilet training for my toddler?</h2>
            <p> When your child starts telling you their diaper is wet and needs to be
        removed,it's time to start potty training.Also you can start as early as
        when a child shows some understanding about toilet matters.It can happen
        between 18 months and three years...</p>
            <Link to="/blog/blog2"><button id="g-btn">Read More</button></Link>

          </div>
        </div>

        <div className="g-card">
          <div className="g-image-section img-three"></div>
          <div className="g-content">
            <h2>What qualities make a good nanny?</h2>
            <p>A good nanny has to be extremely patient with kids and learn how to deal with them properly...?</p>
            <Link to="/blog/blog3"><button id="g-btn">Read More</button></Link>

          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default Blog;

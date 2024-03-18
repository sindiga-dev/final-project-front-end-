import React from "react";
import "../Styles/Blog1.css";
import img7 from "../Images/blog1.png";
import img8 from "../Images/step1.jpg";
import img9 from "../Images/step2.jpg";
import img10 from "../Images/step3.jpg";
import img11 from "../Images/step4.jpg";
import img12 from "../Images/step5.jpg";
import img13 from "../Images/step6.jpg";
import img14 from "../Images/step7.jpg";
function Blog1() {
  return (
    <div className="blog1">
      <div className="g-diaper">
        <img id="g-img7" src={img7} alt="" />
        <h1 className="text-2xl">
          Diaper Changing Steps for Childcare Settings
        </h1>
        <p id="blog-p">How do you change a diaper after pooping?</p>
        <div className="g-prep">
          <div className="b-par">
            <h3 id="g-h3" className="text-2xl">1. Prepare</h3>
            <p id="blog-p">
              Cover the diaper changing surface with disposable liner.
            </p>
            <p id="blog-p">
              If you use diaper cream,dispense it onto a tissue now.
            </p>
            <p id="blog-p">
              Bring your supplies (e.g clean diaper,wipes,diaper
              cream,gloves,plastic bag for soiled clothing) to the diapering
              area.
            </p>
          </div>
          <img id="step" src={img8} alt="" />
        </div>
        <div className="g-prep">
          <div className="b-par">
            <h3  id="g-h3" className="text-2xl">2. Clean Child</h3>
            <p id="blog-p">
              Place the child on diapering surface and unfasten diaper.
            </p>
            <p id="blog-p">
              Clean the child's diaper area with disposable wipes.Always wipe
              front to back.
            </p>
            <p id="blog-p">
              Keep soiled diaper/clothing away from any surfaces that cannot be
              easily cleaned.
            </p>
            <p id="blog-p">Securely bag soiled clothing</p>
          </div>
          <img id="step" src={img9} alt="" />
        </div>
        <div className="g-prep">
          <div className="b-par">
            <h3  id="g-h3" className="text-2xl">3. Remove Trash</h3>
            <p id="blog-p">Place used wipes in the soiled diaper.</p>
            <p id="blog-p">
              Discard the soiled diaper and wipes in the trash can.
            </p>
            <p id="blog-p">Remove and discard gloves, if used.</p>
          </div>
          <img id="step" src={img10} alt="" />
        </div>
        <div className="g-prep">
          <div className="b-par">
            <h3  id="g-h3" className="text-2xl">4. Replace diaper</h3>
            <p id="blog-p">Slide a fresh diaper under the child. </p>
            <p id="blog-p">
              Apply diaper cream, if needed, with a tissue or a highly gloved
              finger.{" "}
            </p>
            <p id="blog-p">Fasten the diaper and dress the chid.</p>
          </div>
          <img id="step" src={img11} alt="" />
        </div>
        <div className="g-prep">
          <div className="b-par">
            <h3  id="g-h3" className="text-2xl">5. Wash Child's Hands</h3>
            <p id="blog-p">
              Wash child's hands with soap and water and place him or her in a
              safe,supervised area.
            </p>
          </div>
          <img id="step" src={img12} alt="" />
        </div>
        <div className="g-prep">
          <div className="b-par">
            <h3  id="g-h3" className="text-2xl">6. Clean Up</h3>
            <p id="blog-p">
              Remove liner from the changing surface and discard in the trash
              can.
            </p>
            <p id="blog-p">
              Wipe any visible soil with damp paper towel or a baby wipe.
            </p>
            <p id="blog-p">
              Wet the entire surface with disinfectant;make sure you read and
              follow the directions on the disinfecting spray,fluid or
              wipe.Choose disinfectant appropriate for the surface material.
            </p>
          </div>
          <img id="step" src={img13} alt="" />
        </div>
        <div className="g-prep">
          <div className="b-par">
            <h3  id="g-h3" className="text-2xl">7. Wash Your Hands</h3>
            <p id="blog-p">Wash your hands thoroghly with soap and water.</p>
          </div>
          <img id="step" src={img14} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Blog1;

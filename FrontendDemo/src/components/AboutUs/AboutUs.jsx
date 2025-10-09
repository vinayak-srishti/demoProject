import React from "react";
import img1 from "../../assets/images/img21.jpg";
import img2 from "../../assets/images/img20.jpg";
import img11 from "../../assets/images/adv1.avif";
import img12 from "../../assets/images/adv2.avif";
import img13 from "../../assets/images/adv4.avif";

import "./AboutUs.css";
function AboutUs() {
  return (
    <div className="container">
      <h1 className="aboutush1">About Us</h1>
      <div className="row">
        <div className="col-lg-6 col-md-6 col-sm-12">
          <img className="aboutusimg1" src={img1} alt="Card image cap" />
        </div>
        <div className="col-lg-6 col-md-6 col-sm-12">
          <div>
            <p className="text-justify" >
              Welcome to [Your Legal Practice Management System], your trusted
              partner in legal services. We are a team of dedicated and
              experienced legal professionals committed to providing
              high-quality legal solutions tailored to your needs.
            </p>

            <h3>Our Mission</h3>
            <p className="text-justify" >
              At [Your Legal Practice], our mission is to empower individuals
              and businesses by offering comprehensive legal services. We strive
              to deliver excellence in legal representation, advice, and case
              management, ensuring our clients achieve the best possible
              outcomes.
            </p>
          </div>
        </div>
      </div>

  

      <div className="mt-5">
        <h3>Our Team</h3>
        <p>
          Meet the faces behind [Your Legal Practice]. Our team is comprised of
          passionate advocates, legal experts, and support staff dedicated to
          delivering exceptional service. Together, we work collaboratively to
          ensure the success of your legal endeavors.
        </p>

        <div class="container">
          <div class="row">
            <div class="col-md-4">
              <div class="card h-100">
                <img
                  class=" card-img-top landinserviceimg"
                  src={img11}
                  alt="Card image cap"
                />
                <div class="card-body">
                  <h5 class="card-title">Elza</h5>
                  <p class="card-text">
                    Our experienced advocates provide expert legal advice on
                    various legal matters.{" "}
                  </p>
                </div>{" "}
              </div>
            </div>
            <div class="col-md-4">
              <div class="card h-100">
                <img
                  class="card-img-top landinserviceimg"
                  src={img12}
                  alt="Card image cap"
                />
                <div class="card-body">
                  <h5 class="card-title">Josphine</h5>
                  <p class="card-text">
                    Hire our skilled advocates to represent you in court.{" "}
                  </p>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="card h-100">
                <img
                  class="card-img-top landinserviceimg"
                  src={img13}
                  alt="Card image cap"
                />
                <div class="card-body">
                  <h5 class="card-title">Christine</h5>
                  <p class="card-text">
                    Track the status of your case in real-time through our
                    online portal.
                  </p>
                </div>{" "}
              </div>
            </div>
          </div><br/>
        </div>
      </div>

      
    </div>
  );
}

export default AboutUs;

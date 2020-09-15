import React from "react";

import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { ReactComponent as HeroImage } from "../assets/svgComponents/images/HeroImage(M).svg";
import { ReactComponent as HomepageAboutImg } from "../assets/svgComponents/images/HomepageAboutImg.svg";
import { ReactComponent as BoxSmileyBig } from "../assets/svgComponents/Icons/BoxsmileyBig.svg";
import { ReactComponent as RedPen } from "../assets/svgComponents/Icons/RedPen.svg";
import { ReactComponent as Book } from "../assets/svgComponents/Icons/Book.svg";

function HomePage(props) {
  return (
    <div className="hm-wrapper">
      <div style={{ textAlign: "center" }}>
        <h1 className="header-h1">Care Cast</h1>
        <HeroImage className="hm-hero" />
        <h3 className="hm-subtitle">Give yourself the gift of care today.</h3>
        <div className="hm-btn-container">
          <Link to="/signup">
            <Button variant="primary" className="btn-hm-page">
              Signup
            </Button>
          </Link>
        </div>
      </div>

      <h2 className="hm-sub-head"> What We Offer</h2>

      <div className="hm-content-wrapper">
        <div className=" hm-content-card ">
          <Book />
          <h2 className="text-center"> Journal</h2>
          <p className="hm-content-p">
            {" "}
            Release your inner thoughts. Write it out.
          </p>
          <hr className="hm-line-divider"></hr>
        </div>

        <div className=" hm-content-card ">
          <RedPen />
          <h2 className="text-center hm-content-card ">Care Tracker</h2>
          <p className="hm-content-p">
            Stay on top of your self-care by tracking your habits.
          </p>
          <hr className="hm-line-divider"></hr>
        </div>

        <div className="hm-content-card">
          <BoxSmileyBig />
          <h2 className="text-center"> Daily Affirmations</h2>
          <p className="hm-content-p">
            Set the Tone and start your day on a positive note
          </p>
        </div>
      </div>

      <h2 className="about-us-subhead">About Us</h2>

      <div className="closing-content-wrapper">
        <HomepageAboutImg className="hm-about" />
        <p className="hm-content-p-long">
          CareCast loves to do one thing, take care of you! You know who you
          are, you're the hardworking busybody, the person seeking inner
          connection, the envrionmentalist that's doing their part to save
          trees. You have a lot on your plate, and we're here to help you make
          sense of it in the good times and bad times. Because we <em>care.</em>
        </p>
        <div className="hm-btn-container">
          <Button className="btn-hm-page">Learn More</Button>
        </div>
      </div>
    </div>
  );
}

export default HomePage;

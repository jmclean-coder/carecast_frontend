import React from "react";

import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { ReactComponent as HeroImage } from "../assets/svgComponents/images/HeroImage(M).svg";
import { ReactComponent as HomepageAboutImg } from "../assets/svgComponents/images/HomepageAboutImg.svg";
import { ReactComponent as BoxSmileyBig} from "../assets/svgComponents/Icons/BoxsmileyBig.svg";
import { ReactComponent as RedPen} from "../assets/svgComponents/Icons/RedPen.svg";
import { ReactComponent as Book} from "../assets/svgComponents/Icons/Book.svg";

import Footer from '../containers/Footer'

function HomePage(props) {
  return (
    <div className="hm-wrapper">

        <div style={{textAlign: "center"}}>
          <h1 className="header-h1">Care Cast</h1>
          <HeroImage className="home-hero" />
          <h3 className="home-subtitle">
            Give yourself the gift of care today.
          </h3>
        <div className="home-btn-container">
        <Link to="/signup">
        <Button variant="primary" className="btn-home-page" >Signup</Button>
        </Link>
        </div>
        </div>



        <h2 className="home-sub-head">  What We Offer</h2>
      <div className="hm-content-wrapper">
        
        <div className=" hm-content-card ">
        <Book />
          <h2 className="text-center"> Journal</h2>
          <p className="home-content-p"> Release your inner thoughts. Write it out.</p>
        <hr className="hm-line-divider"></hr>
        </div>

        <div className=" hm-content-card " >
          <RedPen />
          <h2 className="text-center hm-content-card ">Care Tracker</h2>
          <p className="home-content-p">Stay on top of your self-care by tracking your habits.</p>
       <hr className="hm-line-divider"></hr>
       </div>
       
        <div className="hm-content-card">
          <BoxSmileyBig/>
          <h2 className="text-center"> Daily Affirmations</h2>
          <p className="home-content-p">Set the Tone and start your day on a positive note</p>
        </div>

      </div>

        <h2 className="about-us-subhead">About Us</h2>
        
        <div className='closing-content-wrapper'>
        <HomepageAboutImg className="home-about"/>
          <p className="home-content-p-long">
          CareCast loves to do one thing, take care of you! You know who you are, you're the hardworking busybody, the person seeking inner connection, the envrionmentalist that's doing their part to save trees. You have a lot on your plate, and we're here to help you make sense of it in the good times and bad times. Because we <em>care.</em> 
          </p>
          <div className="home-btn-container">
          <Button className='btn-home-page'>Learn More</Button>
          </div>
        </div>
    </div>
  );
}

export default HomePage;

import React from "react";
import CardDeck from "react-bootstrap/CardDeck";
import Card from "react-bootstrap/Card";
import { Button, Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { ReactComponent as HeroImage } from "../assets/svgComponents/images/HeroImage(M).svg";
import { ReactComponent as HomepageAboutImg } from "../assets/svgComponents/images/HomepageAboutImg.svg";
import { ReactComponent as BoxSmileyBig} from "../assets/svgComponents/Icons/BoxsmileyBig.svg";
// import './App.css';
import { Icon, InlineIcon } from '@iconify/react';
import bookIcon from '@iconify/icons-cil/book'
import writeIcon from '@iconify/icons-jam/write';
import Footer from '../components/homepage/Footer'

function HomePage(props) {
  return (
    <div className="header">
      <div className="t">
        <div>
          <h1 className="header-h1">Care Cast</h1>
          <HeroImage className="home-hero" />
          <h3 className="home-subtitle">
            Give yourself the gift of care today.
          </h3>
        </div>
        <div className="home-btn-container">
        <Button className="btn-home-page" onClick={()=> props.history.push("/signup")}>Signup</Button>
        </div>
      </div>
        <h2 className="home-sub-head">
          What We Offer
        </h2>

      <div className="hm-content-wrapper">
        <div className="text-center">
        <Icon icon={bookIcon} style={{color: '#f4cd9c', fontSize: '86px'}} />
          <h2 className="text-center"> Journal</h2>
          <p className="home-content-p"> Release your inner thoughts. Write it out.</p>
        </div>

        <div>
          <div className="text-center">
          <Icon icon={writeIcon} style={{color: '#ed8989', fontSize: '86px'}} />

          </div>

          <h2 className="text-center">Care Tracker</h2>
          <p className="home-content-p">Stay on top of your self-care by tracking your habits.</p>
        </div>

        <div>
          <div className="text-center">
            <BoxSmileyBig/>
          </div>

          <h2 className="text-center"> Daily Affirmations</h2>
          <p className="home-content-p">Set the Tone and start your day on a positive note</p>
        </div>
      </div>

      <div className="about-us">
        <h2 className="about-us-subhead">About Us</h2>
        <HomepageAboutImg className="home-about"/>
        <div className='closing-content-wrapper'>
          <p className="home-content-p">
          CareCast loves to do one thing, take care of you! You know who you are, you're the hardworking busybody, the person seeking inner connection, the envrionmentalist that's doing their part to save trees. You have a lot on your plate, and we're here to help you make sense of it in the good times and bad times. Because we <em>care.</em> 
          </p>
          <div className="home-btn-container">
          <Button className='btn-home-page'>Learn More</Button>
          </div>
        </div>
      </div>


      <Footer/>
    </div>
  );
}

export default HomePage;

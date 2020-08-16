import React from 'react'
import {ReactComponent as FlowerHeartLogoMobile} from '../assets/svgComponents/Icons/FlowerHeartLogoMobile.svg'
export default function Footer() {
    return (
        <div className="page-footer">
            <div className="hm-footer-c">
            <h3 style={{color: "#262626"}}>Company</h3>
            <p>About Us </p>
            <p>Blog </p>
            </div>

            <div className="hm-footer-c">
            <h3 style={{color: "#262626"}}>Support</h3>
            <p>Contact Us</p>
            </div>

            <div className="hm-footer-c">
            <h3 style={{color: "#262626"}}>Stay Connected</h3>
            </div>
           
          <div className="hm-footer-c">
            <FlowerHeartLogoMobile className="footerlogo"/>
            <h3 style={{color: "#262626"}}>Care Cast</h3>
            <p style={{ fontStyle: "normal", fontWeight: "normal", fontSize: "0.875em" }}>Copyright © 2020 Care Cast</p>
          </div>
        
        </div>
    )
}
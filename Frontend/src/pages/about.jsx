import { Choose } from "./construct";
import "../styles/about.css";
import { useState,useEffect } from "react";
import { Link,NavLink } from "react-router-dom";
import {FaFacebook,FaLinkedinIn,FaTwitter} from 'react-icons/fa'


function AboutPage() {
  
useEffect(()=>{
  window.scrollTo(0,0)
},[])


  return (
    <>
      <div className="overviews">
        <div className="hoab">
          <h3>
            <a href="/">Home</a>
          </h3>
          <h3>.</h3>
          <h3>
            <a href="/about">About Us</a>
          </h3>
        </div>

        <div className="abo">
          <h1>About Us</h1>
        </div>

        <div className="weare">
          <img src="/Images/wedo.jpg" alt="" />

          <div className="abso">
            <p className="who">WHO WE ARE</p>
            <h3>Otax Software Developers</h3>
            <p>
              We are a creative, full-service website design & digital marketing
              agency that specialises in creating world-class website & brand
              experiences for companies that desire to br=e on top & absolutely
              remain on top.
            </p>

            <p>
              Our main focus is Web Design and Development, Mobile Application
              Development, Digital Marketing/Advertsing, Branding and UI/UX
              Design. We believe in the simplicity aling with cutting edge
              technology that gets your company soaring.
            </p>

            <p>
              We are a result-focused digital agency that create data-driven
              website,campaigns and content.
            </p>

            <div className="count">
              <div className="one">
                <span className="num">450</span>
                <span>Happy Client</span>
              </div>

              <div className="one">
                <span className="num">95k</span>
                <span>Hours Worked</span>
              </div>

              <div className="one">
                <span className="num">500</span>
                <span>Projects Done</span>
              </div>
            </div>
          </div>
        </div>

        <div className="choose-us">
          <div className="awe">
            <p>WE ARE AWESOME</p>
            <h1>Why Choose Us</h1>
          </div>

          <div className="why-details">
            <Choose
              img=""
              alt=""
              head="Responsive Websites"
              talk="We design websites that looks grate and performs well on all screen sizes and devices, from widescreens desktops to the smallest smartphones. This is very essentials."
            />
            <Choose
              img=""
              alt=""
              head="Marketing Ready"
              talk="Most importantly, we build all of our wesites to be marketing ready, so that you can carry out any kind of marketing immediately, ready for sales and marketing."
            />
            <Choose
              img=""
              alt=""
              head="Fast Websites"
              talk="We build websites that are super fast, nobody wants a slow-loading website. This can be a source of frustration for users and a barrier to achieving the desired goal on your website."
            />
            <Choose
              img=""
              alt=""
              head="Customer Support"
              talk="We provide quality technical support services, this plays a crucial role for our clients, helping to maintain and ensures their websites run smoothly."
            />
          </div>
        </div>
      </div>
      
       
      <footer>
        <div className="follow">
          <div className="social">
            <a href="https://www.facebook.com/profile.php?id=61573047594370">
            <FaFacebook style={{width:"",fill:"",color:"",border:"blue"}}/>
            </a>
          <a href="https://www.linkedin.com/in/christian-otasowie-074820355?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
          <FaLinkedinIn style={{width:"",fill:"lightblue",color:"white"}}/>
          </a>

        <a href="https://x.com/xristen_ot?t=TnsVUcJcgQSPk5vp_EvSIw&s=09">
          <FaTwitter style={{width:"",fill:"lightblue",color:"white"}}/>
        </a>

        </div>
        </div>
        
        <p>Copyrights &copy; 2025 OTAXY. Buld by Chris Tech</p>
      </footer>
    </>
  );
}

export default AboutPage;

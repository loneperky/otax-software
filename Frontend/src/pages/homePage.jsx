import Product from "./construct";
import { Test } from "./construct";
import { NavLink, Link } from "react-router-dom";
import { useEffect, useId, useState } from "react";
import {FaFacebook,FaLinkedinIn,FaTwitter} from 'react-icons/fa'

import "../styles/app.css";

function HomePage() {
  const [myWork, setWork] = useState("Web Design");
  const [email,setEmail] = useState("")

  useEffect(()=>{
    window.scrollTo(0,0)
  },[]);

  return (
    <>
      {/* <div className="quote-coll">
        <p className="qu">Welc ome to Otax technologies</p>
      </div> */}



      <div className="first-page">
        <div className="hero-section1">
          <div className="intro">
            <p>🤩Award-winning digital services</p>
            <i class="fa fa-apple" aria-hidden="true"></i>
          </div>
          <div className="hero-sect1">
            <h1 className="change">Creative studio focused on</h1>
            <h1>{myWork}</h1>
          </div>

          <div className="hero-sect2">
           
            <div className="collect">
              <input
                type="email"
                className="email"
                value={email}
                onChange={(e)=> setEmail(e.target.value)}
                placeholder="Enter your email address"
              />
              <button className="btn">Message Us</button>
            </div>
          </div>
        </div>

        <div className="hero-img">
          <img src="/Images/meet(1).jpg" alt="" />
        </div>
      </div>

      <div className="combine-section1">
        <div className="pic-slide">
          <img src="/Images/meet(3).jpg" alt="" />
          <div className="count-imgg">
            <div className="count">
              <div className="ten">
                <h1>10+</h1>
                <p>
                  Years of <br />
                  Experience
                </p>
              </div>
              <div className="twelve">
                <h1>1.2K</h1>
                <p>
                  Happy <br />
                  Customers
                </p>
              </div>
            </div>
            <img src="/Images/top.png" alt="" />
          </div>
        </div>

        <div className="talky-sect">
          <p className="intro gate">😎 Your gateway to digital success </p>
          <h1>Defining the future of online experiences!</h1>
          <p className="embrace">
            Embrace a new era of digital success with OTAX. Our team combines
            cutting edge design with robust development to deliver websites that
            captivate and convert.
          </p>

          <ul>
            <li>Emphasis on ROI-driven solutions</li>
            <li>Expert team with diverse skills</li>
            <li>Proven track record of delivering results</li>
          </ul>
          <button className="btn2">Discover more</button>
        </div>
      </div>

      <div className="expertise" id="services">
        <div className="specialise">
          <p>🛹 Innovative solutions, Measureable results</p>
          <h1>We specialize in the following services</h1>
        </div>
        <div className="prod">
          <Product
            head="Digital Marketing"
            talk="Growing brands online through digital channels."
          />
          <Product
            head="Product Design"
            talk="Creating products that users love and businesses need."
          />
          <Product
            head="Web Design"
            talk="Designing websites that are visually appealing & user-friendly."
          />
          <Product
            head="UI/UX Design"
            talk="Creating user-friendly and responsive websites and web apps."
          />
          <Product
            head="Business Strategy"
            talk="Developing plans to achieve business goals."
          />
          <Product
            head="Research"
            talk="Gathering and analyzing data to utilize decision-making."
          />
          <Product
            head="Web Development"
            talk="Building and maintaining websites and web applications."
          />
          <Product
            head="Backend Development"
            talk="Building and maintaining Restful Apis."
          />
          <Product
            head="Brand Design"
            talk="Creating brands that are uniwue,memorable,and meaningful."
          />
        </div>
      </div>
<div className="cobi">
<div className="succeed-test">
        <div className="succed-big">
          <div className="succeed">
            <p className="intro">💖 Real results from real clients</p>
            <h1>See how we've helped our clients succeed</h1>
            <h3>More than 1500+ agencies using OTAXY</h3>
          </div>
        </div>

        <div className="testimony-hero">
          <img src="/Images/meet(2).jpg" alt="" />
        </div>
      </div>

      <div className="email-collect">
        <div className="news">
          <p className="intro">Connect with us 🛹</p>
           <h1>Let's talk about your digital agency goals</h1>

          <div className="connect">
            <input
              type="text"
              className=""
              placeholder="Your email address"
            />
            <button className="">Message Us</button>
          </div>
        </div>

        <ul className="numb">
          <li>Call on: 09126785031 </li>
          <li>Time: 9am to 5pm (Sunday close)</li>
          <li>Email: christianotasowie575@gmail.com</li>
        </ul>
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

export default HomePage;

import { Choose } from "./construct";
import "../styles/about.css";
import { useState } from "react";
import { Link,NavLink } from "react-router-dom";
import {FaFacebook} from 'react-icons/fa'
import {FaDiscord} from 'react-icons/fa'
import {FaApple} from 'react-icons/fa'


function AboutPage() {
  const [num, setNum] = useState(0);

  const setNum1 = () => {
    while (true) {
      setNum(num + 1);
      if (num == 450) {
        break;
      }
    }
  };

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
        <div className="combine-foot">
          <div className="Otax">
            <h1> OTAX TECH </h1>
            <p className="our">
              Our altimate goal is to provide customers with <br /> the ultimate
              satisfaction they deserve and giving them <br /> a nice value for
              their money.
            </p>
          </div>
          <div className="quick">
            <h2>Quick links</h2>
            <li>
              <NavLink>About us</NavLink>
            </li>
            <li>
              <NavLink>Contact us</NavLink>
            </li>
            <li>
              <NavLink>Careers</NavLink>
            </li>
            <li>
              <NavLink>Become a partner</NavLink>
            </li>
          </div>
          <div className="community">
            <h2>Documents</h2>
            <li>
              <NavLink>Supports</NavLink>
            </li>
            <li>
              <NavLink>Faqs</NavLink>
            </li>
            <li>
              <NavLink>Privacy Policy</NavLink>
            </li>
            <li>
              <NavLink>Terms & condition</NavLink>
            </li>
          </div>
          <div className="follow">
            <Link href="">
              <FaFacebook  style={{color:'white'}}/>
            </Link>
            
            <Link href="">
              <FaApple style={{color:'white'}} />
            </Link>

            <Link href="">
              <FaDiscord style={{color:'white'}}/>  
            </Link>

            
          </div>
        </div>
        <p>Copyrights &copy; 2024 OTAXY. Buld by Chris Tech</p>
      </footer>
    </>
  );
}

export default AboutPage;

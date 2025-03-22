import Product from "./construct";
import "../styles/serve.css";
import { NavLink, Link } from "react-router-dom";
import {FaFacebook,FaLinkedinIn,FaTwitter} from 'react-icons/fa'

function ServicePage() {
  return (
    <>
      <div className="overview">
        <div className="special-talk">
          <div className="com1">
            <div className="comb-stuff">
              <div>
                <p className="intro">We offer various services.🤩</p>
              </div>
              <div className="we">
                <h1>OUR SERVICES</h1>
              </div>
              <p className="service">
                With OTAX Technologies all your digital and web based services
                are in the right hands with our expert team willing to take on
                any Job you are willing to offer and we promsie to deliver
                within our power to meet your expectations.
              </p>
              <p className="service">
                Our Teams of Developers are proficient in cutting edge
                technologies to meet your needs and turn that idea of yours into
                reality.
              </p>
              <p className="service">
                We also train individuals who are interested in becoming a web
                developer, software development, iOs and Android app developer
                our team of hard working and expert in top cutting edge
                technologies will be more than glad to impact the knowledge thay
                have to those who are interested.
              </p>
            </div>

            <img src="/Images/coding.jpg" alt="" />
          </div>

          <div className="team">
            <div className="lang">
              <h3>Top Programming languages.</h3>
              <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>JAVASCRIPT</li>
                <li>PYTHON</li>
                <li>NODEJS</li>
                <li>POSTGRESQL</li>
              </ul>

              <h3>Top Frameworks</h3>
              <ul>
                <li>JQUERY</li>
                <li>REACTJS</li>
                <li>EXPRESSJS</li>
                <li>DJANGO</li>
                <li>BOOSTRAP</li>
              </ul>
            </div>
            <img src="/Images/idelcomp.jpg" alt="" />
          </div>
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
            head="App Development"
            talk="Creating that web application for your business and industry."
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

      <hr />
       
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
        
        <p>Copyrights &copy; 2025 <b><a href="/">otax software.</a></b> Buld by Chris Tech</p>
      </footer>   </>
  );
}

export default ServicePage;

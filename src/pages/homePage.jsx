import Product from "./construct";
import { Test } from "./construct";
import { NavLink, Link } from "react-router-dom";
import { useEffect, useId, useState } from "react";
import "../styles/app.css";

function HomePage() {
  const [myWork, setWork] = useState("Web Design");

  return (
    <>
      <div className="quote-coll">
        <p className="qu">Welc ome to Otax technologies</p>
        {/* <p>X</p> */}
      </div>

      <div className="first-page">
        <div className="hero-section1">
          <div className="intro">
            <p>🤩Award-winning digital services</p>
          </div>
          <div className="hero-sect1">
            <h1 className="change">Creative studio focused on</h1>
            <h1>{myWork}</h1>
          </div>

          <div className="hero-sect2">
            <p>
              From concept to execution, we deliver web designs that make an
              impact let your brand shine with our innovative and visually
              stunning websites.
            </p>
            <div className="collect">
              <input
                type="email"
                className="email"
                placeholder="Enter your email address"
              />
              <button className="btn">Message Us</button>
            </div>
          </div>
        </div>

        <div className="hero-img">
          <img src="./Images/01(2).jpg" alt="" />
        </div>
      </div>

      <div className="combine-section1">
        <div className="pic-slide">
          <img src="./Images/02(3).jpg" alt="" />
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
            <img src="./Images/01(3).jpg" alt="" />
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

      <div className="succeed-test">
        <div className="succed-big">
          <div className="succeed">
            <p className="intro">💖 Real results from real clients</p>
            <h1>See how we've helped our clients succeed</h1>
            <h3>More than 1500+ agencies using OTAXY</h3>
          </div>
          <div className="testimonial">
            <div className="test1">
              <p>
                I highly recommend OTAX_TECH to anyone looking for highly
                qualify website and customer satisfaction.
              </p>
              <div className="img-name">
                <img src="./Images/01(4).jpg" alt="" />
                <p>By Nick Mac</p>
              </div>
            </div>
            <div className="test2">
              <p>
                I highly recommend OTAX_TECH to anyone looking for highly
                qualify website and customer satisfaction.
              </p>
              <div className="img-name">
                <img src="./Images/06.jpg" alt="" />
                <p>By Nick Mac</p>
              </div>
            </div>
            <div className="test3">
              <p>
                I highly recommend OTAX_TECH to anyone looking for highly
                qualify website and customer satisfaction.
              </p>
              <div className="img-name">
                <img src="./Images/09.jpg" alt="" />
                <p>By Nick Mac</p>
              </div>
            </div>
            <div className="test4">
              <p>
                I highly recommend OTAX_TECH to anyone looking for highly
                qualify website and customer satisfaction.
              </p>
              <div className="img-name">
                <img src="./Images/05.jpg" alt="" />
                {/* <p>By Megan Ruth</p> */}
              </div>
            </div>
          </div>
        </div>

        <div className="testimony-hero">
          <img src="./Images/03(2).jpg" alt="" />
        </div>
      </div>

      <div className="email-collect">
        <div className="first-collect">
          <p className="intro connect">Connect with us 🛹</p>
          <h1>
            Let's talk about your digital <br /> agency goals
          </h1>
          <div className="collect collect-ema">
            <input
              type="text"
              className="email"
              placeholder="Your email address"
            />
            <button className="btn1">Subcribe</button>
          </div>
        </div>

        <ul>
          <li>Call on: 09126785031 </li>
          <li>Time: 9am to 5pm (Sunday close)</li>
          <li>Email: info@Otax.com</li>
        </ul>
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
            <NavLink>
              <img src="./Images/whatsapp.png" alt="" />
            </NavLink>
            <Link>
              {" "}
              <img src="./Images/whatsapp.png" alt="" />
            </Link>

            <img src="./Images/whatsapp.png" alt="" />
          </div>
        </div>
        <p>Copyrights &copy; 2024 OTAXY. Buld by Chris Tech</p>
      </footer>
    </>
  );
}

export default HomePage;

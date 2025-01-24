import "../styles/contact.css";
import { NavLink, Link } from "react-router-dom";
import {FaFacebook} from 'react-icons/fa'
import {FaDiscord} from 'react-icons/fa'
import {FaApple} from 'react-icons/fa'
function ContactPage() {
  return (
    <>
      <div className="overviews">
        <div className="head">
          <p className="today">Contact us today</p>
        </div>
        <div className="title">
          <h1>OTAX TECHNOLOGIES</h1>
        </div>
        <div className="us">
          <h3>CONTACT US</h3>
          <p>Get in touch with us easily.</p>
        </div>
        <div className="info">
          <div className="numbers">
            <div className="num1">
              <h3>CALL NUMBERS:</h3>
              <ul>
                <li>09126785031</li>
                <li>09153383705</li>
              </ul>
            </div>
            <div className="num1">
              <h3>WHATSAPP NUMBERS:</h3>
              <ul>
                <li>09126785031</li>
                <li>08116397016</li>
              </ul>
            </div>
            <div className="num1">
              <h3>EMAIL ADDRESS:</h3>
              <ul>
                <li>support@0taxtechnologies.com</li>
                <li>info@otaxtech.com</li>
              </ul>
            </div>
          </div>

          <div className="send-details">
            <h2>SEND MESSAGE</h2>
            <form action="">
              <input type="text" placeholder="FULLNAME" />
              <br />
              <input type="email" placeholder="EMAIL" />
              <br />
              <input type="text" placeholder="PHONE" />
              <br />
              <textarea name="" id="" placeholder="MESSAGE"></textarea>
              <br />
              <button type="submit">SEND MESSAGE</button>
            </form>
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
              <NavLink>Services</NavLink>
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

export default ContactPage;

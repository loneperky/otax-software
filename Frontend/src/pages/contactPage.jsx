import { Link } from "react-router-dom"
import "../styles/contact.css"
import { useEffect } from "react";
import {
  FaWhatsapp,
  FaLink,
  FaPhone,
  FaFacebook,
  FaInstagram,
  FaTiktok,
  FaTwitter,
  FaEnvelope,
} from "react-icons/fa";


function ContactPage() {

   useEffect(()=>{
      window.scrollTo(0,0)
    },[]);

  return (
    
    <>
      <div className="overall">
        <div className="head">
          <h1>Contact Us</h1>
        </div>
        <div className="contact-detal">
          <div className="con-hero1">
            <button>Get in touch</button>
            <h1>We would like to hear to hear from you.</h1>
            <p>
              We're here to help Whether you have questions about our
              services,need support,or want to learn more about joining our
              network, feel free to reach out through any of the options below.
            </p>
          </div>
            
          <div className="con-hero2">
            <div className="container1">
              <div className="contd">
                <div className="log">
                  <FaWhatsapp />
                </div>
                <h3>Chat our support</h3>
                <p>We are here to help</p>

                <a
                  href="https://wa.me/2349126785031?text=I%20Want%20to%20Learn%20Web%20Development"
                  target="_blank"
                >
                  Chat On WhatsApp
                </a>
              </div>

              <div className="contd">
                <div className="log">
                  <FaPhone />
                </div>
                <h3>Call us</h3>
                <p>Mon-Fri from 8am to 5pm</p>
                <a href="tel:2349153383705" target="_blank">
                  Call us Now
                </a>
              </div>
            </div>

            <div className="container2">
              <div className="contd">
                <div className="log">
                  <FaEnvelope />
                </div>
                <h3>Send us a mail</h3>
                <p>Speak to us via mail</p>
                <a href="mailto:otasowiechristian@gmail.com" target="_blank">
                  Send us an Email
                </a>
              </div>

              <div className="contd">
                <div className="log">
                  <FaLink />
                </div>
                <h3>Social Media</h3>
                <p>Connect with us</p>
                <div className="logg">
                  <FaFacebook style={{cursor:'pointer'}}/>
                  <FaInstagram  style={{cursor:'pointer'}}/>
                  <FaTiktok  style={{cursor:'pointer'}}/>
                  <FaTwitter  style={{cursor:'pointer'}}/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactPage;

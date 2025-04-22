import React from 'react'
import { FaFacebook,FaTwitter,FaLinkedinIn } from 'react-icons/fa'

const Footer = () => {
  return (
    <>
      <footer>
        <div className="follow">
          <div className="social">
            <a href="https://www.facebook.com/profile.php?id=61573047594370">
            <FaFacebook style={{fontSize:"2em",fill:"",color:"",border:"blue"}}/>
            </a>
          <a href="https://www.linkedin.com/in/christian-otasowie-074820355?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
          <FaLinkedinIn style={{fontSize:"2em",fill:"lightblue",color:"white"}}/>
          </a>

        <a href="https://x.com/xristen_ot?t=TnsVUcJcgQSPk5vp_EvSIw&s=09">
          <FaTwitter style={{fontSize:"2em",fill:"lightblue",color:"white"}}/>
        </a>

        </div>
        </div>
        
        <p>&copy; 2025, OtasxSoftware inc.</p>
      </footer>
    </>
  )
}

export default Footer
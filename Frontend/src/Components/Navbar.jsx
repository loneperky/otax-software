import React, { useState } from 'react'
import { NavLink,Link } from 'react-router-dom'
import { Drop } from '../pages/construct'


function Navbar(){
   const [Show,setShow] = useState(false)

   function Menu(){
      setShow(!Show)
   }
    return(
        <>
    <nav>
      <div className="logo">
         <h1>OTAXY</h1>
       
     </div>
         <ul className='menu-items'>
            <li>
                <NavLink to="/">Home</NavLink>
             </li>
             <li>
                <NavLink to="/services">Services</NavLink>
             </li>
             <li>
                <NavLink to="/about">About us</NavLink>
             </li>
             <li>
                <NavLink to="/">Project</NavLink>
             </li>
             <li>
                <NavLink to="/contact">Contact Us</NavLink>
             </li>
          </ul>
            <div className="quote">
               <button className='quote'>Request A Quote </button>
            </div>
          <div className="menu" onClick={Menu}>
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
          </div>        
    </nav>
       { Show && (
            <div className="dropdown">
             <ul>
               <li>
                <Link to="/" onClick={Menu}>HOME</Link>
               </li>
       
              <li>
               <Link to="/services" onClick={Menu}>SERVICES</Link>
              </li>
       
              <li>
               <Link to="/about" onClick={Menu}>ABOUT</Link>
              </li>
       
              <li>
               <Link to="/project" onClick={Menu}>PROJECT</Link>
              </li>
       
              <li>
               <Link to="/contact" onClick={Menu}>CONTACT US</Link>
              </li>
       
             </ul>
           </div>)}
        </>
    )
}


export default Navbar
import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
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
               <button className='quote'>Request A Quote</button>
            </div>
          <div className="menu" onClick={Menu}>
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
          </div>        
    </nav>
       { Show? <Drop />:null}
        </>
    )
}


export default Navbar
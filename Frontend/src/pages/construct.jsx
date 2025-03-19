import { NavLink,Link } from "react-router-dom"
import '../styles/about.css'
function Product(props){
  return(
    <>
    <div className="product">
     <h2>{props.head}</h2>
      <p>{props.talk}</p>
     
      <p className="know"><NavLink to="">Know more</NavLink></p>
    </div>
    </>
  )
}

function Test(props){
  return(
    <>
      <div className="testimonies">
        <div className="test1">
          <div className="talk-img">
            <img src={props.img} alt={props.alt} />
            <p>{props.who}</p>
          </div>
          <p>{props.talk}</p>
          <p>{props.tak}</p>
        </div>
      </div>
    </>
  )
}

function Drop(){
  return(
    <>
    
    <div className="dropdown">
      <ul>
        <li>
         <Link to="/">HOME</Link>
        </li>

       <li>
        <Link to="/services">SERVICES</Link>
       </li>

       <li>
        <Link to="/about">ABOUT</Link>
       </li>

       <li>
        <Link to="/project">PROJECT</Link>
       </li>

       <li>
        <Link to="/contact">CONTACT US</Link>
       </li>

      </ul>
    </div>
    
    </>
  )
}

function Choose(props){
  return(
    <>
    <div className="choose">
      <img src={props.img} alt={props.alt} />
      <h2>{props.head}</h2>
      <p>{props.talk}</p>
    </div>
    
    </>
  )
}

export{Test,Drop,Choose}
export default Product
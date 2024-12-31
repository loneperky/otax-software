import { NavLink,Link } from "react-router-dom"
import '../styles/about.css'
function Product(props){
  return(
    <>
    <div className="product">
     <h2>{props.head}</h2>
      <p>{props.talk}</p>
     
      <p className="know"><NavLink>Know more</NavLink></p>
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
                <a href="/">HOME</a>
             </li>
             <li>
                <a href="/services">SERVICE</a>
             </li>
             <li>
                <a href="/about">ABOUT US</a>
             </li>
             <li>
              <a href="/project">PROJECT</a>
             </li>
             <li>
              <a href="/contact">CONTACT US</a>
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
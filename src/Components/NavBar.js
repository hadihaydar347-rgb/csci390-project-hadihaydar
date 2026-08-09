import React from 'react'
import logo from '../assests/Nabatieh_2017-08.png';
import {Link} from 'react-router-dom';

const NavBar = ()=> {
  return (
     <div className="navbar">
        <Link to ="/"> <img src = {logo} height={50}  width ={40} alt= "logo" /> </Link>  
    
   <div className="rightSide">
   <Link to="/" > home</Link>
   <Link to ="/About"> about</Link>npm start
   <Link to ="/Guests"> guests</Link>
   <Link to ="/Gallery">gallery</Link>
  <Link to = "/Contact">contact</Link>

   </div>
    </div>
  )
}
export default  NavBar;
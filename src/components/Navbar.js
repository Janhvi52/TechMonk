import "./Navbar.css"
import my from "./logo.png"
import React, { useState } from 'react'
import {Link} from "react-router-dom"
import {FaBars,FaTimes} from "react-icons/fa"

const Navbar =()=>{

    const [click,setClick]=useState(false);
    const handleClick= ()=>setClick(!click);

    const [color,setcolor]=useState(false);
    const changecolor=()=>{
        if(window.scrollY>=100){
        setcolor(true);
    }else{
        setcolor(false);
    }
};
window.addEventListener("scroll",changecolor)

    return(
        <div className={color? "header header-bg":"header"}>
            <Link to="/">
                <img src={my} alt="no-image-found"/>
            </Link>
            <ul className={click ? "nav-menu active":"nav-menu"}>
                <li>
                    <Link to="/home">Home</Link>
                </li>
                <li>
                    <Link to="/">Join Us</Link>
                </li>
                <li>
                    <Link to="/About">About</Link>
                </li>
                <li>
                    <Link to="/Resources">Resources</Link>
                </li>
                <li>
                    <Link to="/Chatroom">ChatRoom</Link>
                </li>
                <li>
                    <Link to="/Signin">Sign In</Link>
                </li>
            </ul>
            <div className="hamburger" onClick={handleClick}>
              {click?(
                <FaTimes size={20} style={{color:"#000"}}/>
                
              ):(
                <FaBars size={20} style={{color:"#000"}}/>
              )}
            </div>
        </div>
    )
}
export default Navbar
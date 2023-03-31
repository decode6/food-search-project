import React from "react";
import  './Footer.css'
import { FaFacebookSquare , FaInstagram , FaLinkedin} from "react-icons/fa";
import { Link } from "react-router-dom";

function Footer(){
    return(
        <div className="body">
            <footer className="footer" >
                <ul className="social-icon">
                    <li ><a href="#"><FaFacebookSquare/></a></li>
                    <li ><a href="#1"><FaInstagram/></a></li>
                    <li ><a href="#2"><FaLinkedin/></a></li>
                </ul>
                <ul className="menu">
                    <li><Link className="a" to='/'>Home</Link></li>
                    <li><Link className="a" to='/recipe'>Recipe</Link></li>
                    <li><Link className="a" to='/save'>Save</Link></li>
                    <li><Link className="a" to='/about-us'>About Us</Link></li>
                </ul>

                <p>©2023 amitkumar696945@gmail.com | All Right Reserved</p>
                
            </footer>
        </div>
    )
}

export default Footer;
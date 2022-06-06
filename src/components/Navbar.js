import logo from "../images/minecraft-logo.png"
import {
    Link
  } from "react-router-dom";

export default function Navbar() {
    return(
        <nav class="navbar is-transparent">
            <div className="container">
                <div class="navbar-brand">
                    <Link to="/" class="navbar-item">
                        <img src={logo} />
                    </Link>
                    <Link to="/" class="navbar-item">
                        BFF SERVER
                    </Link>
                </div>
                <div class="navbar-menu">
                    <div class="navbar-end">
                        <Link to="/" class="navbar-item">Home</Link>
                        <Link to="/news" class="navbar-item">News</Link>  
                        <Link to="/rules" class="navbar-item">Rules</Link>  
                    </div>
                </div>
            </div>
        </nav>
    );
    
}
import React from 'react';
import { Link } from 'react-router-dom';
import "./Header.css";

const Logout = () =>{
    // Stergerea token 
    localStorage.removeItem('token');
    window.location = '/login';
    
}

const Header = () => {
    return (
    <header className="menu">
        <nav>
            <ul>
                <li>
                    <Link to="/">Root</Link>
                </li>
                
                <li>
                    <Link to="/home">Home</Link>
                </li>
                
                <li>
                    <Link to ="/Login">Login</Link>
                </li>
                <li>
                    <button 
                        className="btn btn-warning" 
                        onClick={Logout}>
                        Logout
                    </button>
                </li>
                
                
            </ul>
        </nav>
    
    </header>
    )
}

export default Header;
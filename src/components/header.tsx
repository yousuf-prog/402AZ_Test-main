import React from "react";
import { Link } from "react-router-dom";

export default function Home() {

    return (
        <nav className="navbar" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                <a className="navbar-item" href="https://bulma.io">
                    <img src="data:image/png;base64,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" width="70" height="28" />
                </a>

                <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </a>
            </div>

            <div id="navbarBasicExample" className="navbar-menu">
                <div className="navbar-start">
                    
                    <Link to='/' className='navbar-item'>Home</Link>
                    <Link to='/about' className='navbar-item'>About</Link>
                    <Link to='/movies' className='navbar-item'>Movies</Link>
              
                    
                </div>
                <div>
                <button className="button is-link is-outlined">
                Signup
                </button>
                </div>
                
                
            </div>
        </nav>
    );
}

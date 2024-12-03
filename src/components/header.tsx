import React from "react";
import { Link } from "react-router-dom";

export default function Home() {

    return (
        <nav className="navbar" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                <a className="navbar-item" href="https://bulma.io">
                    <img src="https://images.ctfassets.net/4cd45et68cgf/Rx83JoRDMkYNlMC9MKzcB/2b14d5a59fc3937afd3f03191e19502d/Netflix-Symbol.png?w=700&h=456" width="70" height="28" />
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

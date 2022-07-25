import React from 'react';
import {NavLink} from "react-router-dom"

const Navigation = () => {
    return (
        <nav className='mynave'>
            <div className='navigation'>
                <div className='dazy'>
                    Dazy Exelle 
                </div>
                <ul>
                    <NavLink to="/" className={(nav)=>(nav.isActive ? "nav-active" : "")}>
                        <li>Accueil</li>
                    </NavLink>

                    <NavLink to="/apropos"  className={(nav)=>(nav.isActive ? "nav-active" : "")}>
                        <li>A-propos</li>
                    </NavLink>

                    <NavLink to="/competance"  className={(nav)=>(nav.isActive ? "nav-active" : "")}>
                        <li>Competance</li>
                    </NavLink>

                    <NavLink to="/contact"  className={(nav)=>(nav.isActive ? "nav-active" : "")}>
                        <li>Contact</li>
                    </NavLink>
                </ul>
            </div>
        </nav>
        
    );
};

export default Navigation;
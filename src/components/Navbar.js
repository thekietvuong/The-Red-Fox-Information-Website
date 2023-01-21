import React from "react"
import { NavLink } from "react-router-dom";

import './Navbar.css'
import { GiFox } from "react-icons/gi";
import { GiPositionMarker } from "react-icons/gi";
import { TbMeat } from "react-icons/tb";
import { GiNewBorn } from "react-icons/gi";
import { TbMessageCircle } from "react-icons/tb";
import { RiInformationLine } from "react-icons/ri";
import logo from '../img/logo.png';

function Navbar() {
    return(
        <div className="navbar-container">
            <a className="navbar-logo">
                <img className="logo" src={logo}></img>
                <span>RED</span>FOX
            </a>
            <ul className="nav-menu">
                <li className="nav-item">
                    <NavLink to="/" 
                        className={({isActive}) => "nav-link" + (isActive ? " activated" : "")}
                    >
                        <GiFox className="nav-icon"/>
                        <div className="link-text">DESCRIPTION</div>
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/range" 
                        className={({isActive}) => "nav-link" + (isActive ? " activated" : "")}
                    >
                        <GiPositionMarker className="nav-icon"/>
                        <div className="link-text">RANGE</div>
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/diet" 
                        className={({isActive}) => "nav-link" + (isActive ? " activated" : "")}
                    >
                        <TbMeat className="nav-icon"/>
                        <div className="link-text">DIET</div>
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/life-history" 
                        className={({isActive}) => "nav-link" + (isActive ? " activated" : "")}
                    >
                        <GiNewBorn className="nav-icon"/>
                        <div className="link-text">LIFE HISTORY</div>
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/conservation"
                        className={({isActive}) => "nav-link" + (isActive ? " activated" : "")}
                    >
                        <TbMessageCircle className="nav-icon"/>
                        <div className="link-text">CONSERVATION</div>
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/about" className="nav-link">
                        <RiInformationLine className="nav-icon"/>
                        <div className="link-text">ABOUT</div>
                    </NavLink>
                </li>
            </ul>
        </div>
    );
}

export default Navbar;
import React from "react";
import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import {FiLogOut} from "@react-icons/all-files/fi/FiLogOut";
import './Header.css';
const Header = () => {
    const navRef = useRef();
    const showNavbar = () => {
        navRef.current.classList.toggle("responsive_nav");
    };
    return(
        <>
            <header>
                <h3>LOGO</h3>
                <nav ref={navRef} className="menu-bar">
                    <a href="/management/">CHECK</a>
                    <a href="/management/account">ACCOUNTS</a>
                    <a href="/management/history">HISTORY</a>
                    <button
                        className="nav-btn nav-close-btn"
                        onClick={showNavbar}>
                        <FaTimes />
                    </button>
                </nav>
                <button className="nav-btn" onClick={showNavbar}>
                    <FaBars />
                </button>
                <button  className="logout-btn">
                    <FiLogOut/>
                </button>
            </header>
        </>
    )
}
export default Header;
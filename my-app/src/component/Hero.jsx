import React from "react";
import "./Hero.css";
import Logo from '../Images/Logo.png'

export default function HeroSection() {
  return (
    <div className="hero-wrapper">
      {/* Navbar */}
      <nav className="navbar">
        <input type="checkbox" id="check" />
        <label for="check" className="check-btn" >
         <i class="fa-solid fa-bars"></i>
        </label>
        <div className="logo">
          rvadex
        </div>
        <ul className="nav-links">
          <li><a href="#Home">Home</a></li>
          <li><a href="#About">About</a></li>
          <li><a href="#Extension">Extension</a></li>
          <li><a href="#Feature">Features</a></li>
       
          
          <li><a href="#Footer">FAQ</a></li>
        </ul>
        <button className="download-btn">Download Now</button>
      </nav>

      {/* Hero Content */}
      <div id="Home" className="hero-content">
        <h1>
          The <span className="highlight">All-in-One</span> Decentralized Wallet
        </h1>
        <p>
          ARVADEX is a secure, multi-chain wallet that brings everything together 
          in one place. Manage assets across chains with built-in anti-drain 
          protection to keep your funds safe from malicious approvals and drains.
        </p>
        <div className="hero-buttons">
          <button className="primary-btn" onClick={() => window.location.href = "https://t.me/arvadexofficial"}>Telegram</button>
          <button className="secondary-btn" onClick={() => window.location.href = "https://x.com/arvadex"}>Twitter</button>
         
        </div>
      </div>

      {/* Hero Image */}
      <div className="hero-image">
        <img src={Logo} alt="Arvadex Logo" />
      </div>
    </div>
  );
}

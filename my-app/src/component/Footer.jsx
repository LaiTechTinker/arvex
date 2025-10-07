import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer" id="Footer">
      {/* CTA Section */}
      <div className="cta-container">
        <div className="cta-content">
          <h3>
            The Wallet of the Future Is Here. <span>Own a Piece of It</span>
          </h3>
          <p>
            Start your pre-market journey today and join our growing community.
            Simple on-chain steps, real utility, lasting value.
          </p>
        </div>
        <div className="cta-icon">
          <div className="orange-circle"></div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="footer-content">
        <div className="footer-section about">
          <div className="logo">
            <i className="fa-solid fa-e logo-icon"></i>
            <span className="brand">ARVADEX</span>
          </div>
          <p>
            The all-in-one decentralized wallet for the multi-chain era.
          </p>
        </div>

        <div className="footer-section">
          <h4>Product</h4>
          <ul>
            <li>Extension</li>
            <li>Features</li>
            <li>Tokenomics</li>
            <li>Roadmap</li>
            <li>FAQ</li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Legal</h4>
          <ul>
            <li>Terms</li>
            <li>Privacy</li>
            <li>Cookies</li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Contact</h4>
          <ul>
            <li>support@arvadex.com</li>
            <li className="socials">
              <i class="fa-brands fa-square-x-twitter"></i>
              <i className="fa-brands fa-telegram"></i>
              <i className="fa-brands fa-discord"></i>
              <i className="fa-brands fa-youtube"></i>
              <i className="fa-brands fa-instagram"></i>
              <i className="fa-brands fa-facebook"></i>
              <i className="fa-brands fa-tiktok"></i>
            </li>
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <div className="footer-bottom">
        <p>© 2025 ARVADEX. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

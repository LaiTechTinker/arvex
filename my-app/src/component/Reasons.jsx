import React from "react";
import "./Reasons.css";
import logo from '../Images/Walleticon.jpg'

const WhyChoose = () => {
  const features = [
    {
      icon: " fa-wallet",
      title: "Built for Cross-Chain",
      text: "Manage assets and actions across chains from one interface. No more switching wallets or networks.",
    },
    {
      icon: "fa-lock",
      title: "Self custody",
      text: "Your keys, your crypto. ARVADEX keeps you in full control with transparent, non-custodial flows.",
    },
    {
      icon:  "fa-shield",
      title: "Anti-Drain Protection",
      text: "Flags suspicious approvals and risky transactions to help you avoid rug pulls, honeypots, and drains.",
    },
    {
      icon: "fa-coins",
      title: "Optimized Routes",
      text: "Smart routing and handy presets help reduce friction and avoid common mistakes when moving funds.",
    },
    {
      icon: "fa-circle-check",
      title: "Secure Approvals",
      text: "Approve with clarity. See what you sign and easily revoke risky allowances at any time.",
    },
    {
      icon: "fa-user",
      title: "Multi-Wallet Profiles",
      text: "Organize your activity across multiple wallets and networks without losing context.",
    },
  ];

  return (
    <section className="whychoose" id="Feature">
      <div className="whychoose-container">
        <h2>
          Why Choose <span className="highlight">ARVADEX?</span>
        </h2>
        <p className="subtitle">
          Everything you need from a decentralized wallet — secure, cross-chain,
          and built to protect you from scams and draining attacks.
        </p>

        <div className="features-grid">
          {features.map((feature, index) => (
            <div className="feature-card" key={index}>
              <div className="img-bx">
                  <i className={`fa-solid ${feature.icon} feature-icon`}></i>
              </div>

             
              <h3>{feature.title}</h3>
              <p>{feature.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;

import React from "react";
import "./Extension.css";

const features = [
  {
    icon: "fa-right-left",
    title: "Swap",
    description:
      "Swap tokens with smart routing for the best available prices and minimal slippage.",
  },
  {
    icon: "fa-wand-magic-sparkles",
    title: "Create Token",
    description:
      "Launch your own SPL token with a guided, no-code flow directly inside the wallet.",
  },
  {
    icon: "fa-hand-holding-dollar",
    title: "Add Liquidity",
    description:
      "Provide liquidity to supported pools and start earning fees from trades.",
  },
  {
    icon: "fa-paper-plane",
    title: "Send & Receive",
    description:
      "Move assets quickly and safely, with clear confirmations and address book support.",
  },
  {
    icon: "fa-chart-line",
    title: "Portfolio",
    description:
      "Track balances and recent activity across wallets in a clean, real-time dashboard.",
  },
  {
    icon: "fa-globe",
    title: "In-App Browser",
    description:
      "Browse dApps with wallet permissions, connection prompts, and session controls.",
  },
  {
    icon: "fa-shield-halved",
    title: "Security",
    description:
      "Non-custodial by default with anti-drain checks, safer approvals, and allowance reviews.",
  },
  {
    icon: "fa-layer-group",
    title: "Multi-Chain",
    description:
      "Solana-first, with EVM support for broader ecosystem access when you need it.",
  },
  {
    icon: "fa-image",
    title: "NFTs",
    description:
      "View, collect, and manage your NFTs with metadata and media previews.",
  },
  {
    icon: "fa-clock-rotate-left",
    title: "History",
    description:
      "Keep a clean record of all transactions with filters and detailed views.",
  },
];

export default function FeaturesSection() {
  return (
    <section id="Extension" className="features-section">
      <div className="features-container">
        <h2 className="features-title">
          Extension <span>Features</span>
        </h2>
        <p className="features-subtitle">
          Everything you need in a non-custodial wallet extension — simple, fast, and secure.
        </p>

        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-box">
              <i className={`fa-solid ${feature.icon} feature-icon`}></i>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

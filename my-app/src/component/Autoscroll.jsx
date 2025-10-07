import React from 'react';
import './Autoscroll.css';
import img1 from '../Images/coinbase.png'
import img2 from '../Images/coinmarket.jpg';
import img3 from '../Images/phantom.jpg';

const AboutArvadex = () => {
  return (
    <div className="arvadex-container" id='About'>
      <h2>About ARVADEX</h2>
      <p>
        ARVADEX is the  decentralized, all-in-one wallet for the multi-chain era. Seamlessly manage assets, swap across chains,
        and stay protected with our built-in anti-drain safeguards <br />that help block malicious approvals and draining attacks.</p>
      <div className="secure-box">
        Secure by design, ARVADEX puts ownership and safety first. No gatekeepers. No compromises. Just a powerful wallet experience—
        streamlined, transparent, and ready for every chain you use
      </div>
      <div className="scroller">
        <div className="scroll-content">
          <div className="scroll-item">
            <img src={img1} alt=''/>
          </div>
           <div className="scroll-item">
            <img src={img2} alt=''/>
           </div>
            <div className="scroll-item">
              <img src={img3} alt=''/>
            </div>
             <div className="scroll-item">
              <img src={img1} alt=''/>
             </div>
             <div className="scroll-item">
            <img src={img1} alt=''/>
          </div>
           <div className="scroll-item">
            <img src={img2} alt=''/>
           </div>
            <div className="scroll-item">
              <img src={img3} alt=''/>
            </div>
             <div className="scroll-item">
              <img src={img1} alt=''/>
             </div>
             
          
        </div>
          
      </div>
      
    </div>
  );
};

export default AboutArvadex;
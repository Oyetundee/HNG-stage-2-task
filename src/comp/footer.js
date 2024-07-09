// src/components/Footer.js

import React from 'react';

const Footer = () => {
  return (
    <div className="footer">
      <img src="./Asset/F31.png" alt="line" className="footer-image" />
      <div className="footer-text">
        <h2>Eriqueenah’s Online Green Grocery Shop</h2>
        <p>
          Eriqueenah is the leading online organic grocery sale and delivery service in Nigeria. Order <br /> online from hundreds of fruits and vegetables and receive same-day free delivery. Visit <br />your favorite online green grocery store and get the best food shopping offers compared <br />to any other online supermarket in Nigeria. This online grocery store in Lagos is great for <br /> grocery shopping and home delivery service. Online grocery shopping should be easy and <br />that’s what we do effortlessly at Eriqueenah – we ensure that in our online grocery store, <br /> you not only get great and organic produce but also the kind of excellent service and <br />healthy standards you expect in an online food store. Shop with us to get the best prices <br />and discounts on farm produce when you do your online grocery shopping in Lagos or <br />from anywhere in Nigeria.
        </p>
      </div>
      <div className="footer-section">
        <div className="footer-images-juiced">
          <img src="./Asset/F55.png" alt="Juiced option 1" className="footer-image-juiced" />
          <div className="footer-text-juiced">
            <h2>We now offer the ‘Juiced’ option on all fruits and vegetables.</h2>
            <p>Our Juices are 100% Organic and Pure.</p>
          </div>
          <img src="./Asset/F47.png" alt="Juiced option 2" className="footer-image-juiced" />
          <img src="./Asset/F56.png" alt="Juiced option 3" className="footer-image-juiced" />
        </div>
      </div>
      <div className='footer-end'>
        <img src="./Asset/F58.png" alt='line2'></img>
      </div>
    </div>
  );
};

export default Footer;

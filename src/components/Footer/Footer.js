import Account from "../Account/Account";
import { FiFacebook, FiInstagram, FiTwitter } from 'react-icons/fi'
import BentoHouseBrand from '../../img/BentoHouse-brand.png';
import Chopsticks from '../../img/chopstick.png';

import './Footer.css'
import Gradient from "./Gradient";


const Footer = () => {
  return (
    <div className="footer section-paddin app-bg">
      {/* dark Gradient */}
      <Gradient></Gradient>
      {/* Sign In Component */}
      <Account></Account>

      <div className="footer-links">
        <div className="footer-links-contact">
          <h1 className="footer-headtext">Contact Us</h1>
          <p className="p-opensans">3854 S Military Trail, Lake Worth, FL 33463</p>
          <p className="p-opensans">+1 561-342-1230</p>
          <p className="p-opensans">+1 561-333-1230</p>
        </div>

        <div className="footer-links-logo">
          <img src={BentoHouseBrand} alt="Icon" className="footer-img" width={300} height={100} />
          <p className="p-opensans">“Believe in yourself and all that you are. Know that there is something inside you that is greater than any obstacle.”</p>
          <img src={Chopsticks} alt="sticks" className="chopstick-img footer-stick" />
          <div className="footer-links-icons">
            <FiFacebook></FiFacebook>
            <FiInstagram></FiInstagram>
            <FiTwitter></FiTwitter>
          </div>
        </div>

        <div className="footer-links-hour">
          <h1 className="footer-headtext">Working Hours</h1>
          <p className="p-opensans hours-p">Monday-Friday: 08:00 Am -12:00 Am</p>
          <p className="p-opensans hours-p">Saturday-Sunday: 07:00am -11:00 Pm</p>
        </div>
      </div>

      <div className="footer-copyright">
        <p className="p-opensans">2023 Bento House. All Rights Reserved</p>
      </div>
    </div>
  );
}

export default Footer;
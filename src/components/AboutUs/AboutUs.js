import Katana from '../../img/katana.png'
import Kitsune from '../../img/Kitsune.png'
import Chopstick from '../../img/chopstick.png'

import './AboutUs.css';

const AboutUs = () => {
  return (
    <div className="aboutus flex-center app-bg flex-center section-padding" id="about">
      <div className="aboutus-overlay flex-center">
        <img src={Kitsune} alt="" />
      </div>

      <div className="aboutus-content flex-center">
        <div className="aboutus-content-about">
          <h1 className='headtext-cormorant'>About Us</h1>
          <img src={Chopstick} alt="chopstick" className="chopstick-img" />
          <p className='p-opensans'>
            we bring the flavors of Japan to your table. Our menu features a wide range of traditional Japanese dishes.
          </p>
          <button type='button' className='custom-button'>Read More</button>
        </div>

        <div className="aboutus-content-img flex-center">
          <img src={Katana} alt="Samurai" height={900} />
        </div>


        <div className="aboutus-content-history">
          <h1 className='headtext-cormorant'>Our History</h1>
          <img src={Chopstick} alt="chopstick" className="chopstick-img" />
          <p className='p-opensans'>
            We started as small restaurant back in 1997 in Japan, Tokyo. We love to represent our properity, in a kitsune mask
          </p>
          <button type='button' className='custom-button'>Read More</button>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
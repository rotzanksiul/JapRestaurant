import Findusimg from '../../img/Findus.jpg'
import SubHeading from '../SubHeading/SubHeading';

import './FindUs.css'

const Findus = () => {
  return (
    <div className="findus app-bg app-wrapper section-padding" id="contact">

      <div className="app-wrapper-info findus-content">
        <SubHeading title='Contact' ></SubHeading>
        <h1 className='headtext-cormorant'>Find Us</h1>

        <div className="app-wrapper-content">
          <p className='p-opensans'>3854 S Military Trail, Lake Worth, FL 33463</p>
          <p className='p-cormorant hours' style={{ color: '#E0D5C9' }} >Opening Hours</p>
          <p className='p-opensans' >Monday-Friday:
            08:00 am -12:00 am</p>
          <p className='p-opensans' >Saturday-Sunday:
            07:00am -11:00 pm</p>
          <button className='custom-button visitus'>Visit Us</button>
        </div>
      </div>

      <div className="app-wrapper-img findus-img">
        <img src={Findusimg} alt="findus" />
      </div>
    </div>
  );
}

export default Findus;
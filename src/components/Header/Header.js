import SubHeading from '../SubHeading/SubHeading';
import HeaderImg from '../../img/Takoyaki.jpg'

import './Header.css';

const Header = () => {
  return ( 
    <div className="header app-wrapper section-padding" id='home'>
      <div className="app-wrapper-info">
      <SubHeading title='Unforgettable Experience'></SubHeading>
      <h1 className="header-h1">a delight to your taste</h1>
      <p className='p-opensans' style={{margin: '2rem 0rem'}}>Welcome to Bento House, where we pride ourselves on providing a truly unforgettable dining experience</p>
       <button type='button' className='custom-button'>Explore Menu</button>
      </div>

      <div className="app-wrapper-img">
    <img src={HeaderImg} alt="takoyaki"  />
      </div>
    </div>
   );
}
 
export default Header;

import Chefimg from '../../img/chef.jpg'
import SubHeading from '../SubHeading/SubHeading';

import './Chef.css'

const Chef = () => {
  return (
    <div className="app-bg app-wrapper section-padding ">
      <div className="app-wrapper-img app-wrapper-img-reverse">
        <img src={Chefimg} alt="chef" />
      </div>

      <div className="app-wrapper-info">
        <SubHeading title={"Head Chef"}></SubHeading>
        <h1 className='headtext-cormorant'>Meet Our Chef</h1>

        <div className="chef-content">
          <div className="chef-content-quote">
            <p className='p-opensans'>
              <span className='span-quote'>&ldquo;</span>
              Dining should be an experience, not just a meal.
            </p>
          </div>

          <p className='p-opensans'>We strive to provide our guests with an unforgettable culinary journey that they will feel they are inside a Ghibli movie.</p>
        </div>

        <div className="chef-sign">
          <p className='chef-name'>Saria Miyazaki</p>
        </div>
      </div>
    </div>
  );
}

export default Chef;
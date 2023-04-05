import data from '../../constants/data'
import SubHeading from '../SubHeading/SubHeading';
import MenuItem from '../Menuitem/MenuItem';
import Cassie from '../../img/cassie.png'

import './SpecialMenu.css'




const SpecialMenu = () => {
  return (
    <div className="specialMenu flex-center section-padding" id='menu'>
      <div className="specialMenu-title">
        <SubHeading title='Our Delicious Menu That Fits You'></SubHeading>
        <h1 className='specialMenu-h1 headtext-cormorant' >
          Our Drinks
        </h1>
      </div>


      <div className="specialMenu-menu">
        <div className="specialMenu-menu-wine flex-center">
          <p className='specialMenu-menu-heading'>Wine & Beers </p>

          <div className="specialMenu-menu-wine-items">
            {data.wines.map((wine, index) => (

              <MenuItem key={wine.title + index} title={wine.title} price={wine.price} tags={wine.tags}></MenuItem>

            ))}
          </div>
        </div>

        <div className="specialmenu-menu-img">
          <img src={Cassie} alt="" />
        </div>

        <div className="specialMenu-menu-cocktails flex-center">
          <p className='specialMenu-menu-heading'>Cocktails</p>

          <div className="specialMenu-menu-wine-items">
            {data.cocktails.map((cocktail, index) => (

              <MenuItem key={cocktail.title + index} title={cocktail.title} price={cocktail.price} tags={cocktail.tags} />

            ))}
          </div>
        </div>
      </div>

      <div className="specialMenu-button">
        <button type='button' className='custom-button'>View More</button>
      </div>
    </div>
  );
}

export default SpecialMenu;
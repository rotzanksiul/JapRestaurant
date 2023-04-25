import './MenuItem.css'

//Component to render that contains the data for the drinks


const MenuItem = ({ title, price, tags }) => {
  return (
    <div className="menuItem">

      <div className="menuItem-head">

        <div className="menuItem-name">
          <p className="p-cormorant" style={{ color: '#E0D5C9' }}>
            {title}
          </p>
        </div>

        <div className='menuItem-dash' />

        <div className="menuItem-price">
          <p className="p-cormorant">
            {price}
          </p>
        </div>


      </div>

      <div className="menuItem-sub">
        <p className='p-opensans' style={{ color: '#AAA' }}>{tags}</p>
      </div>

    </div>
  );
}

export default MenuItem;
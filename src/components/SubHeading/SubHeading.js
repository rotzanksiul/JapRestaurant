import Chopstick from '../../img/chopstick.png';

//Reusable component as a sub-title

const SubHeading = ({title}) => {
  return ( 
    <div style={{ marginBottom: '1rem'}}>
     <p className="p-cormorant">{title}</p>
     <img src={Chopstick}  alt="" className='chopstick-img' />
    </div>
   );
}
 
export default SubHeading;
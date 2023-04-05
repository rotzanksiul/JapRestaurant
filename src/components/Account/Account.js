import SubHeading from '../SubHeading/SubHeading';
import './Account.css'

const Account = () => {
  return ( 
    <div className="account">
      <div className="account-heading">
        <SubHeading title='Sign In'></SubHeading>
        <h1 className='headtext-cormorant'>Join To Our Family</h1>
        <p className='p-opensans'>Sign In And Get The Best Updates!</p>
      </div>
      <div className="account-input flex-center">
        <input type="email" placeholder='Enter Your Email Address' />
        <button className='custom-button'>Send</button>
      </div>
    </div>
   );
}
 
export default Account;
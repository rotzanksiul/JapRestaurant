
import Denile from '../../img/Denile.jpeg'
import Nestor from '../../img/Nestor.jpeg'
import Chipi from '../../img/Chipi.jpeg'
import Antonio from '../../img/Antonio.jpeg'
import SubHeading from '../SubHeading/SubHeading';


import './Customers.css'

const Customers = () => {
    return (
        <div className="customers section-padding" id='reviews'>
            <SubHeading title='Testimony'></SubHeading>
            <h1 className='headtext-cormorant'>Happy Customers</h1>

            <div className="customers-content-wrapper">
                <div className="customer-content">
                    <div className="customer-content-img">
                        <img src={Denile} alt="denile" height={150} />
                    </div>

                    <div className="customer-content-content">
                        <p className='p-cormorant' style={{ color: '#DCCA87' }}> Denile Foster</p>
                        <span className='p-opensans'>Dj Axar</span>
                        <p className='p-opensans'><span className='span-quote'>&ldquo;</span>
                            The food was cooked to perfection and presented beautifully.
                            I would highly recommend this restaurant to anyone looking for a fine dining experience.</p>
                    </div>
                </div>

                <div className="customer-content">
                    <div className="customer-content-img">
                        <img src={Antonio} alt="denile" height={150} />
                    </div>

                    <div className="customer-content-content">
                        <p className='p-cormorant' style={{ color: '#DCCA87' }}> Antonio Anderson</p>
                        <span className='p-opensans'>Musician</span>
                        <p className='p-opensans'><span className='span-quote'>&ldquo;</span>perfect for a date night.
                            We ordered the Ramen and it was delicious. The dessert was also a highlight, we had the takoyaki which was amazing. Will definitely come back!.</p>
                    </div>
                </div>

                <div className="customer-content">
                    <div className="customer-content-img">
                        <img src={Nestor} alt="denile" height={150} />
                    </div>

                    <div className="customer-content-content">
                        <p className='p-cormorant' style={{ color: '#DCCA87' }}> Nestor Morgan</p>
                        <span className='p-opensans'>Chef</span>
                        <p className='p-opensans'><span className='span-quote'>&ldquo;</span>
                            I had the pleasure of dining here for a business dinner and was blown away by the quality of the food and the level of service.
                            The Tempura was one of the best I've ever had. Highly recommend!</p>
                    </div>
                </div>

                <div className="customer-content">
                    <div className="customer-content-img">
                        <img src={Chipi} alt="denile" height={150} />
                    </div>

                    <div className="customer-content-content">
                        <p className='p-cormorant' style={{ color: '#DCCA87' }}> Chipi Van der Lin</p>
                        <span className='p-opensans'>Chef</span>
                        <p className='p-opensans'><span className='span-quote'>&ldquo;</span>This restaurant exceeded my expectations. The menu was extensive and had something for everyone.
                            The staff was friendly and attentive, and the food was simply delicious.</p>
                    </div>
                </div>


            </div>
        </div>
    );
}

export default Customers;
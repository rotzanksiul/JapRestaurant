import React from 'react';
import SubHeading from '../SubHeading/SubHeading';
import { BsInstagram, BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs'
import { img } from '../../constants/index'


import './Gallery.css'



const Gallery = () => {

  {/* Scroll event set up */ }

  const scrollRef = React.useRef(null);

  const scroll = (direction) => {
    const { current } = scrollRef;

    if (direction === 'left') {
      current.scrollLeft -= 300
    } else {
      current.scrollLeft += 300
    }
  }

  // Get Images
  const galleryImages = [img.onigiri, img.ramen, img.tempura, img.sushi]


  return (
    <div className="gallery section-padding">
      <div className="gallery-content">
        <SubHeading title='Instagram'></SubHeading>
        <h1 className='headtext-cormorant'>Photo Gallery</h1>
        <p className='p-opensans'>Our menu offers a wide variety of dishes,
         from classic sushi and sashimi to noodle dishes and flavorful grilled meats.</p>
        <button type='button ' className='custom-button'>View More</button>
      </div>

      {/* Carrousel Images */}

      <div className="gallery-images">
        <div className="gallery-images-container" ref={scrollRef}>
          {galleryImages.map((image, index) => (
            <div className="gallery-images-card flex-center" key={`gallery-image-${index + 1}`}>
              <img src={image} alt="Gallery Img" />
              <BsInstagram className='gallery-image-icon'></BsInstagram>
            </div>
          ))}
        </div>


        {/* Scroll Icons */}
        <div className="gallery-images-arrow">
          <BsArrowLeftShort className='gallery-arrow-icon' onClick={() => scroll('left')}></BsArrowLeftShort>
          <BsArrowRightShort className='gallery-arrow-icon' onClick={() => scroll('right')}></BsArrowRightShort>
        </div>
      </div>
    </div>

  );
}

export default Gallery;
import React, { useEffect, useRef, useState } from 'react';
import StaticHeader from '../StaticHeader/StaticHeader';

// styles
import './HomeSlider.css';

// images
import img1 from '../../assets/image/award/award1.jpg';
import img2 from '../../assets/image/award/award.jpg';
import img3 from '../../assets/image/award/award3.jpg';
import img4 from '../../assets/image/award/award4.jpg';

// Slider data
const sliderData = [
  {
    img: img1,
    title: 'SLIDER 1',
    type: 'SLIDER',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti temporibus quis eum consequuntur voluptate quae doloribus distinctio. Possimus, sed recusandae.',
  },
  {
    img: img2,
    title: 'SLIDER 2',
    type: 'SLIDER',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti temporibus quis eum consequuntur voluptate quae doloribus distinctio. Possimus, sed recusandae.',
  },
  {
    img: img3,
    title: 'SLIDER 3',
    type: 'SLIDER',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti temporibus quis eum consequuntur voluptate quae doloribus distinctio. Possimus, sed recusandae.',
  },
  {
    img: img4,
    title: 'SLIDER 4',
    type: 'SLIDER',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti temporibus quis eum consequuntur voluptate quae doloribus distinctio. Possimus, sed recusandae.',
  },
];

const HomeSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [animationDirection, setAnimationDirection] = useState('next');
  const sliderRef = useRef(null);

  const totalSlides = sliderData.length;

  const handleSlideChange = (direction) => {
    if (animating) return; // Prevent changes while animating

    setAnimating(true);
    setAnimationDirection(direction);

    // Set a timeout to update the current slide after animation ends (500ms for example)
    setTimeout(() => {
      setCurrentSlide((prevSlide) =>
        direction === 'next'
          ? (prevSlide + 1) % totalSlides
          : (prevSlide - 1 + totalSlides) % totalSlides
      );
      setAnimating(false);
    }, 500); // Adjust this to match the duration of your CSS animation
  };

  // Auto slide every 7 seconds
  useEffect(() => {
    const autoSlide = setInterval(() => {
      handleSlideChange('next');
    }, 7000);

    return () => {
      clearInterval(autoSlide);
    };
  }, []);

  // Reorder thumbnails by moving img1 (index 0) to the last position
  const reorderedThumbnails = [...sliderData.slice(1), sliderData[0]];

  return (
    <div className='carousel-container'>
      <header className='carousel-header'>
        <StaticHeader />
      </header>

      <div className={`slider ${animating ? animationDirection : ''}`} ref={sliderRef}>
        <div className="list">
          {sliderData.map((item, index) => (
            <div
              className={`item ${index === currentSlide ? 'active' : ''}`}
              key={index}
            >
              <img src={item.img} alt={`Award ${index + 1}`} />

              <div className="content">
                <div className="title">{item.title}</div>
                <div className="type">{item.type}</div>
                <div className="description">{item.description}</div>
                <div className="button">
                  <button>SEE MORE</button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="thumbnail">
          {reorderedThumbnails.map((item, index) => (
            <div
              className={`item ${index === (currentSlide === 0 ? totalSlides - 1 : currentSlide - 1) ? 'active' : ''}`}
              key={index}
            >
              <img src={item.img} alt={`Thumbnail ${index + 1}`} />
            </div>
          ))}
        </div>

        <div className="nextPrevArrows">
          <button className="prev" onClick={() => handleSlideChange('prev')}>
            &lt;
          </button>
          <button className="next" onClick={() => handleSlideChange('next')}>
            &gt;
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomeSlider;

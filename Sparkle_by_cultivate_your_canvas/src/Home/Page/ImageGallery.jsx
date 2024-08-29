import React, { useState } from 'react';

// arts images
import artsImg from '../../assets/image/program/art/art.jpg';

// Yoga images
import yogaImg from '../../assets/image/program/yoga/yoga.jpg';
import yogaImg1 from '../../assets/image/program/yoga/yoga1.jpg';
import yogaImg2 from '../../assets/image/program/yoga/yoga2.jpg';
import yogaImg3 from '../../assets/image/program/yoga/yoga3.jpg';
import yogaImg4 from '../../assets/image/program/yoga/yoga4.jpg';
import yogaImg5 from '../../assets/image/program/yoga/yoga5.jpg';
import yogaImg6 from '../../assets/image/program/yoga/yoga6.jpg';
import yogaImg7 from '../../assets/image/program/yoga/yoga7.jpg';
import yogaImg8 from '../../assets/image/program/yoga/yoga8.jpg';
import yogaImg9 from '../../assets/image/program/yoga/yoga9.jpg';
import yogaImg10 from '../../assets/image/program/yoga/yoga10.jpg';
import yogaImg11 from '../../assets/image/program/yoga/yoga11.jpg';
import yogaImg12 from '../../assets/image/program/yoga/yoga12.jpg';
import yogaImg13 from '../../assets/image/program/yoga/yoga13.jpg';
import yogaImg14 from '../../assets/image/program/yoga/yoga14.jpg';
import yogaImg15 from '../../assets/image/program/yoga/yoga15.jpg';
import yogaImg16 from '../../assets/image/program/yoga/yoga16.jpg';
import yogaImg17 from '../../assets/image/program/yoga/yoga17.jpg';
import yogaImg18 from '../../assets/image/program/yoga/yoga18.jpg';
import yogaImg19 from '../../assets/image/program/yoga/yoga19.jpg';
import yogaImg20 from '../../assets/image/program/yoga/yoga20.jpg';
import yogaImg21 from '../../assets/image/program/yoga/yoga21.jpg';
import yogaImg22 from '../../assets/image/program/yoga/yoga22.jpg';
import yogaImg23 from '../../assets/image/program/yoga/yoga23.jpg';

// dance images
import dance from '../../assets/image/program/dance/dance.webp';
import dance1 from '../../assets/image/program/dance/dance1.webp';
import dance2 from '../../assets/image/program/dance/dance2.webp';
import dance3 from '../../assets/image/program/dance/dance3.webp';
import dance4 from '../../assets/image/program/dance/dance4.webp';
import dance5 from '../../assets/image/program/dance/dance5.webp';
import dance6 from '../../assets/image/program/dance/dance6.webp';
import dance7 from '../../assets/image/program/dance/dance7.webp';
import dance8 from '../../assets/image/program/dance/dance8.webp';
import dance9 from '../../assets/image/program/dance/dance9.webp';
import dance10 from '../../assets/image/program/dance/dance10.webp';
import dance11 from '../../assets/image/program/dance/dance11.webp';
import dance12 from '../../assets/image/program/dance/dance12.webp';
import dance13 from '../../assets/image/program/dance/dance13.webp';
import dance14 from '../../assets/image/program/dance/dance14.webp';



// header
import StaticHeader from '../../components/StaticHeader/StaticHeader';

// animation
import AnimatedComponent from '../../components/Animation/AnimatedComponent';

const ImageGallery = () => {

  // states
  const [activeCategory, setActiveCategory] = useState('All');

  // Image categories
  const images = {
    All: [
      artsImg,
      yogaImg, yogaImg1, yogaImg2, yogaImg3,
      yogaImg4, yogaImg5, yogaImg6, yogaImg7,
      yogaImg8, yogaImg9, yogaImg10, yogaImg11,
      yogaImg12, yogaImg13, yogaImg14, yogaImg15,
      yogaImg16, yogaImg17, yogaImg18, yogaImg19,
      yogaImg20, yogaImg21, yogaImg22, yogaImg23,
      dance, dance1, dance2, dance3,
      dance4, dance5, dance6, dance7,
      dance8, dance9, dance10, dance11,
      dance12, dance13, dance14
    ],
    Arts: [artsImg],
    Yoga: [
      yogaImg, yogaImg1, yogaImg2, yogaImg3,
      yogaImg4, yogaImg5, yogaImg6, yogaImg7,
      yogaImg8, yogaImg9, yogaImg10, yogaImg11,
      yogaImg12, yogaImg13, yogaImg14, yogaImg15,
      yogaImg16, yogaImg17, yogaImg18, yogaImg19,
      yogaImg20, yogaImg21, yogaImg22, yogaImg23
    ],
    Dance: [
      dance, dance1, dance2, dance3,
      dance4, dance5, dance6, dance7,
      dance8, dance9, dance10, dance11,
      dance12, dance13, dance14
    ],
    Public_Speaking: [], // Empty array if no images available
    Personality_Development: [] // Empty array if no images available
  };

  const getNavItemClasses = (category) => {
    return `cursor-pointer px-5 py-1 border-2 border-transparent transition-all duration-300 ${activeCategory === category
      ? 'bg-yellow-500 text-white rounded-2xl'
      : 'hover:bg-gray-200'
      }`;
  };

  return (
    <div className='w-full'>
      {/* Static header */}
      <StaticHeader />

      {/* Navigation */}
      <header className='w-full'>
        <nav className='flex flex-wrap gap-5 justify-center py-5 text-sm lg:text-lg'>
          <span onClick={() => setActiveCategory('All')} className={getNavItemClasses('All')}>All</span>
          <span onClick={() => setActiveCategory('Arts')} className={getNavItemClasses('Arts')}>Arts</span>
          <span onClick={() => setActiveCategory('Yoga')} className={getNavItemClasses('Yoga')}>Yoga</span>
          <span onClick={() => setActiveCategory('Dance')} className={getNavItemClasses('Dance')}>Dance</span>
          <span onClick={() => setActiveCategory('Public_Speaking')} className={getNavItemClasses('Public_Speaking')}>Public Speaking</span>
          <span onClick={() => setActiveCategory('Personality_Development')} className={getNavItemClasses('Personality_Development')}>Personality Development</span>
        </nav>
      </header>
      <AnimatedComponent>
        <div className='flex flex-wrap justify-center'>
          {images[activeCategory]?.length > 0 ? (
            images[activeCategory].map((img, index) => (
              <div key={index} className='m-2'>
                <img src={img} alt={activeCategory} loading="lazy" className='h-[200px] object-cover' />
              </div>
            ))
          ) : (
            <div className='flex items-center justify-center w-full h-[200px]'>
              <p className='text-lg text-gray-500'>No images found</p>
            </div>
          )}
        </div>
      </AnimatedComponent>
    </div>
  );
}

export default ImageGallery;

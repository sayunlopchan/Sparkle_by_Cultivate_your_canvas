import React, { useEffect, useRef } from 'react';
import './gallery.css';

import img1 from '../../../assets/image/program/art/art.webp';
import img2 from '../../../assets/image/program/dance/dance.webp';
import img3 from '../../../assets/image/program/dance/dance2.webp'
import img4 from '../../../assets/image/program/dance/dance3.webp'
import img5 from '../../../assets/image/program/dance/dance4.webp'

// texture images
import taxture from '../../../assets/texture/bg-texture/bg-trangle-pattern-texture.webp'



const GridGallery_2 = () => {
  const galleryRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !entry.target.classList.contains('in-view')) {
            entry.target.classList.add('in-view');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 } // Trigger when 20% of the image is visible
    );

    galleryRef.current.forEach((el) => {
      if (el) {
        observer.observe(el);
      }
    });

    return () => {
      galleryRef.current.forEach((el) => {
        if (el) {
          observer.unobserve(el);
        }
      });
    };
  }, []);


  ImageData = [
    { image: img1 },
    { image: img2 },
    { image: img3 },
    { image: img4 },
    { image: img5 },
  ]


  return (
    <div className='gallery-container' style={{ backgroundImage: `url(${taxture})` }}>
      <div
        className='grid-gallery-box-2 '
        ref={(el) => (galleryRef.current[0] = el)}
      >
        {ImageData.map((item, idx) => (
          <div key={idx}
            className="grid-img-box-2 "
            style={{ backgroundImage: `url(${item.image})` }}
          />
        ))}
      </div>
      <div className='md:hidden px-5'>
        <div className='flex gap-5 overflow-x-scroll snap-mandatory'>
          {ImageData.map((item, idx) => (
            <img key={idx} src={item.image} alt="img" className='swpier-img w-[300px] h-[200px] snap-center' />
          ))}
        </div>
      </div>
    </div>
  );
};

export default GridGallery_2;

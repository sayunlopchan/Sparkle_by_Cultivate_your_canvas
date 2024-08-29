import React, { useEffect, useRef } from 'react';
import './gallery.css';

import img1 from '../../assets/image/program/art/art.jpg';
import img2 from '../../assets/image/program/dance/dance.jpg';
import img3 from '../../assets/image/program/dance/dance2.jpg'
import img4 from '../../assets/image/program/dance/dance3.jpg'
import img5 from '../../assets/image/program/dance/dance4.jpg'

// texture images
import taxture from '../../assets/texture/bg-texture/bg-trangle-pattern-texture.jpg'



const GridGallery_2 = () => {
  const galleryRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !entry.target.classList.contains('in-view')) {
            entry.target.classList.add('in-view');
            observer.unobserve(entry.target); // Stop observing once the class is added
          }
        });
      },
      { threshold: 0.1 } // Trigger when 10% of the image is visible
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





  return (
    <div className='gallery-container' style={{ backgroundImage: `url(${taxture})` }}>
      <div
        className='grid-gallery-box-2 '
        ref={(el) => (galleryRef.current[0] = el)}
      >

        <div
          className="grid-img-box-2 "
          style={{ backgroundImage: `url(${img1})` }}
        />

        <div
          className="grid-img-box-2 "
          style={{ backgroundImage: `url(${img2})` }}
        />

        <div
          className="grid-img-box-2"
          style={{ backgroundImage: `url(${img3})` }}
        />

        <div
          className="grid-img-box-2 "
          style={{ backgroundImage: `url(${img4})` }}
        />
        <div
          className="grid-img-box-2"
          style={{ backgroundImage: `url(${img5})` }}
        />

      </div>
      <div className='md:hidden px-5'>
        <div className='flex gap-5 overflow-x-scroll snap-mandatory'>
          <img src={img1} alt="img" className='swpier-img w-[300px] h-[200px] snap-center' />
          <img src={img2} alt="img" className='swpier-img w-[300px] h-[200px] snap-center' />
          <img src={img3} alt="img" className='swpier-img w-[300px] h-[200px] snap-center' />
          <img src={img4} alt="img" className='swpier-img w-[300px] h-[200px] snap-center' />
          <img src={img5} alt="img" className='swpier-img w-[300px] h-[200px] snap-center' />
        </div>
      </div>
    </div>
  );
};

export default GridGallery_2;

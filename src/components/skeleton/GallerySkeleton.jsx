import React from 'react';
// css
import './Skeleton.css'


const GalleySkeleton = () => {
  return (
    <div className='h-[100vh] w-full p-10'>
      <div className='flex gap-10 justify-center h-[100px]'>
        <div className='gallery-skeleton-nav ' />
        <div className='gallery-skeleton-nav' />
        <div className='gallery-skeleton-nav' />
        <div className='gallery-skeleton-nav' />
        <div className='gallery-skeleton-nav' />
        <div className='gallery-skeleton-nav' />
      </div>
      <div className='grid grid-cols-4 gap-10 place-items-center'>
        <div className='gallery-skeleton-box' />
        <div className='gallery-skeleton-box' />
        <div className='gallery-skeleton-box' />
        <div className='gallery-skeleton-box' />
        <div className='gallery-skeleton-box' />
        <div className='gallery-skeleton-box' />
        <div className='gallery-skeleton-box' />
        <div className='gallery-skeleton-box' />
      </div>
    </div>
  );
};

export default GalleySkeleton;

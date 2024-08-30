import React from 'react';
// css
import './Skeleton.css'


const GalleySkeleton = () => {
  return (
    <div className='gallery-skeleton-container'>
      <div className='gallery-skeleton-head'>
        <div className='gallery-skeleton-nav ' />
        <div className='gallery-skeleton-nav' />
        <div className='gallery-skeleton-nav' />
        <div className='gallery-skeleton-nav' />
        <div className='gallery-skeleton-nav' />
        <div className='gallery-skeleton-nav' />
      </div>
      <div className='gallery-skeleton-box-container'>
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

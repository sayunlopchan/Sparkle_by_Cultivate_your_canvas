import React, { useEffect, useRef, useState } from 'react';

import './AnimatedComponent.css'
const AnimatedComponent = ({ children }) => {
  const [isScrollingDown, setIsScrollingDown] = useState(true);
  const elementRef = useRef(null);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScrollDirection = () => {
      const currentScrollY = window.scrollY;
      setIsScrollingDown(currentScrollY > lastScrollY);
      lastScrollY = currentScrollY;
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          handleScrollDirection();
          if (isScrollingDown) {
            entry.target.classList.add('in-view');
            entry.target.classList.remove('out-of-view');
          } else {
            entry.target.classList.add('out-of-view');
            entry.target.classList.remove('in-view');
          }
        } else {
          entry.target.classList.add('out-of-view');
          entry.target.classList.remove('in-view');
        }
      },
      { threshold: [0] }
    );

    const element = elementRef.current;
    if (element) {
      observer.observe(element);
    }

    // Cleanup observer on unmount
    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [isScrollingDown]);

  return (
    <div ref={elementRef} className="animated-element">
      {children}
    </div>
  );
};

export default AnimatedComponent;

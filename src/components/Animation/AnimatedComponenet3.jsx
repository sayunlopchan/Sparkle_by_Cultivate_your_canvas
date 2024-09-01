import React, { useEffect, useRef } from 'react';
import './AnimatedComponent.css'
const AnimatedComponent3 = ({ children }) => {
  const elementRef = useRef(null);

  useEffect(() => {
    const element = elementRef.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view-Y');
          observer.unobserve(entry.target); // Unobserve after animation
        }
      },
      { threshold: [0.3] } // Adjust threshold if needed
    );

    if (element) {
      observer.observe(element);
    }

    // Cleanup observer on unmount
    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  return (
    <div ref={elementRef} className="animated-element-3 overflow-hidden">
      {children}
    </div>
  );
};

export default AnimatedComponent3;

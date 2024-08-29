import React, { useEffect, useRef } from 'react';
import './AnimatedComponent.css'
const AnimatedComponent2 = ({ children }) => {
  const elementRef = useRef(null);

  useEffect(() => {
    const element = elementRef.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          observer.unobserve(entry.target); // Unobserve after animation
        }
      },
      { threshold: [0.1] } // Adjust threshold if needed
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
    <div ref={elementRef} className="animated-element-2">
      {children}
    </div>
  );
};

export default AnimatedComponent2;

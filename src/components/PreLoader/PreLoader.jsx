import React from 'react';
import Lottie from 'lottie-react';
import loading_animation from '../../assets/animation/loading.json';
import { Outlet } from 'react-router-dom';
import Footer from '../../Home/Navigation/Footer';
import Header from '../../Home/Navigation/Header';
import BackToTopBtn from '../BackToTopBtn';

const PreLoader = () => {
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    // Set loading to false after 1.5 seconds
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    // Clean up the timer when the component unmounts
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className='h-[100vh] w-full flex justify-between items-center relative '>
      <div className='mx-auto'>
        {loading ? (
          <Lottie animationData={loading_animation} loop={true} className='size-[100px] md:size-[200px]' />
        ) : (
          <div className='absolute top-0 left-0'>
            <Header />
            <div>
              <Outlet />
              <BackToTopBtn />
            </div>
            <Footer />
          </div>
        )}
      </div>
    </div>
  );
};

export default PreLoader;

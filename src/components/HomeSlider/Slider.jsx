import React, { useState, useEffect } from "react";
import "./slider.css";
// header component
import SliderHeader from "../StaticHeader/SliderHeader";

// images
import img1 from "../../assets/image/program/art/art.jpg";
import img2 from "../../assets/image/program/dance/dance1.webp";
import img3 from "../../assets/image/program/yoga/yoga.jpg";
import img4 from "../../assets/image/program/yoga/yoga16.jpg";

// Slider data
const SliderData = [
  {
    img: img1,
    title: "Art",
    author: "Lujala Shakya",
    description:
      "Children can explore their creativity while developing important skills. Art enhances motor abilities, problem-solving, and spatial awareness. It encourages critical thinking and self-expression, building confidence. Engaging in art also supports overall cognitive and emotional growth, making it a valuable part of education.",
  },
  {
    img: img2,
    title: "Dance",
    author: " Ira Sushmita Chamling Rai",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti temporibus quis eum consequuntur voluptate quae doloribus distinctio. Possimus, sed recusandae.",
  },
  {
    img: img3,
    title: "Slider 3",
    author: "Slider",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti temporibus quis eum consequuntur voluptate quae doloribus distinctio. Possimus, sed recusandae.",
  },
  {
    img: img4,
    title: "Slider 4",
    author: "Slider",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti temporibus quis eum consequuntur voluptate quae doloribus distinctio. Possimus, sed recusandae.",
  },
];

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [animationClass, setAnimationClass] = useState("slide-in");
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleNext = () => {
    if (isTransitioning) return; // Prevent action during transition
    setIsTransitioning(true);
    setAnimationClass("slide-out-next");
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % SliderData.length);
      setAnimationClass("slide-in-next");
      setIsTransitioning(false);
    }, 300); // Match this with your slide-out duration
  };

  const handlePrev = () => {
    if (isTransitioning) return; // Prevent action during transition
    setIsTransitioning(true);
    setAnimationClass("slide-out-prev");
    setTimeout(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? SliderData.length - 1 : prevIndex - 1
      );
      setAnimationClass("slide-in-prev");
      setIsTransitioning(false);
    }, 300); // Match this with your slide-out duration
  };

  useEffect(() => {
    const intervalId = setInterval(handleNext, 6000);
    // Cleanup interval on component unmount
    return () => clearInterval(intervalId);
  }, [isTransitioning]); // Add isTransitioning as a dependency

  return (
    <div className="slider-container">
      {/* header */}
      <header className="slider-header">
        <SliderHeader />
      </header>
      {/* swiper */}
      <div
        className={`swiper-container bg-${animationClass}`}
        style={{ backgroundImage: `url(${SliderData[currentIndex].img})` }}
      >
        <div className="bg-black opacity-25 h-[100vh] w-full"></div>
        {/* texts */}
        <div className={`swiper-content ${animationClass}`}>
          <h1 className="content-h1"> {SliderData[currentIndex].title} </h1>
          <h2 className="content-h2"> {SliderData[currentIndex].author} </h2>
          <p className="content-p"> {SliderData[currentIndex].description} </p>
        </div>
      </div>

      {/* thumbnail */}
      <div className="thumbnail-container">
        {SliderData.map((item, idx) => (
          <div
            key={idx}
            className={`slider-thumbnail ${idx === currentIndex ? "active-thumbnail" : ""
              }`}
          >
            <img src={item.img} alt={item.title} />
          </div>
        ))}
      </div>

      {/* arrow */}
      <div className="slider-btn-container">
        <button className="slider-btn" onClick={handlePrev}>
          &lt;
        </button>
        <button className="slider-btn" onClick={handleNext}>
          &gt;
        </button>
      </div>
    </div>
  );
};

export default Slider;

import React, { useState, useEffect } from "react";
import "./slider.css";
import SliderHeader from "../../../components/StaticHeader/SliderHeader";

// images
import img1 from "../../../assets/image/program/art/art.webp";
import img2 from "../../../assets/image/program/dance/dance1.webp";
import img3 from "../../../assets/image/program/yoga/yoga.webp";
import img4 from "../../../assets/image/program/yoga/yoga16.webp";

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
    author: "Rosy Shrestha",
    description:
      "Children can develop coordination, balance, and flexibility while fostering creativity and self-expression through dance classes. These classes build confidence and a love for the art with structured, engaging instruction.",
  },
  {
    img: img3,
    title: "Yoga",
    author: "Ira Sushmita Chamling Rai",
    description:
      "Yoga program helps children improve focus, flexibility, and emotional balance through guided poses and mindfulness. It builds body awareness and coordination, fostering resilience and confidence.",
  },
  {
    img: img4,
    title: "Public Speaking",
    author: "Snehalata Raut Thapa",
    description:
      "Build confidence and improve communication skills.Learn to articulate thoughts clearly, organize ideas effectively, and engage with audiences, setting the stage for future leadership and enhancing their ability to express themselves persuasively.",
  },
];

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [animationClass, setAnimationClass] = useState("slide-in");
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleNext = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setAnimationClass("slide-out-next");
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % SliderData.length);
      setAnimationClass("slide-in-next");
      setIsTransitioning(false);
    }, 300);
  };

  const handlePrev = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setAnimationClass("slide-out-prev");
    setTimeout(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? SliderData.length - 1 : prevIndex - 1
      );
      setAnimationClass("slide-in-prev");
      setIsTransitioning(false);
    }, 300);
  };

  const handleThumbnailClick = (index) => {
    if (isTransitioning || index === currentIndex) return;
    setIsTransitioning(true);
    setAnimationClass(index > currentIndex ? "slide-out-next" : "slide-out-prev");
    setTimeout(() => {
      setCurrentIndex(index);
      setAnimationClass(index > currentIndex ? "slide-in-next" : "slide-in-prev");
      setIsTransitioning(false);
    }, 300);
  };

  useEffect(() => {
    const intervalId = setInterval(handleNext, 6000);
    return () => clearInterval(intervalId);
  }, [isTransitioning]);

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
            className={`slider-thumbnail ${idx === currentIndex ? "active-thumbnail" : ""}`}
            onClick={() => handleThumbnailClick(idx)} // Thumbnail click handler
          >
            {/* Lazy loading */}
            <img src={item.img} alt={item.title} loading="lazy" />
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

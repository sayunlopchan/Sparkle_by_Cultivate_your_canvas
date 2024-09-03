import React, { useState, useEffect } from "react";
import "./slider.css";
import SliderHeader from "../../../components/StaticHeader/SliderHeader";

// images
import img1 from "../../../assets/image/program/art/art.webp";
import img2 from "../../../assets/image/program/dance/dance1.webp";
import img3 from "../../../assets/image/program/yoga/yoga.webp";
import img4 from "../../../assets/image/program/art/kid14.webp";


// react icons
import { RiDoubleQuotesL } from "react-icons/ri";
import { RiDoubleQuotesR } from "react-icons/ri";
import { useNavigate } from "react-router-dom";

// Slider data
const SliderData = [
  {
    img: img1,
    title: "Art",
    author: "Lujala Shakya",
    description:
      "Children can explore their creativity while developing important skills. Art enhances motor abilities, problem-solving, and spatial awareness. It encourages critical thinking and self-expression, building confidence. Engaging in art also supports overall cognitive and emotional growth, making it a valuable part of education.",
    color: 'text-red-500',
  },
  {
    img: img2,
    title: "Dance",
    author: "Rosy Shrestha",
    description:
      "Children can develop coordination, balance, and flexibility while fostering creativity and self-expression through dance classes. These classes build confidence and a love for the art with structured, engaging instruction.",
    color: 'text-blue-500'
  },
  {
    img: img3,
    title: "Yoga",
    author: "Sushmita Chamling Rai",
    description:
      "Yoga program helps children improve focus, flexibility, and emotional balance through guided poses and mindfulness. It builds body awareness and coordination, fostering resilience and confidence.",
    color: 'text-orange-500'
  },
  {
    img: img4,
    title: "Public Speaking",
    author: "Snehalata Raut Thapa",
    description:
      "Build confidence and improve communication skills.Learn to articulate thoughts clearly, organize ideas effectively, and engage with audiences, setting the stage for future leadership and enhancing their ability to express themselves persuasively.",
    color: 'text-green-500'
  },
];

const Slider = () => {
  const nav = useNavigate();


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
        <div className="bg-black opacity-35 h-[100vh] w-full"></div>
        {/* texts */}
        <div className={`swiper-content ${animationClass}`}>
          <h2 className={`content-h2 ${SliderData[currentIndex].color}`}>
            {SliderData[currentIndex].title}
          </h2>
          <h3 className="content-h3">-{SliderData[currentIndex].author}</h3>
          <span className="flex">
            <p className="content-p">
              <span className="font-bold text-xl">"</span>
              {SliderData[currentIndex].description}
              <span className="font-bold text-xl">"</span>
            </p>
          </span>
          <button
            className="border-2 border-white px-3 py-2 mt-2 hover:backdrop-blur-md transition-all duration-300"
            onClick={() => nav('/program')}
          >
            Read more
          </button>

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

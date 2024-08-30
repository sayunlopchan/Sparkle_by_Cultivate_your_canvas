import React from "react";

// imgs
import img1 from "../../assets/image/people/chairWomen/chairwomen.webp";
import img2 from "../../assets/image/program/yoga/yoga.webp";
import img3 from "../../assets/image/useables/grpbannerhold.webp";
import img4 from "../../assets/image/program/art/art.webp";

// texture images
import taxture from "../../assets/texture/bg-texture/white_linen_texture.webp";
import butterfly from "../../assets/image/vector/rainbow-butterfly.webp";


// splash images
import splashRed from "../../assets/texture/splash/modern-red-watercolor.png";
import splashGreen from "../../assets/texture/splash/elegant-green-watercolor.png";
import splashYelow from "../../assets/texture/splash/modern-yellow-orange-watercolor.png";
import splashOrange from "../../assets/texture/splash/abstract-orange-watercolor.png";
import splashPink from "../../assets/texture/splash/abstract-pink-watercolor.png";

// styles css
import "./gallery.css";

// animation
import AnimatedComponent from "../Animation/AnimatedComponent";
import AnimatedComponent2 from "../Animation/AnimatedComponent2";

// animation

const GridGallery_1 = () => {

  const gridImg = [
    { image: img1 },
    { image: img2 },
    { image: img3 },
    { image: img4 },
  ]


  const textData = [
    {
      heading: "Empowering Young Minds, Shaping Nepal's Future Leaders Through Creativity and Confidence.",
      description:
        "At Sparkle Kids Academy, we nurture young minds by fostering creativity and confidence, equipping Nepal's future leaders with essential life skills for success in an ever-changing world. Our programs are designed to inspire and empower children to reach their full potential.",
    },
    {
      heading: "",
      description: "Explore our diverse offerings:",
    },
  ];

  const offerings = [
    { image: splashRed, text: 'Art' },
    { image: splashGreen, text: 'Yoga' },
    { image: splashYelow, text: 'Public Speaking' },
    { image: splashOrange, text: 'Dance' },
    { image: splashPink, text: 'Personality Development' },
  ]

  return (
    <div className="grid-gallary-1-container ">
      {/* img */}
      <div className="grid-gallery-1-container-box relative">
        <AnimatedComponent>
          <img src={butterfly} alt="butterfly" className="butterfly" />
          <div
            className="grid-gallery-imgs-grid-box"
            style={{ backgroundImage: `url(${taxture})` }}
          >
            {
              gridImg.map((item, idx) => (

                <div key={idx} className="grid-img ">
                  <img src={item.image} alt={item.image} />
                </div>
              ))
            }
          </div>
        </AnimatedComponent>
      </div>

      {/* text */}
      <div className="grid-gallery-1-container-box ">
        <div className="w-full space-y-5">
          {textData.map((item, index) => (
            <AnimatedComponent2 key={index}>
              {item.heading && (
                <h1 className="text-red-500 font-[500] text-4xl ">
                  {item.heading}
                </h1>
              )}
              <p className="p-text italic ">{item.description}</p>
            </AnimatedComponent2>
          ))}

          <ul className="card-ul">
            {offerings.map((offer, idx) => (
              <AnimatedComponent2 key={idx}>
                <li>
                  <img src={offer.image} alt="red-splash" className="size-[50px]" />
                  {offer.text}
                </li>
              </AnimatedComponent2>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default GridGallery_1;

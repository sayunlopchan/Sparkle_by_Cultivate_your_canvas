import React from "react";

// imgs
import img1 from "../../assets/image/people/chairWomen/chairwomen.jpg";
import img2 from "../../assets/image/program/yoga/yoga.jpg";
import img3 from "../../assets/image/people/grpbannerhold.jpg";
import img4 from "../../assets/image/program/art/art.jpg";

// texture images
import taxture from "../../assets/texture/bg-texture/white_linen_texture.jpg";
import butterfly from "../../assets/texture/assets icon/rainbow-butterfly.webp";
import rainbowWave from "../../assets/texture/assets icon/rainbow-wave.jpg";

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
  return (
    <div className="grid-gallary-1-container ">
      {/* img */}
      <div className="grid-gallery-1-container-box relative">
        <AnimatedComponent>
          <img src={butterfly} alt="butterfly" className="butterfly" />
          <img src={butterfly} alt="butterfly" className="butterfly" />
          <img src={rainbowWave} alt="rainbowWave" className="rainbowWave" />
          <div
            className="grid-gallery-imgs-grid-box"
            style={{ backgroundImage: `url(${taxture})` }}
          >
            <div className="grid-img ">
              <img src={img1} alt="img" />
            </div>
            <div className="grid-img ">
              <img src={img2} alt="" />
            </div>
            <div className="grid-img ">
              <img src={img3} alt="" />
            </div>
            <div className="grid-img ">
              <img src={img4} alt="" />
            </div>
          </div>
        </AnimatedComponent>
      </div>

      {/* text */}
      <div className="grid-gallery-1-container-box ">
        <div className="w-full space-y-5">
          <AnimatedComponent2>
            <h1 className="text-red-500 font-[500] text-4xl ">
              Empowering Young Minds, Shaping Nepal's Future Leaders Through
              Creativity and Confidence.
            </h1>
          </AnimatedComponent2>

          <AnimatedComponent2>
            <p className="p-text italic ">
              At Sparkle Kids Academy, we nurture young minds by fostering
              creativity and confidence, equipping Nepal's future leaders with
              essential life skills for success in an ever-changing world. Our
              programs are designed to inspire and empower children to reach
              their full potential.
            </p>
          </AnimatedComponent2>

          <AnimatedComponent2>
            <p className="p-text ">Explore our diverse offerings:</p>
          </AnimatedComponent2>

          <ul className="card-ul">
            <AnimatedComponent2>
              <li>
                <img src={splashRed} alt="red-splash" className="size-[50px]" />
                Art
              </li>
            </AnimatedComponent2>

            <AnimatedComponent2>
              <li>
                <img
                  src={splashGreen}
                  alt="red-splash"
                  className="size-[50px]"
                />
                Yoga
              </li>
            </AnimatedComponent2>

            <AnimatedComponent2>
              <li>
                <img
                  src={splashYelow}
                  alt="red-splash"
                  className="size-[50px]"
                />
                Public speaking
              </li>
            </AnimatedComponent2>

            <AnimatedComponent2>
              <li>
                <img
                  src={splashOrange}
                  alt="red-splash"
                  className="size-[50px]"
                />
                Dance
              </li>
            </AnimatedComponent2>

            <AnimatedComponent2>
              <li>
                <img
                  src={splashPink}
                  alt="red-splash"
                  className="size-[50px]"
                />
                Personality development
              </li>
            </AnimatedComponent2>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default GridGallery_1;

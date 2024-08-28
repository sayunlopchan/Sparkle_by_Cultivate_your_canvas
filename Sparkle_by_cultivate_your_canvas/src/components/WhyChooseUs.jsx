import React from "react";

import queriousPeople from "../assets/image/vector/curiosity-people.png";
import ExperiencedInstructors from "../assets/texture/useableImages/ExperiencedInstructors.png";

import HolisticDevelopment from "../assets/texture/useableImages/HolisticDevelopment.png";

import SafeSecureEnvironment from "../assets/texture/useableImages/Safe & Secure Environment.webp";

import ParentInvolvement from "../assets/texture/useableImages/parental-involvement.jpg";

import FlexiblePrograms from "../assets/texture/useableImages/Flexible Programs.jpg";

import CreativeLearning from "../assets/texture/useableImages/nursery_teacher_3.jpg";


const WhyChooseUs = () => {
  const data = [
    {
      image: ExperiencedInstructors,
      title: "Experienced Instructors",
      p: " Our team of skilled educators is dedicated to nurturing your child's potential with a personalized approach.",
    },
    {
      image: HolisticDevelopment,
      title: "Holistic Development",
      p: "confidence, and communication skills, ensuring your child grows into a well-rounded individual.",
    },
    {
      image: SafeSecureEnvironment,
      title: "Safe & Secure Environment",
      p: " Safety is our top priority, with child-friendly facilities and strict protocols in place.",
    },
    {
      image: ParentInvolvement,
      title: "Parent Involvement",
      p: "We keep you engaged with regular updates, progress reports, and open communication.",
    },
    {
      image: FlexiblePrograms,
      title: "Flexible Programs",
      p: " We offer a range of programs tailored to suit different age groups and interests, ensuring your child finds their passion.",
    },
    {
      image: CreativeLearning,
      title: "Creative Learning",
      p: "Our curriculum is designed to spark imagination and creativity, making learning fun and engaging for every child.",
    },
    // {
    //   image: queriousPeople,
    //   title: "Proven Results",
    //   p: "Our programs are designed to bring out the best in every child, helping them shine both academically and personally.",
    // },
    // {
    //   image: queriousPeople,
    //   title: "Positive Environmentg",
    //   p: "We foster a supportive and encouraging atmosphere where children feel confident to explore and express themselves.",
    // },
  ];

  return (
    <div className="my-10 pt-5 space-y-5">
      {/* heading */}
      <div className="text-center space-y-5 px-10">

        <h1 className="text-md lg:text-lg font-semibold p-2 mx-auto bg-orange-300 rounded-3xl w-fit">Escape the traditional teaching</h1>

        <div className="text-[16px] md:text-lg lg:text-4xl font-semibold text-orange-400">
          <h2>Benefits of The Sparkle by Cultivate your Canvas</h2>
          <h3>Progressive Education Program</h3>
        </div>

        <div className=" text-sm md:text-lg lg:w-[35vw] mx-auto">
          <p>join Sprakle's progressive program and give your child a well-rounded education that sets them up for success in every part of life.</p>
        </div>

      </div>

      {/* gradient bg */}
      <div className="flex flex-wrap justify-center items-center py-10 gap-10 bg-gradient-to-b from-yellow-500 to-orange-500 ">

        {
          data.map((item, idx) => (
            <div className="w-[340px] h-[400px] rounded-lg shadow-white shadow-md flex flex-col items-center p-3 space-y-5 text-center bg-white ">
              <img
                src={item.image}
                alt="img"
                className="size-[130px] rounded-full bg-red-500"
              />
              <h1 className="font-semibold text-2xl">{item.title}</h1>
              <p>{item.p}</p>
            </div>

          ))
        }

      </div>
    </div>
  );
};

export default WhyChooseUs;

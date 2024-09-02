import React from "react";

// card img
import ExperiencedInstructors from "../../assets/texture/useableImages/ExperiencedInstructors.webp";
import HolisticDevelopment from "../../assets/texture/useableImages/HolisticDevelopment.webp";
import SafeSecureEnvironment from "../../assets/texture/useableImages/Safe & Secure Environment.webp";
import ParentInvolvement from "../../assets/texture/useableImages/parental-involvement.jpg";
import FlexiblePrograms from "../../assets/texture/useableImages/Flexible Programs.jpg";
import CreativeLearning from "../../assets/texture/useableImages/nursery_teacher_3.webp";



import AnimatedComponent2 from "../../components/Animation/AnimatedComponent2";


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

  ];

  return (
    <div className="my-10 pt-5 space-y-5">
      {/* heading */}
      <div className="text-center space-y-5 px-10">

        <h2 className="text-sm lg:text-lg font-semibold p-2 mx-auto bg-orange-300 rounded-3xl w-fit">Escape the traditional teaching</h2>

        <div className="text-lg lg:text-4xl font-semibold text-orange-400">
          <h2 className="text-xl md:text-4xl">Benefits of The Sparkle Kids Academy</h2>
          <h3 className="text-xl md:text-4xl">Progressive Education Program</h3>
        </div>

        <div className=" text-sm md:text-lg lg:w-[35vw] mx-auto">
          <p>join Sprakle's progressive program and give your child a well-rounded education that sets them up for success in every part of life.</p>
        </div>

      </div>

      {/* gradient bg */}
      <div className="flex flex-wrap justify-center items-center py-10 gap-10 bg-gradient-to-b from-yellow-500 to-orange-500 overflow-hidden">

        {
          data.map((item, idx) => (
            <AnimatedComponent2 key={idx}>
              <div
                className="w-[340px] h-[400px] rounded-lg shadow-white shadow-md flex flex-col items-center p-3 space-y-5 text-center bg-white">
                <img
                  src={item.image}
                  alt="img"
                  className="size-[130px] rounded-full bg-red-500"
                />
                <h2 className="font-semibold text-2xl">{item.title}</h2>
                <p>{item.p}</p>
              </div>
            </AnimatedComponent2>

          ))
        }

      </div>
    </div>
  );
};

export default WhyChooseUs;

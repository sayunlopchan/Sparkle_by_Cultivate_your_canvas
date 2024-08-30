import React from "react";
import StaticHeader from "../../components/StaticHeader/StaticHeader";

// bannerImage
import bannerImage from "../../assets/image/useables/bg-cover.jpg";

// program imgs
import arts from "../../assets/image/program/art/art.webp";
import yoga from "../../assets/image/program/yoga/yoga1.webp";
import publicSpeaking from "../../assets/image/people/chairWomen/chairwomen1.webp";
import dance from "../../assets/image/program/dance/dance.webp";
import personallityDevelopment from "../../assets/image/program/art/kid2.webp";

// icons
import prop1 from "../../assets/icons/arts.svg";
import prop2 from "../../assets/icons/yoga.svg";
import prop3 from "../../assets/icons/publicSpeaking.svg";
import prop4 from "../../assets/icons/dance-.svg";
import prop5 from "../../assets/texture/useableImages/mindful.webp";

import AnimatedComponent2 from "../../components/Animation/AnimatedComponent2";
import AnimatedComponent from "../../components/Animation/AnimatedComponent";
import Useable from "../../components/Useable/Useable";
import Booking from "../../components/booking";





const Program = () => {
  const programData = [
    {
      image: arts,
      icon: prop1,
      title: "Arts",
      para: `At <strong>Sparkle Kids Academy</strong>, our art classes, led by the talented young artist <strong>Lujala Shakya</strong>, offer children a unique opportunity to explore their creativity and imagination. Art plays a vital role in a child's development, helping them to express their thoughts and emotions in a visual and tangible way. Through our art program, students will develop fine motor skills, enhance their problem-solving abilities, and improve their visual-spatial understanding.
            <br />
            Art encourages children to think critically, make decisions, and explore different perspectives. It fosters creativity and innovation, allowing kids to experiment with colors, shapes, and techniques, leading to a deeper understanding of the world around them. Under Lujala Shakya's guidance, students are inspired to create and express themselves freely, building confidence and self-esteem. Engaging in art not only nurtures a child's artistic talents but also contributes to their overall cognitive and emotional development, making it an essential part of a well-rounded education.`,
    },
    {
      image: yoga,
      icon: prop2,
      title: "Yoga",
      para: `At <strong>Sparkle Kids Academy</strong>, our yoga program, led by the experienced  <strong>Ira Sushmita Chamling Rai</strong>, is designed to provide children with a holistic approach to physical and mental well-being. Yoga offers a myriad of benefits for young learners, fostering not only physical strength and flexibility but also mental clarity and emotional balance. Through carefully structured sessions, Ira guides students in practicing various yoga poses, breathing exercises, and mindfulness techniques that are tailored to their developmental needs.
            <br />
            Children engaged in our yoga program will experience improved focus, enhanced concentration, and better stress management. The practice of yoga helps in developing body awareness, promoting healthy posture, and increasing overall physical coordination. Additionally, yoga encourages self-discipline and cultivates a sense of inner calm, empowering children to navigate life's challenges with resilience and confidence. Under Ira Sushmita Chamling Rai's expert instruction, our students are nurtured in a supportive environment where they can grow both physically and emotionally, laying a strong foundation for lifelong health and well-being.`,
    },
    {
      image: publicSpeaking,
      icon: prop3,
      title: "Public Speaking",
      para: `At <strong>Sparkle Kids Academy</strong>, our public speaking program, led by certified trainer <strong>Snehalata Raut Thapa</strong>, is designed to empower children with the confidence and communication skills they need to succeed. Public speaking is a vital skill that helps students articulate their thoughts clearly, organize their ideas effectively, and engage with an audience. Through our program, children learn to overcome the fear of speaking in public, building self-assurance and poise in various social and academic settings. These skills are essential for future leadership roles, as they enable students to express themselves confidently and persuasively. Under Snehalata Raut Thapa's expert guidance, our students develop not only as communicators but also as thoughtful and articulate individuals, ready to take on the challenges of the future.`,
    },
    {
      image: dance,
      icon: prop4,
      title: "Dance",
      para: `At <strong>Sparkle Kids Academy</strong>, our dance program, led by esteemed instructor <strong >Rosy Shrestha</a></strong>, offers children an exceptional opportunity to explore the art of dance. This program is designed to foster both physical and cognitive development in a structured yet creative environment. Through our curriculum, students will enhance their coordination, balance, and flexibility, while also cultivating discipline and focus. Dance encourages self-expression and creativity, providing children with the tools to build confidence and resilience. Under Rosy Shrestha's expert guidance, our program not only teaches the technical aspects of dance but also instills a deep appreciation for the art form, preparing students for future success both on and off the stage.`,
    },
    {
      image: personallityDevelopment,
      icon: prop5,
      title: "Personality Development",
      para: `At <strong>Sparkle Kids Academy</strong>, our Personality Development program is meticulously designed to provide children with the essential grooming and life skills they need to excel in all aspects of life. This comprehensive course goes beyond basic education to encompass personal hygiene, dining etiquette, effective communication, and social interaction. We place a strong emphasis on instilling self-discipline, confidence, and a positive self-image, which are critical components of a well-rounded personality.
            <br />
            Through carefully crafted lessons and practical experiences, students learn how to present themselves with grace and professionalism in various settings. They acquire the social skills necessary to interact confidently and respectfully with others, preparing them for both personal and professional success. By the end of the program, children are not only well-versed in proper etiquette but also equipped with the self-assurance needed to navigate diverse social and academic environments. This program is a pivotal step in their journey towards becoming confident, polished, and future-ready individuals.`,
    },
  ];

  return (
    <div className="bg-[#CCE0FF] overflow-hidden">
      <StaticHeader />
      <div className="space-y-5">
        {/* heading */}
        <Useable
          message={"Sparklye by CYC"}
          mainText={"Building Tomorrows Leaders:"}
          subText={"Inspiring Innovation and Confidence in Every Child"}
        />

        {/* Banner Image */}
        <div className="w-[90vw] mx-auto object-cover border-t-8 border-t-red-500 border-r-8 border-r-green-500 border-b-8 border-b-blue-500 border-l-8 border-l-yellow-500 rounded-3xl overflow-hidden">
          <img src={bannerImage} alt={bannerImage} />
        </div>

        {/* Program Sections */}
        {programData.map((program, index) => (
          <React.Fragment key={index}>
            <div
              className={`flex ${index % 2 === 0
                ? "max-lg:flex-col"
                : "flex-row-reverse max-lg:flex-col"
                } gap-6 md:gap-24 p-10 items-center`}
            >
              <div className="lg:w-[40%]">
                <AnimatedComponent>
                  <img
                    src={program.image}
                    alt={program.title}
                    className={`animate-animate shadow-xl max-lg:h-[300px] max-sm:h-full max-md:hidden`}
                  />
                </AnimatedComponent>
              </div>
              <div className="lg:w-[60%]">
                <AnimatedComponent2>
                  <div className="flex justify-center items-start flex-col">
                    <img src={program.icon} alt="" className="size-[100px]" />
                    <h1 className="font-bold text-[30px]">
                      {program.title}
                    </h1>
                  </div>
                  <p
                    className="p-text"
                    dangerouslySetInnerHTML={{ __html: program.para }}
                  />
                </AnimatedComponent2>
              </div>
            </div>

            {/* Conditionally render the Booking component after the second program */}
            {index === 1 && <Booking />}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default Program;

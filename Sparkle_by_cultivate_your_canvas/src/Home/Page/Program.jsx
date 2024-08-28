import React, { useEffect, useRef, useState } from 'react'
import StaticHeader from '../../components/StaticHeader/StaticHeader'



// bannerImage
import bannerImage from '../../assets/image/about/bg-cover.jpg'



// program imgs
import arts from '../../assets/image/fun-activities/art/art.jpg'
import yoga from '../../assets/image/fun-activities/yoga/yoga1.jpg'
import publicSpeaking from '../../assets/image/fun-activities/yoga/yoga1.jpg'
import dance from '../../assets/image/fun-activities/dance/dance.jpg'
import personallityDevelopment from '../../assets/image/fun-activities/dance/dance.jpg'


// icons
import prop1 from '../../assets/icons/arts.svg';
import prop2 from '../../assets/icons/yoga.svg';
import prop3 from '../../assets/icons/publicSpeaking.svg';
import prop4 from '../../assets/icons/dance-.svg';
import prop5 from '../../assets/image/vector/mindful.png';


const Program = () => {

  return (
    <div>
      <StaticHeader />
      <div className='space-y-5'>

        {/* heading */}
        <div className=" text-center space-y-5 p-10 bg-gray-300">
          <div className="relative h-[200px]">
            <div class="absolute inset-0 rounded-xl bg-gradient-to-r from-green-500 via-blue-500 to-red-500 opacity-50 blur-2xl">
            </div>
            <div className="absolute z-20 mt-10 w-full space-y-5">
              <span className="p-2 bg-red-300 text-sm font-[500] rounded-full border border-b-2 border-black">
                Have Questions?
              </span>

              <div className="font-semibold text-[24px]">
                <h1>Come and visit our office</h1>
                <h2>Know us More!</h2>
              </div>
            </div>
          </div>

        </div>


        {/* img */}
        <div
          className="w-90vw h-[260px] md:h-[540px]
             bg-cover bg-center m-10
             border-t-8 border-t-red-500 border-r-8 border-r-green-500 border-b-8 border-b-blue-500 border-l-8 border-l-yellow-500 rounded-3xl"
          style={{ backgroundImage: `url(${bannerImage})` }}>
        </div>




        {/* art */}
        <div
          className={`flex max-lg:flex-col gap-6 md:gap-24 p-10 items-center }`}
        >
          <div className='lg:w-[40%]'>
            <img src={arts} alt="img" className={` max-lg:h-[300px] max-sm:h-full animate-animate shadow-xl max-md:hidden`} />
          </div>
          <div className='lg:w-[60%]'>
            <div className='flex justify-center items-start flex-col '>
              <img src={prop1} alt="" className='size-[100px]' />
              <h1 className='mx-5 font-bold text-[30px] '>Arts</h1>
            </div>
            <p className='p-text'>At <strong>Sparkle Kids Academy</strong>, our art classes, led by the talented young artist <strong className='text-red-500 italic'><a href="">Lujala Shakya</a></strong> , offer children a unique opportunity to explore their creativity and imagination. Art plays a vital role in a child's development, helping them to express their thoughts and emotions in a visual and tangible way. Through our art program, students will develop fine motor skills, enhance their problem-solving abilities, and improve their visual-spatial understanding.
              <br />
              Art encourages children to think critically, make decisions, and explore different perspectives. It fosters creativity and innovation, allowing kids to experiment with colors, shapes, and techniques, leading to a deeper understanding of the world around them. Under Lujala Shakya's guidance, students are inspired to create and express themselves freely, building confidence and self-esteem. Engaging in art not only nurtures a child's artistic talents but also contributes to their overall cognitive and emotional development, making it an essential part of a well-rounded education.</p>
          </div>
        </div>

        {/* Yoga */}
        <div
          className={`flex flex-row-reverse max-lg:flex-col gap-6 md:gap-24 p-10 items-center`}
        >
          <div className='lg:w-[40%]'>
            <img src={yoga} alt="img" className={`animate-blob shadow-xl max-lg:h-[300px] max-sm:h-full max-md:hidden`} />
          </div>
          <div className='lg:w-[60%]'>
            <div className='flex justify-center items-start flex-col '>
              <img src={prop2} alt="" className='size-[100px]' />
              <h1 className='mx-5 font-bold text-[30px] '>Yoga</h1>
            </div>
            <p className='p-text'>At <strong>Sparkle Kids Academy</strong>, our yoga program, led by the experienced  <strong className='text-red-500 italic'><a href="">Ira Sushmita Chamling Rai</a></strong>, is designed to provide children with a holistic approach to physical and mental well-being. Yoga offers a myriad of benefits for young learners, fostering not only physical strength and flexibility but also mental clarity and emotional balance. Through carefully structured sessions, Ira guides students in practicing various yoga poses, breathing exercises, and mindfulness techniques that are tailored to their developmental needs.
              <br />
              Children engaged in our yoga program will experience improved focus, enhanced concentration, and better stress management. The practice of yoga helps in developing body awareness, promoting healthy posture, and increasing overall physical coordination. Additionally, yoga encourages self-discipline and cultivates a sense of inner calm, empowering children to navigate life's challenges with resilience and confidence. Under Ira Sushmita Chamling Rai’s expert instruction, our students are nurtured in a supportive environment where they can grow both physically and emotionally, laying a strong foundation for lifelong health and well-being.</p>
          </div>
        </div>

        {/* Public speaking */}
        <div

          className={`flex max-lg:flex-col gap-6 md:gap-24 p-10 items-center  `}
        >
          <div className='lg:w-[40%]'>
            <img src={publicSpeaking} alt="img" className={`animate-animate shadow-xl max-lg:h-[300px] max-sm:h-full max-md:hidden`} />
          </div>
          <div className='lg:w-[60%]'>
            <div className='flex justify-center items-start flex-col '>
              <img src={prop3} alt="" className='size-[100px]' />
              <h1 className='mx-5 font-bold text-[30px] '>Public Speaking</h1>
            </div>
            <p className='p-text'>At <strong>Sparkle Kids Academy</strong>, our public speaking program, led by certified trainer <strong className='text-red-500 italic'><a href="">Snehalata Raut Thapa</a></strong>, is designed to empower children with the confidence and communication skills they need to succeed. Public speaking is a vital skill that helps students articulate their thoughts clearly, organize their ideas effectively, and engage with an audience. Through our program, children learn to overcome the fear of speaking in public, building self-assurance and poise in various social and academic settings. These skills are essential for future leadership roles, as they enable students to express themselves confidently and persuasively. Under <i> Snehalata Raut Thapa's</i> expert guidance, our students develop not only as communicators but also as thoughtful and articulate individuals, ready to take on the challenges of the future.</p>
          </div>
        </div>

        {/* dance*/}
        <div

          className={`flex flex-row-reverse max-lg:flex-col gap-6 md:gap-24 p-10 items-center `}
        >
          <div className='lg:w-[40%]'>
            <img src={dance} alt="img" className={`animate-blob shadow-xl max-lg:h-[300px] max-sm:h-full max-md:hidden`} />
          </div>
          <div className='lg:w-[60%]'>
            <div className='flex justify-center items-start flex-col '>
              <img src={prop4} alt="" className='size-[100px]' />
              <h1 className='mx-5 font-bold text-[30px] '>Dance</h1>
            </div>
            <p className='p-text'>At <strong>Sparkle Kids Academy</strong>, our dance program, led by esteemed instructor <strong className='text-red-500 italic'><a href="">Rosy Shrestha</a></strong>, offers children an exceptional opportunity to explore the art of dance. This program is designed to foster both physical and cognitive development in a structured yet creative environment. Through our curriculum, students will enhance their coordination, balance, and flexibility, while also cultivating discipline and focus. Dance encourages self-expression and creativity, providing children with the tools to build confidence and resilience. Under Rosy Shrestha's expert guidance, our program not only teaches the technical aspects of dance but also instills a deep appreciation for the art form, preparing students for future success both on and off the stage.</p>
          </div>
        </div>

        {/* personality development*/}
        <div

          className={`flex flex-row-reverse max-lg:flex-col gap-6 md:gap-24 p-10 items-center `}
        >
          <div className='lg:w-[40%]'>
            <img src={personallityDevelopment} alt="img" className={`animate-blob shadow-xl max-lg:h-[300px] max-sm:h-full max-md:hidden`} />
          </div>
          <div className='lg:w-[60%]'>
            <div className='flex justify-center items-start flex-col '>
              <img src={prop5} alt="" className='w-[200px]' />
              <h1
                className='mx-5 font-bold text-[30px] '>
                PERSONALITY DEVELOPMENT</h1>
            </div>
            <p className='p-text'>At <strong>Sparkle Kids Academy</strong>, our dance program, led by esteemed instructor, our Personality Development program is meticulously designed to provide children with the essential grooming and life skills they need to excel in all aspects of life. This comprehensive course goes beyond basic education to encompass personal hygiene, dining etiquette, effective communication, and social interaction. We place a strong emphasis on instilling self-discipline, confidence, and a positive self-image, which are critical components of a well-rounded personality.
              <br />
              Through carefully crafted lessons and practical experiences, students learn how to present themselves with grace and professionalism in various settings. They acquire the social skills necessary to interact confidently and respectfully with others, preparing them for both personal and professional success. By the end of the program, children are not only well-versed in proper etiquette but also equipped with the self-assurance needed to navigate diverse social and academic environments. This program is a pivotal step in their journey towards becoming confident, polished, and future-ready individuals..</p>
          </div>
        </div>


      </div>
    </div >
  )
}

export default Program
import React from "react";



import reviewImg from "../../assets/image/vector/5471.jpg";
import CarouselSlider from "../../components/CarouselSlider/CarouselSlider";

const CarouselUi = () => {
  return (
    <div>
      <h1 className="font-bold text-4xl text-center">
        Check Out What Our Customers Have to Say.
      </h1>
      <div className="lg:grid lg:grid-cols-2 p-10 gap-5">
        <section className="text-center">
          <img src={reviewImg} alt="review img" />
        </section>
        <article>
          <span className="gradient-Text-2 font-bold">Testimonials </span>
          <CarouselSlider />
        </article>
      </div>
    </div>
  );
};

export default CarouselUi;

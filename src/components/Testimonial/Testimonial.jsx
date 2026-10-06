import React from "react";
import Slider from "react-slick";

const principles = [
  {
    id: 1,
    number: "01",
    title: "Make choices easy to compare",
    text: "Consistent cards keep the dish, description, category, and price in predictable locations across the menu.",
  },
  {
    id: 2,
    number: "02",
    title: "Keep state visible",
    text: "The cart count, quantities, subtotal, and confirmation state respond immediately as the order changes.",
  },
  {
    id: 3,
    number: "03",
    title: "Respect different visitors",
    text: "Keyboard-friendly controls, semantic structure, reduced-motion support, responsive layouts, and persistent theme preferences are built in.",
  },
];

const Testimonial = () => {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: false,
    adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section
      id="experience"
      className="scroll-mt-20 bg-white py-20 dark:bg-stone-950"
    >
      <div className="container">
        <div
          className="mx-auto max-w-2xl text-center"
          data-aos="fade-up"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-primary">
            Product principles
          </p>

          <h2 className="mt-3 text-3xl font-bold sm:text-5xl">
            Designed for confident ordering
          </h2>

          <p className="mt-4 leading-7 text-stone-600 dark:text-stone-300">
            The interface is intentionally direct,
            responsive, and honest about what this
            portfolio prototype does.
          </p>
        </div>

        <div
          className="mx-auto mt-12 max-w-5xl"
          data-aos="zoom-in"
        >
          <Slider {...settings}>
            {principles.map((principle) => (
              <div
                key={principle.id}
                className="px-3 pb-9"
              >
                <article className="min-h-[260px] rounded-3xl border border-stone-200 bg-stone-50 p-7 shadow-sm dark:border-stone-800 dark:bg-stone-900">
                  <p className="text-5xl font-bold text-primary/25">
                    {principle.number}
                  </p>

                  <h3 className="mt-5 text-2xl font-bold">
                    {principle.title}
                  </h3>

                  <p className="mt-4 leading-7 text-stone-600 dark:text-stone-300">
                    {principle.text}
                  </p>
                </article>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;

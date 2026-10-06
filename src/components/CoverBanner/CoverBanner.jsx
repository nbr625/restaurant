import React from "react";
import bgCoverImg from "../../assets/biryani_cover.jpg";

const CoverBanner = () => (
  <section
    className="relative flex min-h-[360px] items-center bg-cover bg-center bg-fixed"
    style={{
      backgroundImage: `url(${bgCoverImg})`,
    }}
    aria-label="Freshly prepared Indian food"
  >
    <div className="absolute inset-0 bg-stone-950/65" />

    <div
      className="container relative text-center text-white"
      data-aos="zoom-in"
    >
      <p className="text-sm font-semibold uppercase tracking-[0.24em] text-amber-300">
        Built around the meal
      </p>

      <h2 className="mx-auto mt-3 max-w-3xl text-3xl font-bold leading-tight sm:text-5xl">
        From the first choice to the final review,
        ordering should feel effortless
      </h2>
    </div>
  </section>
);

export default CoverBanner;

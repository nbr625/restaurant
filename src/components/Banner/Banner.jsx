import React from "react";
import BiryaniImg from "../../assets/biryani5.png";
import { GrSecure } from "react-icons/gr";
import { IoFastFood } from "react-icons/io5";
import { GiFoodTruck } from "react-icons/gi";

const highlights = [
  {
    label: "Clear checkout",
    detail: "Review every item before continuing",
    icon: GrSecure,
  },
  {
    label: "Prepared fresh",
    detail: "A focused menu made to order",
    icon: IoFastFood,
  },
  {
    label: "Pickup or delivery",
    detail:
      "Choose the handoff that fits your day",
    icon: GiFoodTruck,
  },
];

const Banner = ({
  featuredItem,
  onAddToCart,
}) => (
  <section
    id="about"
    className="scroll-mt-20 overflow-hidden bg-stone-50 py-20 dark:bg-stone-950"
  >
    <div className="container">
      <div className="grid items-center gap-12 lg:grid-cols-2">
        <div
          className="relative"
          data-aos="fade-right"
        >
          <div className="absolute inset-12 rounded-full bg-primary/15 blur-3xl" />

          <img
            src={BiryaniImg}
            alt="Chicken biryani served with cooling raita"
            className="relative mx-auto w-full max-w-[500px] drop-shadow-2xl"
          />
        </div>

        <div data-aos="fade-left">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-primary">
            Made deliberately
          </p>

          <h2 className="mt-3 text-3xl font-bold leading-tight sm:text-5xl">
            A shorter menu makes room for better decisions
          </h2>

          <p className="mt-5 max-w-xl leading-7 text-stone-600 dark:text-stone-300">
            Foodie is a restaurant-ordering product
            concept centered on clear choices. Every dish
            includes useful details, consistent pricing,
            and a direct path into the order flow.
          </p>

          <div className="mt-8 space-y-4">
            {highlights.map(
              ({
                label,
                detail,
                icon: Icon,
              }) => (
                <div
                  key={label}
                  className="flex items-center gap-4 rounded-2xl border border-stone-200 bg-white p-4 shadow-sm dark:border-stone-800 dark:bg-stone-900"
                >
                  <Icon
                    aria-hidden="true"
                    className="h-12 w-12 shrink-0 rounded-full bg-amber-100 p-3 text-primary dark:bg-stone-800"
                  />

                  <div>
                    <h3 className="font-bold">
                      {label}
                    </h3>

                    <p className="mt-1 text-sm text-stone-600 dark:text-stone-400">
                      {detail}
                    </p>
                  </div>
                </div>
              )
            )}
          </div>

          <button
            type="button"
            onClick={() =>
              onAddToCart(featuredItem)
            }
            className="mt-8 rounded-full bg-gradient-to-r from-primary to-secondary px-6 py-3 font-semibold text-white shadow-md transition hover:-translate-y-0.5 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 dark:focus:ring-offset-stone-950"
          >
            Add the signature biryani · $
            {featuredItem.price}
          </button>
        </div>
      </div>
    </div>
  </section>
);

export default Banner;

import React from "react";
import Img1 from "../../assets/biryani.png";
import Img2 from "../../assets/biryani2.png";
import Img3 from "../../assets/biryani4.png";
import { FaPlus } from "react-icons/fa6";

export const MENU_ITEMS = [
  {
    id: "signature-biryani",
    img: Img1,
    name: "Signature Chicken Biryani",
    description:
      "Fragrant basmati rice, tender chicken, caramelized onion, saffron, mint, and cooling raita.",
    price: 18,
    category: "House favorite",
  },
  {
    id: "homestyle-curry",
    img: Img2,
    name: "Homestyle Chicken Curry",
    description:
      "Slow-simmered chicken in a tomato, ginger, and toasted-spice sauce, served with basmati rice.",
    price: 16,
    category: "Comfort classic",
  },
  {
    id: "cardamom-coffee",
    img: Img3,
    name: "Cardamom Cold Coffee",
    description:
      "Chilled coffee blended with milk, cardamom, and a lightly sweetened house cream.",
    price: 6,
    category: "House drink",
  },
];

const Services = ({ onAddToCart }) => (
  <section
    id="menu"
    className="scroll-mt-20 bg-white py-20 dark:bg-stone-900"
  >
    <div className="container">
      <div
        className="mx-auto max-w-2xl text-center"
        data-aos="fade-up"
      >
        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-primary">
          A focused menu
        </p>

        <h2 className="mt-3 text-3xl font-bold sm:text-5xl">
          Choose your next favorite
        </h2>

        <p className="mt-4 leading-7 text-stone-600 dark:text-stone-300">
          A small collection built around bold flavor,
          consistent preparation, and dishes that travel
          well.
        </p>
      </div>

      <div className="mt-16 grid gap-8 md:grid-cols-3">
        {MENU_ITEMS.map((item, index) => (
          <article
            key={item.id}
            data-aos="fade-up"
            data-aos-delay={index * 100}
            className="group flex h-full flex-col overflow-hidden rounded-3xl border border-stone-200 bg-amber-50/60 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-stone-700 dark:bg-stone-800"
          >
            <div className="flex h-56 items-center justify-center bg-gradient-to-br from-amber-100 to-orange-50 p-5 dark:from-stone-800 dark:to-stone-900">
              <img
                src={item.img}
                alt={item.name}
                className="h-full w-full object-contain drop-shadow-xl transition duration-500 group-hover:scale-105 group-hover:rotate-2"
              />
            </div>

            <div className="flex flex-1 flex-col p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">
                {item.category}
              </p>

              <h3 className="mt-2 text-xl font-bold">
                {item.name}
              </h3>

              <p className="mt-3 flex-1 leading-6 text-stone-600 dark:text-stone-300">
                {item.description}
              </p>

              <div className="mt-6 flex items-center justify-between border-t border-stone-200 pt-4 dark:border-stone-700">
                <span className="text-2xl font-bold">
                  ${item.price}
                </span>

                <button
                  type="button"
                  onClick={() => onAddToCart(item)}
                  className="flex items-center gap-2 rounded-full bg-stone-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-primary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 dark:bg-white dark:text-stone-900 dark:hover:bg-primary dark:hover:text-white dark:focus:ring-offset-stone-800"
                >
                  <FaPlus aria-hidden="true" />
                  Add to order
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default Services;

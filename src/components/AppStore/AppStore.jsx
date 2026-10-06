import React from "react";
import Gif from "../../assets/mobile_bike.gif";
import {
  FaBagShopping,
  FaCheck,
  FaLocationDot,
} from "react-icons/fa6";

const steps = [
  {
    title: "Build your order",
    text: "Add dishes and adjust quantities without losing context.",
    icon: FaBagShopping,
  },
  {
    title: "Review the details",
    text: "See an immediate item count and subtotal before checkout.",
    icon: FaCheck,
  },
  {
    title: "Choose the handoff",
    text: "The prototype supports the next step toward pickup or delivery.",
    icon: FaLocationDot,
  },
];

const AppStore = () => (
  <section className="bg-amber-50 py-20 dark:bg-stone-900">
    <div className="container">
      <div className="grid items-center gap-12 lg:grid-cols-2">
        <div data-aos="fade-up">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-primary">
            From menu to doorstep
          </p>

          <h2 className="mt-3 text-3xl font-bold leading-tight sm:text-5xl">
            A complete ordering flow, not a collection
            of dead buttons
          </h2>

          <p className="mt-5 max-w-xl leading-7 text-stone-600 dark:text-stone-300">
            The experience uses shared application
            state, persistent cart data, accessible
            controls, and clear feedback to make the
            prototype feel like a coherent product.
          </p>

          <ol className="mt-8 space-y-4">
            {steps.map(
              (
                {
                  title,
                  text,
                  icon: Icon,
                },
                index
              ) => (
                <li
                  key={title}
                  className="flex gap-4 rounded-2xl bg-white p-4 shadow-sm dark:bg-stone-800"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-amber-100 text-primary dark:bg-stone-700">
                    <Icon aria-hidden="true" />
                  </div>

                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-stone-500">
                      Step {index + 1}
                    </p>

                    <h3 className="mt-1 font-bold">
                      {title}
                    </h3>

                    <p className="mt-1 text-sm leading-6 text-stone-600 dark:text-stone-300">
                      {text}
                    </p>
                  </div>
                </li>
              )
            )}
          </ol>
        </div>

        <div
          data-aos="zoom-in"
          className="relative"
        >
          <div className="absolute inset-12 rounded-full bg-primary/15 blur-3xl" />

          <img
            src={Gif}
            alt="Animated delivery rider representing the order handoff"
            className="relative mx-auto block w-full max-w-lg rounded-3xl mix-blend-multiply dark:mix-blend-screen"
          />
        </div>
      </div>
    </div>
  </section>
);

export default AppStore;

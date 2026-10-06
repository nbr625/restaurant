import React from "react";
import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaLocationDot,
} from "react-icons/fa6";
import footerLogo from "../../assets/food-logo.png";

const footerLinks = [
  {
    name: "Home",
    link: "#home",
  },
  {
    name: "Menu",
    link: "#menu",
  },
  {
    name: "About",
    link: "#about",
  },
  {
    name: "Experience",
    link: "#experience",
  },
];

const Footer = () => (
  <footer className="border-t border-stone-200 bg-stone-100 dark:border-stone-800 dark:bg-stone-950">
    <div className="container py-12">
      <div className="grid gap-10 md:grid-cols-[1.5fr_0.7fr_0.8fr]">
        <div>
          <a
            href="#home"
            className="flex items-center gap-3 text-2xl font-bold"
            aria-label="Foodie home"
          >
            <img
              src={footerLogo}
              alt=""
              className="h-12 w-12 object-contain"
            />
            Foodie
          </a>

          <p className="mt-4 max-w-lg leading-7 text-stone-600 dark:text-stone-300">
            A restaurant-ordering product concept
            demonstrating reusable React components,
            shared state, local persistence, responsive
            design, and accessible interactions.
          </p>

          <p className="mt-3 text-sm text-stone-500 dark:text-stone-400">
            Portfolio prototype only. No orders,
            payments, or personal information are
            transmitted.
          </p>
        </div>

        <nav aria-label="Footer navigation">
          <h2 className="font-bold">Explore</h2>

          <ul className="mt-4 space-y-3">
            {footerLinks.map((item) => (
              <li key={item.link}>
                <a
                  href={item.link}
                  className="text-stone-600 transition hover:text-primary dark:text-stone-300 dark:hover:text-amber-400"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="font-bold">Project</h2>

          <p className="mt-4 flex items-center gap-2 text-stone-600 dark:text-stone-300">
            <FaLocationDot
              aria-hidden="true"
              className="text-primary"
            />
            Oakland, California
          </p>

          <div className="mt-5 flex items-center gap-4 text-2xl">
            <a
              href="https://github.com/nbr625/restaurant"
              target="_blank"
              rel="noreferrer"
              aria-label="View the restaurant project on GitHub"
              className="transition hover:text-primary"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/nicolas-berrizbeitia-658212b6/"
              target="_blank"
              rel="noreferrer"
              aria-label="Nicolas Berrizbeitia on LinkedIn"
              className="transition hover:text-primary"
            >
              <FaLinkedin />
            </a>

            <a
              href="mailto:nbr625@gmail.com"
              aria-label="Email Nicolas Berrizbeitia"
              className="transition hover:text-primary"
            >
              <FaEnvelope />
            </a>
          </div>
        </div>
      </div>

      <div className="mt-10 border-t border-stone-300 pt-6 text-center text-sm text-stone-500 dark:border-stone-800 dark:text-stone-400">
        Designed and built by Nicolas Berrizbeitia
      </div>
    </div>
  </footer>
);

export default Footer;

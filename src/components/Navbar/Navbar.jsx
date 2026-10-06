import React from "react";
import Logo from "../../assets/food-logo.png";
import { FaCartShopping } from "react-icons/fa6";
import {
  HiMenuAlt3,
  HiX,
} from "react-icons/hi";
import DarkMode from "./DarkMode";

const menu = [
  {
    id: "home",
    name: "Home",
    link: "#home",
  },
  {
    id: "menu",
    name: "Menu",
    link: "#menu",
  },
  {
    id: "about",
    name: "About",
    link: "#about",
  },
  {
    id: "experience",
    name: "Experience",
    link: "#experience",
  },
];

const Navbar = ({ cartCount, onOpenCart }) => {
  const [isMenuOpen, setIsMenuOpen] =
    React.useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-stone-200/80 bg-white/90 shadow-sm backdrop-blur-md dark:border-stone-800 dark:bg-stone-950/90">
      <nav
        className="container flex h-20 items-center justify-between"
        aria-label="Primary navigation"
      >
        <a
          href="#home"
          className="flex items-center gap-2 text-2xl font-bold"
          aria-label="Foodie home"
        >
          <img
            src={Logo}
            alt=""
            className="h-11 w-11 object-contain"
          />
          <span>Foodie</span>
        </a>

        <ul className="hidden items-center gap-7 md:flex">
          {menu.map((item) => (
            <li key={item.id}>
              <a
                href={item.link}
                className="font-medium text-stone-700 transition hover:text-primary dark:text-stone-200 dark:hover:text-amber-400"
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <DarkMode />

          <button
            type="button"
            onClick={onOpenCart}
            className="relative flex items-center gap-2 rounded-full bg-gradient-to-r from-primary to-secondary px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 dark:focus:ring-offset-stone-950"
            aria-label={`Open order with ${cartCount} item${
              cartCount === 1 ? "" : "s"
            }`}
          >
            <span className="hidden sm:inline">
              Your order
            </span>

            <FaCartShopping
              aria-hidden="true"
              className="text-lg"
            />

            {cartCount > 0 && (
              <span className="absolute -right-2 -top-2 flex h-6 min-w-6 items-center justify-center rounded-full bg-stone-900 px-1 text-xs text-white ring-2 ring-white dark:bg-white dark:text-stone-900 dark:ring-stone-950">
                {cartCount}
              </span>
            )}
          </button>

          <button
            type="button"
            onClick={() =>
              setIsMenuOpen((current) => !current)
            }
            className="rounded-lg p-2 text-2xl transition hover:bg-stone-100 dark:hover:bg-stone-800 md:hidden"
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            aria-label={
              isMenuOpen
                ? "Close navigation"
                : "Open navigation"
            }
          >
            {isMenuOpen ? <HiX /> : <HiMenuAlt3 />}
          </button>
        </div>
      </nav>

      <div
        id="mobile-menu"
        className={`${
          isMenuOpen ? "grid" : "hidden"
        } border-t border-stone-200 bg-white px-4 py-5 shadow-lg dark:border-stone-800 dark:bg-stone-950 md:hidden`}
      >
        {menu.map((item) => (
          <a
            key={item.id}
            href={item.link}
            onClick={() => setIsMenuOpen(false)}
            className="rounded-xl px-4 py-3 text-lg font-semibold transition hover:bg-amber-50 hover:text-primary dark:hover:bg-stone-800"
          >
            {item.name}
          </a>
        ))}
      </div>
    </header>
  );
};

export default Navbar;

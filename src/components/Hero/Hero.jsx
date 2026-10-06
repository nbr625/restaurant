import React from "react";
import Vector from "../../assets/vector3.png";

const Hero = ({ menuItems, onAddToCart }) => {
  const [selectedId, setSelectedId] =
    React.useState(menuItems[0].id);

  const selectedItem =
    menuItems.find((item) => item.id === selectedId) ??
    menuItems[0];

  const scrollToMenu = () => {
    document
      .getElementById("menu")
      ?.scrollIntoView({
        behavior: "smooth",
      });
  };

  return (
    <section
      id="home"
      className="relative flex min-h-[680px] items-center overflow-hidden bg-amber-50 pt-20 dark:bg-stone-950 sm:pt-24"
      style={{
        backgroundImage: `url(${Vector})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="container py-12 sm:py-16">
        <div className="grid items-center gap-8 lg:grid-cols-[1fr_0.9fr]">
          <div
            className="order-2 text-center lg:order-1 lg:text-left"
            data-aos="fade-right"
          >
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-primary">
              Contemporary Indian comfort food
            </p>

            <h1 className="mt-4 text-5xl font-bold leading-[1.05] sm:text-6xl lg:text-7xl">
              Comfort food,
              <span className="block bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                layered with spice
              </span>
            </h1>

            <p className="mx-auto mt-6 max-w-xl text-base leading-7 text-stone-600 dark:text-stone-300 lg:mx-0 lg:text-lg">
              Explore a focused menu of aromatic rice
              dishes, slow-simmered curries, and
              refreshing house drinks, prepared for easy
              pickup or delivery.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-3 lg:justify-start">
              <button
                type="button"
                onClick={scrollToMenu}
                className="rounded-full bg-gradient-to-r from-primary to-secondary px-6 py-3 font-semibold text-white shadow-lg transition hover:-translate-y-0.5 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 dark:focus:ring-offset-stone-950"
              >
                Explore the menu
              </button>

              <button
                type="button"
                onClick={() =>
                  onAddToCart(selectedItem)
                }
                className="rounded-full border border-stone-300 bg-white/80 px-6 py-3 font-semibold text-stone-900 transition hover:border-primary hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 dark:border-stone-700 dark:bg-stone-900 dark:text-white dark:focus:ring-offset-stone-950"
              >
                Add featured dish · ${selectedItem.price}
              </button>
            </div>

            <dl className="mt-10 grid grid-cols-3 gap-3 border-t border-stone-300/70 pt-6 dark:border-stone-700">
              <div>
                <dt className="text-xs uppercase tracking-wider text-stone-500 dark:text-stone-400">
                  Prep time
                </dt>
                <dd className="mt-1 font-bold">
                  25–35 min
                </dd>
              </div>

              <div>
                <dt className="text-xs uppercase tracking-wider text-stone-500 dark:text-stone-400">
                  Pickup
                </dt>
                <dd className="mt-1 font-bold">
                  Available
                </dd>
              </div>

              <div>
                <dt className="text-xs uppercase tracking-wider text-stone-500 dark:text-stone-400">
                  Location
                </dt>
                <dd className="mt-1 font-bold">
                  Oakland
                </dd>
              </div>
            </dl>
          </div>

          <div
            className="order-1 lg:order-2"
            data-aos="zoom-in"
          >
            <div className="relative mx-auto flex min-h-[390px] max-w-[560px] items-center justify-center sm:min-h-[500px]">
              <div className="absolute inset-10 rounded-full bg-gradient-to-br from-primary/25 to-secondary/10 blur-2xl" />

              <img
                key={selectedItem.id}
                src={selectedItem.img}
                alt={selectedItem.name}
                className="relative w-[320px] animate-[dish-enter_450ms_ease-out] drop-shadow-2xl sm:w-[470px]"
              />

              <div className="absolute bottom-0 left-1/2 flex -translate-x-1/2 gap-2 rounded-full border border-white/70 bg-white/80 p-2 shadow-xl backdrop-blur-md dark:border-stone-700 dark:bg-stone-900/80 sm:bottom-4 lg:left-auto lg:right-0 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-0 lg:flex-col">
                {menuItems.map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() =>
                      setSelectedId(item.id)
                    }
                    aria-label={`Show ${item.name}`}
                    aria-pressed={
                      selectedId === item.id
                    }
                    className={`h-16 w-16 rounded-full p-1 transition sm:h-20 sm:w-20 ${
                      selectedId === item.id
                        ? "bg-amber-100 ring-2 ring-primary"
                        : "hover:bg-amber-50 dark:hover:bg-stone-800"
                    }`}
                  >
                    <img
                      src={item.img}
                      alt=""
                      className="h-full w-full object-contain"
                    />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

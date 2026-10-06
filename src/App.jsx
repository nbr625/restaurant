import React from "react";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Services, {
  MENU_ITEMS,
} from "./components/Services/Services.jsx";
import Banner from "./components/Banner/Banner.jsx";
import AppStore from "./components/AppStore/AppStore.jsx";
import CoverBanner from "./components/CoverBanner/CoverBanner.jsx";
import Testimonial from "./components/Testimonial/Testimonial.jsx";
import Footer from "./components/Footer/Footer.jsx";
import OrderDrawer from "./components/OrderDrawer/OrderDrawer.jsx";
import AOS from "aos";
import "aos/dist/aos.css";

const getSavedCart = () => {
  try {
    return (
      JSON.parse(localStorage.getItem("foodie-cart")) ?? []
    );
  } catch {
    return [];
  }
};

const App = () => {
  const [cart, setCart] = React.useState(getSavedCart);
  const [isCartOpen, setIsCartOpen] =
    React.useState(false);

  const closeCart = React.useCallback(
    () => setIsCartOpen(false),
    []
  );

  React.useEffect(() => {
    AOS.init({
      offset: 80,
      duration: 650,
      easing: "ease-out-cubic",
      delay: 50,
      once: false,
      mirror: true,
      disable: () =>
        window.matchMedia(
          "(prefers-reduced-motion: reduce)"
        ).matches,
    });
  }, []);

  React.useEffect(() => {
    localStorage.setItem(
      "foodie-cart",
      JSON.stringify(cart)
    );
  }, [cart]);

  const addToCart = (item) => {
    setCart((current) => {
      const existingItem = current.find(
        (cartItem) => cartItem.id === item.id
      );

      if (existingItem) {
        return current.map((cartItem) =>
          cartItem.id === item.id
            ? {
                ...cartItem,
                quantity: cartItem.quantity + 1,
              }
            : cartItem
        );
      }

      return [
        ...current,
        {
          ...item,
          quantity: 1,
        },
      ];
    });

    setIsCartOpen(true);
  };

  const updateQuantity = (id, change) => {
    setCart((current) =>
      current
        .map((item) =>
          item.id === id
            ? {
                ...item,
                quantity: item.quantity + change,
              }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const removeFromCart = (id) => {
    setCart((current) =>
      current.filter((item) => item.id !== id)
    );
  };

  const cartCount = cart.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <div className="min-h-screen bg-white text-stone-900 transition-colors duration-300 dark:bg-stone-950 dark:text-white">
      <Navbar
        cartCount={cartCount}
        onOpenCart={() => setIsCartOpen(true)}
      />

      <main>
        <Hero
          menuItems={MENU_ITEMS}
          onAddToCart={addToCart}
        />

        <Services onAddToCart={addToCart} />

        <Banner
          featuredItem={MENU_ITEMS[0]}
          onAddToCart={addToCart}
        />

        <CoverBanner />
        <AppStore />
        <Testimonial />
      </main>

      <Footer />

      <OrderDrawer
        cart={cart}
        isOpen={isCartOpen}
        onClose={closeCart}
        onUpdateQuantity={updateQuantity}
        onRemove={removeFromCart}
        onClear={() => setCart([])}
      />
    </div>
  );
};

export default App;

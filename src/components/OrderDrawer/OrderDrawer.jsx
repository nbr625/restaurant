import React from "react";
import {
  FaMinus,
  FaPlus,
  FaTrash,
} from "react-icons/fa6";
import { IoCloseOutline } from "react-icons/io5";

const initialForm = {
  name: "",
  email: "",
  fulfillment: "pickup",
};

const OrderDrawer = ({
  cart,
  isOpen,
  onClose,
  onUpdateQuantity,
  onRemove,
  onClear,
}) => {
  const [step, setStep] = React.useState("cart");
  const [form, setForm] =
    React.useState(initialForm);

  const dialogRef = React.useRef(null);
  const closeButtonRef = React.useRef(null);

  const subtotal = cart.reduce(
    (total, item) =>
      total + item.price * item.quantity,
    0
  );

  React.useEffect(() => {
    if (!isOpen) {
      return undefined;
    }

    setStep("cart");

    const previousOverflow =
      document.body.style.overflow;

    const previouslyFocused =
      document.activeElement;

    document.body.style.overflow = "hidden";

    requestAnimationFrame(() =>
      closeButtonRef.current?.focus()
    );

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose();
      }

      if (event.key === "Tab") {
        const focusableElements =
          dialogRef.current?.querySelectorAll(
            'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
          );

        if (!focusableElements?.length) {
          return;
        }

        const firstElement =
          focusableElements[0];

        const lastElement =
          focusableElements[
            focusableElements.length - 1
          ];

        if (
          event.shiftKey &&
          document.activeElement === firstElement
        ) {
          event.preventDefault();
          lastElement.focus();
        } else if (
          !event.shiftKey &&
          document.activeElement === lastElement
        ) {
          event.preventDefault();
          firstElement.focus();
        }
      }
    };

    window.addEventListener(
      "keydown",
      handleKeyDown
    );

    return () => {
      document.body.style.overflow =
        previousOverflow;

      window.removeEventListener(
        "keydown",
        handleKeyDown
      );

      previouslyFocused?.focus();
    };
  }, [isOpen, onClose]);

  const updateField = (event) => {
    const { name, value } = event.target;

    setForm((current) => ({
      ...current,
      [name]: value,
    }));
  };

  const submitOrder = (event) => {
    event.preventDefault();
    setStep("success");
    onClear();
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div
      className="fixed inset-0 z-[100] bg-stone-950/60 backdrop-blur-sm"
      onMouseDown={onClose}
    >
      <aside
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="order-title"
        className="ml-auto flex h-full w-full max-w-lg flex-col bg-white text-stone-900 shadow-2xl dark:bg-stone-950 dark:text-white"
        onMouseDown={(event) =>
          event.stopPropagation()
        }
      >
        <header className="flex items-start justify-between border-b border-stone-200 p-6 dark:border-stone-800">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              Demo ordering flow
            </p>

            <h2
              id="order-title"
              className="mt-1 text-2xl font-bold"
            >
              {step === "cart"
                ? "Your order"
                : step === "checkout"
                  ? "Order details"
                  : "Order preview complete"}
            </h2>
          </div>

          <button
            ref={closeButtonRef}
            type="button"
            onClick={onClose}
            aria-label="Close order"
            className="rounded-full p-1 text-3xl transition hover:bg-stone-100 dark:hover:bg-stone-800"
          >
            <IoCloseOutline />
          </button>
        </header>

        {step === "success" ? (
          <div
            className="flex flex-1 flex-col items-center justify-center p-8 text-center"
            aria-live="polite"
          >
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-amber-100 text-3xl text-primary">
              ✓
            </div>

            <h3 className="mt-6 text-2xl font-bold">
              Thanks, {form.name}.
            </h3>

            <p className="mt-3 max-w-sm leading-7 text-stone-600 dark:text-stone-300">
              This portfolio prototype stops before
              payment, so nothing was submitted or
              charged. This state demonstrates the
              completed checkout response.
            </p>

            <button
              type="button"
              onClick={onClose}
              className="mt-7 rounded-full bg-primary px-6 py-3 font-semibold text-white"
            >
              Continue exploring
            </button>
          </div>
        ) : step === "checkout" ? (
          <form
            onSubmit={submitOrder}
            className="flex flex-1 flex-col overflow-y-auto p-6"
          >
            <div className="space-y-5">
              <div>
                <label
                  htmlFor="customer-name"
                  className="text-sm font-semibold"
                >
                  Name
                </label>

                <input
                  id="customer-name"
                  name="name"
                  value={form.name}
                  onChange={updateField}
                  required
                  autoFocus
                  className="mt-2 w-full rounded-xl border border-stone-300 bg-white px-4 py-3 outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 dark:border-stone-700 dark:bg-stone-900"
                />
              </div>

              <div>
                <label
                  htmlFor="customer-email"
                  className="text-sm font-semibold"
                >
                  Email
                </label>

                <input
                  id="customer-email"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={updateField}
                  required
                  className="mt-2 w-full rounded-xl border border-stone-300 bg-white px-4 py-3 outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 dark:border-stone-700 dark:bg-stone-900"
                />
              </div>

              <fieldset>
                <legend className="text-sm font-semibold">
                  Fulfillment
                </legend>

                <div className="mt-2 grid grid-cols-2 gap-3">
                  {[
                    "pickup",
                    "delivery",
                  ].map((option) => (
                    <label
                      key={option}
                      className={`cursor-pointer rounded-xl border p-4 text-center font-semibold capitalize transition ${
                        form.fulfillment === option
                          ? "border-primary bg-amber-50 text-primary dark:bg-stone-800"
                          : "border-stone-300 dark:border-stone-700"
                      }`}
                    >
                      <input
                        type="radio"
                        name="fulfillment"
                        value={option}
                        checked={
                          form.fulfillment ===
                          option
                        }
                        onChange={updateField}
                        className="sr-only"
                      />

                      {option}
                    </label>
                  ))}
                </div>
              </fieldset>
            </div>

            <div className="mt-auto pt-8">
              <div className="flex justify-between border-t border-stone-200 py-4 text-lg font-bold dark:border-stone-800">
                <span>Subtotal</span>
                <span>
                  ${subtotal.toFixed(2)}
                </span>
              </div>

              <p className="mb-4 text-xs leading-5 text-stone-500 dark:text-stone-400">
                Demo mode: this form does not transmit
                or store personal information and no
                payment is collected.
              </p>

              <button
                type="submit"
                className="w-full rounded-full bg-gradient-to-r from-primary to-secondary px-6 py-3 font-semibold text-white shadow-md"
              >
                Preview confirmation
              </button>

              <button
                type="button"
                onClick={() => setStep("cart")}
                className="mt-3 w-full py-2 font-semibold text-stone-600 hover:text-primary dark:text-stone-300"
              >
                Back to order
              </button>
            </div>
          </form>
        ) : (
          <div className="flex flex-1 flex-col overflow-y-auto p-6">
            {cart.length === 0 ? (
              <div className="flex flex-1 flex-col items-center justify-center text-center">
                <p className="text-xl font-bold">
                  Your order is empty
                </p>

                <p className="mt-2 text-stone-600 dark:text-stone-300">
                  Add a dish from the menu to begin.
                </p>

                <button
                  type="button"
                  onClick={() => {
                    onClose();

                    requestAnimationFrame(() =>
                      document
                        .getElementById("menu")
                        ?.scrollIntoView({
                          behavior: "smooth",
                        })
                    );
                  }}
                  className="mt-6 rounded-full bg-primary px-6 py-3 font-semibold text-white"
                >
                  Browse the menu
                </button>
              </div>
            ) : (
              <>
                <ul className="space-y-4">
                  {cart.map((item) => (
                    <li
                      key={item.id}
                      className="flex gap-4 rounded-2xl border border-stone-200 p-4 dark:border-stone-800"
                    >
                      <img
                        src={item.img}
                        alt=""
                        className="h-20 w-20 rounded-xl bg-amber-50 object-contain p-1 dark:bg-stone-800"
                      />

                      <div className="min-w-0 flex-1">
                        <div className="flex justify-between gap-3">
                          <div>
                            <h3 className="font-bold">
                              {item.name}
                            </h3>

                            <p className="mt-1 text-sm text-stone-500">
                              ${item.price} each
                            </p>
                          </div>

                          <button
                            type="button"
                            onClick={() =>
                              onRemove(item.id)
                            }
                            aria-label={`Remove ${item.name}`}
                            className="self-start rounded-full p-2 text-stone-400 transition hover:bg-red-50 hover:text-red-600 dark:hover:bg-stone-800"
                          >
                            <FaTrash />
                          </button>
                        </div>

                        <div className="mt-3 flex items-center justify-between">
                          <div className="flex items-center rounded-full border border-stone-300 dark:border-stone-700">
                            <button
                              type="button"
                              onClick={() =>
                                onUpdateQuantity(
                                  item.id,
                                  -1
                                )
                              }
                              aria-label={`Decrease ${item.name} quantity`}
                              className="p-2"
                            >
                              <FaMinus />
                            </button>

                            <span
                              className="min-w-8 text-center font-semibold"
                              aria-live="polite"
                            >
                              {item.quantity}
                            </span>

                            <button
                              type="button"
                              onClick={() =>
                                onUpdateQuantity(
                                  item.id,
                                  1
                                )
                              }
                              aria-label={`Increase ${item.name} quantity`}
                              className="p-2"
                            >
                              <FaPlus />
                            </button>
                          </div>

                          <span className="font-bold">
                            $
                            {(
                              item.price *
                              item.quantity
                            ).toFixed(2)}
                          </span>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>

                <div className="mt-auto pt-8">
                  <div className="flex justify-between border-t border-stone-200 py-5 text-xl font-bold dark:border-stone-800">
                    <span>Subtotal</span>
                    <span>
                      ${subtotal.toFixed(2)}
                    </span>
                  </div>

                  <button
                    type="button"
                    onClick={() =>
                      setStep("checkout")
                    }
                    className="w-full rounded-full bg-gradient-to-r from-primary to-secondary px-6 py-3 font-semibold text-white shadow-md transition hover:-translate-y-0.5 hover:shadow-lg"
                  >
                    Continue to details
                  </button>

                  <button
                    type="button"
                    onClick={onClear}
                    className="mt-3 w-full py-2 text-sm font-semibold text-stone-500 hover:text-red-600"
                  >
                    Clear order
                  </button>
                </div>
              </>
            )}
          </div>
        )}
      </aside>
    </div>
  );
};

export default OrderDrawer;

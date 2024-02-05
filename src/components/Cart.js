import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Han from "../assets/img/han 2.png";

function Cart({ cartItems, removeFromCart, updateQuantity, setCartItems, onThanksPopup }) {
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [confirmationNumber, setConfirmationNumber] = useState(null);



  const navigate = useNavigate();

  const shippingCost = 10.0;
  const taxRate = 0.06;

  const calculateTax = (subtotal) => {
    return subtotal * taxRate;
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const getTotalAmount = () => {
    return cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  };

  const handleCheckout = () => {
    const randomConfirmationNumber = Math.floor(Math.random() * 90000) + 10000;

 
    setConfirmationNumber(randomConfirmationNumber);
    setShowConfirmation(true);
  };

  const handleYes = () => {
    

    clearCart();

    onThanksPopup(confirmationNumber);

    navigate("/");
  };



  const handleCloseConfirmation = () => {
    setShowConfirmation(false);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="container mx-auto my-8">
      <h1 className="text-3xl font-semibold mb-6">Your Shopping Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="flex flex-col md:flex-row">
          <div className="md:w-3/4 pr-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {cartItems.map((item) => (
                <div key={item.id} className="border p-4 rounded-md shadow-md ">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-40 object-cover mb-4 px-4"
                  />
                  <h3 className="text-lg font-semibold mb-2">{item.name}</h3>
                  <p className="text-gray-500 mb-2">Price: ${item.price}</p>
                  <div className="flex items-center mb-4">
                    <label htmlFor={`quantity-${item.id}`} className="mr-2">
                      Quantity:
                    </label>
                    <select
                      id={`quantity-${item.id}`}
                      value={item.quantity}
                      onChange={(e) =>
                        updateQuantity(item.id, parseInt(e.target.value, 10))
                      }
                      className="border p-2 rounded-md"
                    >
                      {[...Array(10).keys()].map((i) => (
                        <option key={i + 1} value={i + 1}>
                          {i + 1}
                        </option>
                      ))}
                    </select>
                  </div>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-800"
                  >
                    Remove
                  </button>
                </div>
              ))}

              {/* Confirmation popup   */}
              {showConfirmation && (
                <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
                  <div className="bg-white p-8 rounded-md">
                    <h2 className="text-2xl font-semibold mb-4">
                      Confirm Purchase
                    </h2>
                    <p className="mb-4">
                      To confirm this purchase of{" "}
                      {(
                        getTotalAmount() +
                        shippingCost +
                        calculateTax(getTotalAmount())
                      ).toLocaleString("en-US", {
                        style: "currency",
                        currency: "USD",
                      })}
                      , press Yes.
                    </p>
                    <div className="flex justify-end">
                      <button
                        className="mr-2 bg-green-500 py-2 px-4 text-white rounded-md hover:bg-green-800"
                        onClick={handleYes}
                      >
                        Yes
                      </button>
                      <button
                        onClick={handleCloseConfirmation}
                        className=" bg-red-500 py-2 px-4 text-white rounded-md hover:bg-red-800"
                      >
                        No
                      </button>
                    </div>
                  </div>
                </div>
              )}

           
             
            </div>
          </div>
          <div className="md:w-1/4 mt-8 md:mt-0">
            <h3 className="text-2xl font-semibold mb-4">Order Summary</h3>

            {/*Subtotal */}
            <div className="flex justify-between mb-2">
              <span>Subtotal:</span>
              <span>
                {getTotalAmount().toLocaleString("en-US", {
                  style: "currency",
                  currency: "USD",
                })}
              </span>
            </div>

            {/*Shipping Cost */}

            <div className="flex justify-between mb-2">
              <span>Shipping:</span>
              <span>${shippingCost.toFixed(2)}</span>
            </div>

            {/*Tax Cost */}
            <div className="flex justify-between mb-4">
              <span>Tax ({(taxRate * 100).toFixed(0)}%)</span>
              <span>${calculateTax(getTotalAmount()).toFixed(2)}</span>
            </div>

            {/*Total Amount */}
            <div className="flex justify-between mb-4 pt-4  border-t-2 border-black">
              <span className="text-lg font-semibold">Total:</span>
              <span>
                {(
                  getTotalAmount() +
                  shippingCost +
                  calculateTax(getTotalAmount())
                ).toLocaleString("en-US", {
                  style: "currency",
                  currency: "USD",
                })}
              </span>
            </div>

            {/* Checkout button   */}
            {cartItems.length > 0 && (
              <button
                onClick={handleCheckout}
                className="bg-green-500 text-white px-4 py-2 mt-4 rounded-md hover:bg-green-800 mb-5"
              >
                Checkout
              </button>
            )}

            <img src={Han} alt="character" />
          </div>
        </div>
      )}
      <div className="mt-5">
        <Link to="/" className="text-lg" onClick={scrollToTop}>
          Back Home
        </Link>
      </div>
    </div>
  );
}

export default Cart;

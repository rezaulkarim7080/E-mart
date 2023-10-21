import React from "react";
import CheckoutSteps from "../components/CheckoutSteps";
import { useSelector } from "react-redux";
import CartItems from "../components/CartItems";
import { useNavigate } from "react-router-dom";

const ConFirmOrder = () => {
  const { shippingInfo, cartItems } = useSelector((state) => state.cart);
  const { user } = useSelector((state) => state.user);

  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.quantity * item.price,
    0
  );
  const shippingCharges = subtotal > 1000 ? 0 : 200;
  const tax = subtotal * 0.18;
  const address = `${shippingInfo.address}, ${shippingInfo.city}, ${shippingInfo.state}, ${shippingInfo.pinCode}, ${shippingInfo.country}`;
  const navigate = useNavigate();

  const totalPrice = subtotal + tax + shippingCharges;

  const proceedToPayment = () => {
    const data = {
      subtotal,
      shippingCharges,
      tax,
      totalPrice,
    };

    sessionStorage.setItem("orderInfo", JSON.stringify(data));

    navigate("/payment/process");
    // navigate("/success");
  };
  return (
    <div className="px-10">
      <div>
        <CheckoutSteps activeStep={1} />
        <div className=" py-10 ">
          <h2 className="text-xl  text-center font-semibold py-2">
            Confirm Order
          </h2>
          <div className="grid grid-cols-6">
            <div className="col-span-4 ">
              <div className="py-5">
                <h1 className=" font-semibold text-xl">shipping info</h1>
                <h1>user : {user.name}</h1>
                <h1>Phone : {shippingInfo.phoneNo}</h1>
                <h1>Address : {address}</h1>
              </div>
              <div>
                <h1 className="font-semibold text-xl">Your cart items</h1>
                {cartItems &&
                  cartItems.map((item) => (
                    <div>
                      <div
                        key={item.product}
                        className="grid grid-cols-3 items-center  bg-slate-100 rounded-xl "
                      >
                        <div>
                          <img src={item.images} alt={item.name} width={50} />
                        </div>
                        <div>
                          <h1>{item.name}</h1>
                        </div>
                        <div className="flex gap-5">
                          <h1>
                            {item.quantity} X ${item.price}
                          </h1>
                          <h1 className="font-bold">
                            = $ {item.quantity * item.price}
                          </h1>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
            <div className="col-span-2 bg-amber-50 ">
              <h1 className="font-semibold text-center text-3xl py-5">
                order summary
              </h1>
              <div className="flex justify-between py-2 px-5  text-xl">
                <h1>Subtotal :</h1>
                <h1>${subtotal}</h1>
              </div>
              <div className="flex justify-between py-2 px-5  text-xl">
                <h1>Shipping Charges :</h1>
                <h1> ${shippingCharges}</h1>
              </div>
              <div className="flex justify-between py-2 px-5  text-xl">
                <h1>Tax</h1>
                <h1>${tax}</h1>
              </div>
              <div className="flex justify-between py-2 px-5  text-xl">
                <h1>Total Price</h1>
                <h1>${totalPrice}</h1>
              </div>
              <div className="text-center">
                <button
                  className="bg-amber-500 px-3 py-2"
                  onClick={proceedToPayment}
                >
                  Proceed To Payment
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConFirmOrder;

import React, { useEffect, useRef, useState } from "react";
import CheckoutSteps from "../components/CheckoutSteps";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { createOrder, clearErrors } from "../actions/orderAction";
import axios from "axios";
import * as api from "../api/index";

const Payment = () => {
  const orderInfo = JSON.parse(sessionStorage.getItem("orderInfo"));
  const dispatch = useDispatch();
  const payBtn = useRef(null);
  const { shippingInfo, cartItems } = useSelector((state) => state.cart);
  const { user } = useSelector((state) => state.user);
  const { error } = useSelector((state) => state.newOrder);
  const navigate = useNavigate();

  const [paymentMethod, setPaymentMethod] = useState("Credit Card");

  const order = {
    shippingInfo,
    orderItems: cartItems,
    itemsPrice: orderInfo.subtotal,
    taxPrice: orderInfo.tax,
    shippingPrice: orderInfo.shippingCharges,
    totalPrice: orderInfo.totalPrice,
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    // Disable the payment button during the request to prevent duplicate submissions
    payBtn.current.disabled = true;

    dispatch(createOrder(order));
    // navigate("/success");
  };

  useEffect(() => {
    if (error) {
      alert(error);
      dispatch(clearErrors());
    }
  }, [dispatch, error]);

  return (
    <>
      <CheckoutSteps activeStep={2} />
      <div className="text-center py-2">
        <form className="" onSubmit={submitHandler}>
          <h1>Payment Method</h1>
          <div>
            <label>
              <input
                type="radio"
                value="Credit Card"
                checked={paymentMethod === "Credit Card"}
                onChange={(e) => setPaymentMethod(e.target.value)}
              />
              Credit Card
            </label>
          </div>

          <button type="submit" className="bg-gray py-2 px-3" ref={payBtn}>
            Proceed to Payment
          </button>
        </form>
      </div>
    </>
  );
};

export default Payment;

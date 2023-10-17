import React from "react";
import CartItems from "../components/CartItems";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { removeItemsFromCart } from "../actions/cartAction";

const Cart = () => {
  const dispatch = useDispatch();
  const { cartItems } = useSelector((state) => state.cart);

  const navigate = useNavigate();
  const { isAuthenticated } = useSelector((state) => state.user);

  const checkOutHandler = () => {
    if (isAuthenticated) {
      navigate("/shipping");
    } else {
      navigate("/login?redirect=shipping");
    }
  };

  const deleteCartItems = (id) => {
    dispatch(removeItemsFromCart(id));
  };
  return (
    <>
      {cartItems.length === 0 ? (
        <div className="text-center">
          {" "}
          <h1 className="text-3xl  py-10 font-bold">No item in the cart</h1>
          <Link to={"/"} className=" bg-amber-400 py-2 px-3 text-lg font-bold ">
            Goto Shopping
          </Link>
        </div>
      ) : (
        <div className="py-5 px-10">
          <div className="grid grid-cols-8 bg-amber-400 py-2 text-lg font-bold">
            <div className="col-span-4">Product</div>
            <div className="col-span-2">Quentity</div>
            <div className="col-span-2">Subtotal</div>
          </div>

          {/* cart items */}

          <div>
            {cartItems &&
              cartItems.map((item) => (
                <CartItems
                  key={item.id}
                  item={item}
                  deleteCartItems={deleteCartItems}
                />
              ))}

            {/* check out  */}

            <div className="grid grid-cols-2 py-5">
              <div></div>
              <div className="text-lg bg-slate-100">
                <div>
                  <h1>Total Gross</h1>
                  <h1>{`₹${cartItems.reduce(
                    (acc, item) => acc + item.quantity * item.price,
                    0
                  )}`}</h1>
                </div>
                <div>
                  <button
                    onClick={checkOutHandler}
                    className="px-2 py-2 bg-[#ffb30d]"
                  >
                    CheckOut
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Cart;

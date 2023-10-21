import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom'
import { addItemsToCart, removeItemsFromCart } from "../actions/cartAction";

const CartItems = ({ item }) => {

  
 
    const dispatch = useDispatch();
    const { id } = useParams();
    const { cartItems } = useSelector((state) => state.cart);
    const { error, loading, isAuthenticated, user, } = useSelector(
        (state) => state.user
    );

    const increaseQuantity = (id, quantity, stock) => {
        const newQty = quantity + 1;
        if (stock <= quantity) {
            return;
        }
        dispatch(addItemsToCart(id, newQty));
    };
    const decreaseQuantity = (id, quantity) => {
        const newQty = quantity - 1;
        if (1 >= quantity) {
            return;
        }
        dispatch(addItemsToCart(id, newQty));
    };
    const deleteCartItems = (id) => {
        dispatch(removeItemsFromCart(id));
    };





    return (
        <div >
            <div className='py-2 rounded-lg'>
                <div className="grid grid-cols-8 bg-slate-50 py-2 text-lg" >

                    <div className="col-span-4">
                        <div className='flex gap-2'>
                            <div>
                                <img src={item.images} alt={item.name} width={50} />
                            </div>
                            <div>
                                <Link to={`/products/${item.product}`} >{item.name}</Link>
                                <h1>price {item.price}</h1>
                            </div>
                        </div>

                        <button onClick={() => deleteCartItems(item.product)}>remove</button>

                    </div>

                    {/* add to cart */}
                    <div className="col-span-2">
                        <div className="flex  gap-2">
                            <button
                                onClick={() => decreaseQuantity(item.product, item.quantity)}
                                className="bg-gray-100 px-5 py-2 text-2xl font-semibold"
                            >
                                -
                            </button>
                            <input
                                readOnly
                                type="number"
                                value={item.quantity}
                                className=" py-1 w-[50px] bg-gray-50 font-bold text-lg"
                            />
                            <button
                                onClick={() =>
                                    increaseQuantity(
                                        item.product,
                                        item.quantity,
                                        item.stock
                                    )
                                }
                                className="bg-gray-100 px-5 py-2 text-2xl font-semibold"
                            >
                                +
                            </button>
                        </div>
                        {/*End add to cart */}
                    </div>

                    <div className="col-span-2">
                        <h1>Total  :${item.price * item.quantity}</h1>

                    </div>
                </div>

            </div>
        </div>
    )
}

export default CartItems
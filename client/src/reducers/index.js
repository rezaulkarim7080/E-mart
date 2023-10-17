import { combineReducers } from "redux";
import { productDetailsReducer, productReducer, newProductReducer } from "./productReducer";
import { profileReducer, userReducer } from "./userReducer";
import { cartReducer } from "./cartReducer";
import {
    newOrderReducer,
    allOrdersReducer,
    myOrdersReducer,
    orderDetailsReducer,
    orderReducer
} from "./orderReducer";


export default combineReducers({
    products: productReducer, productDetails: productDetailsReducer, user: userReducer, newProduct: newProductReducer, profile: profileReducer, cart: cartReducer, newOrder: newOrderReducer,
    myOrders: myOrdersReducer,
    orderDetails: orderDetailsReducer, allOrders: allOrdersReducer, order: orderReducer,
});

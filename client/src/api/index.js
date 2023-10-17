import axios from 'axios';

const url = 'http://localhost:5000/api/products';
const url2 = 'http://localhost:5000/api';

// create post part

export const fetchProduct = (keyword, currentPage) => axios.get(`${url}?keyword=${keyword}&page=${currentPage}`);
export const getProductdetails = (id) => axios.get(`${url}/${id}`);

//////

export const UserLogin = ({ email, password }) => axios.post(`${url2}/login`, { email, password });
export const UserRegister = (userData) => axios.post(`${url2}/register`, userData);
export const UserUpdate = (userData) => axios.put(`${url2}/me/update`, userData);
export const UserLogOut = () => axios.get(`${url2}/logout`);
export const USERloader = () => axios.get(`${url2}/me`);

//////

export const createNewOrder = (order) => axios.post(`${url2}/order/new`, order);
export const SeeMyOrder = () => axios.get(`${url2}/order/new`);
//
export const SeeAllOrderAdmin = () => axios.get(`${url2}/admin/orders`);
export const UpdateOrderAdmin = (id, order) => axios.put(`${url2}/admin/order/${id}`, id, order);
export const DelteteOrderAdmin = (id) => axios.delete(`${url2}/admin/order/${id}`, id);
export const getOrderDetails = (id) => axios.get(`${url2}/order/${id}`, id);

///
export const PaymentKey = () => axios.get(`${url2}/stripeapikey`);
export const PaymentKeyData = (paymentData) => axios.post(`${url2}/payment/process`, paymentData);

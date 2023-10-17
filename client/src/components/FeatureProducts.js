
import React, { useEffect } from 'react'
import Product from './Product';
import { getProduct } from "../actions/productAction";
import { useDispatch, useSelector } from "react-redux";
import Loader from '../loader/Loader';



const FeatureProducts = ({ product }) => {

    const dispatch = useDispatch();

    const { loading, error, products, productsCount } = useSelector(
        (state) => state.products
    );

    useEffect(() => {
        if (error) {
            return alert.error(error)
        }
        dispatch(getProduct());
    }, [dispatch], error);


    // if (loading) {
    //     return <div><Loader /></div>;
    // }
    // if (error) {
    //     return <div>Error: {error.message}</div>;
    // }

    return (
        <div>
            {loading ? (<Loader />) : (<div>
                < div className='px-6' >
                    <h1 className="text-center font-bold text-3xl">Feature Products</h1>
                    <div className='grid md:grid-cols-4 gap-4 '>
                        {products &&
                            products.map((product) => (
                                <div >
                                    <Product key={product._id} product={product} />
                                </div>
                            ))}
                    </div>
                </div></div>)

            }
        </div>
    );
}

export default FeatureProducts;
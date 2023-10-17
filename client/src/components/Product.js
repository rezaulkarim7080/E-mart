import React from 'react'
import ReactStars from "react-rating-stars-component";
import { Link } from "react-router-dom";
import Rating from './Rating';



const Product = ({ product }) => {


    return (
        <div className=''>

            <Link to={`products/${product._id}`} className=''  >


                <img src={product.images} alt={product.name} className=' w-[70%]' />
                <h1 className='text-xl font-semibold hover:text-[#ffb30d]'>{product.name}</h1>
                <div className='flex gap-3 items-center'>
                    <Rating ratings={product.ratings} numReview={product.numOfReviews} />

                </div>
                <p className='font-medium text-cyan-800'>${product.price}</p>

            </Link>
        </div>
    )
}

export default Product
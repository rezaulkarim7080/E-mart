import React from 'react'
import Rating from './Rating'
import { FaUserCircle } from 'react-icons/fa';
import UserRating from './UserRating';


const ReviewCard = ({ review }) => {
    return (
        <div className="py-2">
            <div className="border-solid border-black border-[1px] rounded-lg p-5 py-5">
                {/* <img src={profilpng} alt="Usrr" /> */}
                <div className='flex gap-3'>
                    <FaUserCircle size={30} />
                    <h1>{review.name}</h1>
                </div>

                <UserRating review={review} />
                <h1>{review.comment}</h1>
            </div></div>
    )
}

export default ReviewCard
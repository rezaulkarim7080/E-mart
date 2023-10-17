import React from 'react';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';
import { BsStarHalf } from 'react-icons/bs';

const UserRating = ({ rating, numReview, review }) => {

    return (
        <div className='flex gap-2 text-amber-500 py-1'>
            {review.rating >= 1 ? <AiFillStar size={20} /> : review.rating >= 0.5 ? <BsStarHalf size={20} /> : <AiOutlineStar size={20} />}
            {review.rating >= 2 ? <AiFillStar size={20} /> : review.rating >= 1.5 ? <BsStarHalf size={20} /> : <AiOutlineStar size={20} />}
            <span>{review.rating >= 3 ? <AiFillStar size={20} /> : review.rating >= 2.5 ? <BsStarHalf size={20} /> : <AiOutlineStar size={20} />}</span>
            <span>{review.rating >= 4 ? <AiFillStar size={20} /> : review.rating >= 3.5 ? <BsStarHalf size={20} /> : <AiOutlineStar size={20} />}</span>
            <span>{review.rating >= 5 ? <AiFillStar size={20} /> : review.rating >= 4.5 ? <BsStarHalf size={20} /> : <AiOutlineStar size={20} />}</span>

            <div className='text-black'>
                {numReview + ' reviews'}
            </div>
        </div>
    );
};

export default UserRating;
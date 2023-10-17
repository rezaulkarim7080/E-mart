import React from 'react';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';
import { BsStarHalf } from 'react-icons/bs';

const Rating = ({ ratings, numReview }) => {

    return (
        <div className='flex gap-2 text-amber-500 py-1'>
            {ratings >= 1 ? <AiFillStar size={20} /> : ratings >= 0.5 ? <BsStarHalf size={20} /> : <AiOutlineStar size={20} />}
            {ratings >= 2 ? <AiFillStar size={20} /> : ratings >= 1.5 ? <BsStarHalf size={20} /> : <AiOutlineStar size={20} />}
            <span>{ratings >= 3 ? <AiFillStar size={20} /> : ratings >= 2.5 ? <BsStarHalf size={20} /> : <AiOutlineStar size={20} />}</span>
            <span>{ratings >= 4 ? <AiFillStar size={20} /> : ratings >= 3.5 ? <BsStarHalf size={20} /> : <AiOutlineStar size={20} />}</span>
            <span>{ratings >= 5 ? <AiFillStar size={20} /> : ratings >= 4.5 ? <BsStarHalf size={20} /> : <AiOutlineStar size={20} />}</span>

            <div className='text-black'>
                {numReview + ' reviews'}
            </div>
        </div>
    );
};

export default Rating;
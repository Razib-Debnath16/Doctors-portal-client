import React from 'react';

const Review = ({ review }) => {
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <div className="card-body">
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className='flex '>
                    <div className="card-actions  mr-4">
                        <img src={review.img} alt="" />
                    </div>
                    <div className='flex-col justify-center items-center'>
                        <h2 className="card-title">{review.name}</h2>
                        <h3>{review.location}</h3>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Review;
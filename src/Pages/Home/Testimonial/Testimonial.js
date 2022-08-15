import React from 'react';
import quote from '../../../assets/icons/quote.svg';
import people1 from '../../../assets/images/people1.png';
import people2 from '../../../assets/images/people2.png';
import people3 from '../../../assets/images/people3.png';
import Review from '../Review/Review';

const Testimonial = () => {
    const reviews = [
        {
            "id": 1,
            "name": "Winson Harry",
            "location": "california",
            "img": people1,
            "review": "lorem"
        },
        {
            "id": 2,
            "name": "Winson Harry",
            "location": "california",
            "img": people2,
            "review": "lorem"
        },
        {
            "id": 3,
            "name": "Winson Harry",
            "location": "california",
            "img": people3,
            "review": "lorem"
        }
    ]
    return (
        <section>
            <div className='flex  justify-between'>
                <div>
                    <h3 className='text-primary text-xl'>Testimonial</h3>
                    <h2 className='text-3xl'>What Ours Patients Says</h2>
                </div>
                <div>
                    <img className='w-24 lg:w-48' src={quote} alt="" />
                </div>
            </div>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    reviews.map(review => <Review
                        key={review.id}
                        review={review}
                    ></Review>)
                }
            </div>
        </section>
    );
};

export default Testimonial;
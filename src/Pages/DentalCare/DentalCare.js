import React from 'react';
import dental from '../../assets/images/treatment.png'
import PrimaryButton from '../Shared/PrimaryButton/PrimaryButton';

const DentalCare = () => {
    return (
        <div className="card lg:card-side bg-base-100 shadow-xl my-12 mx-24">
            <figure>
                <img style={{ width: "450px", height: "450px" }} src={dental} alt="Album" />
            </figure>
            <div className="card-body ">
                <h2 className="card-title">New album is released!</h2>
                <p>Click the button to listen on Spotiwhy app.</p>
                <div className="card-actions  ">
                    <PrimaryButton>Get Started</PrimaryButton>
                </div>
            </div>
        </div>
    );
};

export default DentalCare;
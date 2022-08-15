import React from 'react';

const Services = ({ service, setTreatment }) => {
    const { slots, name } = service;
    return (
        <div>

            <div>
                <div className="card bg-base-100 shadow-xl">
                    <div className="card-body flex-column justify-center items-center">
                        <h2 className="card-title text-secondary">{name}</h2>
                        <p>{slots.length > 0 ?
                            <span>{slots[0]}</span> :
                            <span className='text-red-500'>Try another day</span>
                        }</p>
                        <p> {slots.length} {slots.length > 1 ? "spaces" : "space"} available</p>
                        <div className="card-actions ">
                            <label onClick={() => setTreatment(service)} disabled={slots.length === 0} for="booking-modal" className="btn btn-secondary uppercase ">Book Appointment</label>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;
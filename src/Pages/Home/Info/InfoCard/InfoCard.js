import React from 'react';

const InfoCard = ({ icon, bgColor, cardTitle }) => {
    return (
        <div className={`card lg:card-side ${bgColor}  shadow-xl pl-12`}>
            <figure>
                <img src={icon} alt="Album" />
            </figure>
            <div className="card-body text-white ">
                <h2 className="card-title">{cardTitle}</h2>
                <p>Click the button to listen on Spotiwhy app.</p>
            </div>
        </div>
    );
};

export default InfoCard;
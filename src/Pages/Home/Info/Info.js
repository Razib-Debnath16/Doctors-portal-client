import React from 'react';
import InfoCard from './InfoCard/InfoCard';
import clock from '../../../assets/icons/clock.svg';
import marker from '../../../assets/icons/marker.svg';
import phone from '../../../assets/icons/phone.svg';

const Info = () => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-5'>
            <InfoCard cardTitle='Opening Hours' icon={clock} bgColor='bg-gradient-to-r from-primary to-secondary'></InfoCard>
            <InfoCard cardTitle='Visit our Locations' icon={marker} bgColor='bg-accent'></InfoCard>
            <InfoCard cardTitle='Contact us Now' icon={phone} bgColor='bg-gradient-to-r from-primary to-secondary'></InfoCard>
        </div>
    );
};

export default Info;
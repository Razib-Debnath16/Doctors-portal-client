import React from 'react';
import fluoride from '../../../assets/images/fluoride.png';
import cavity from '../../../assets/images/cavity.png';
import teeth from '../../../assets/images/whitening.png';
import Service from '../Service/Service';

const Services = () => {
    const services = [
        {
            "id": 1,
            "name": "Fluoride Treatment",
            "img": fluoride

        },
        {
            "id": 2,
            "name": "Cavity Filling",
            "img": cavity

        },
        {
            "id": 3,
            "name": "Teeth whitening",
            "img": teeth

        }
    ];
    return (
        <div>
            <div className='text-center my-12'>
                <h3 className='text-primary text-xl'>Our Services</h3>
                <h2 className='text-3xl'>Services We Provide</h2>
            </div>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12'>
                {
                    services.map(service => <Service
                        key={service.id}
                        service={service}
                    ></Service>)
                }
            </div>
        </div>
    );
};

export default Services;
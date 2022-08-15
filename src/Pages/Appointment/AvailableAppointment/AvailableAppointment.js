import React, { useEffect, useState } from 'react';
import { format } from 'date-fns';
import Services from '../Services/Services';
import BookingModal from '../BookingModal/BookingModal';
import { useQuery } from 'react-query';
import Loading from '../../Shared/Loading/Loading';
const AvailableAppointment = ({ date, setDate }) => {
    // const [services, setServices] = useState([]);
    const [treatment, setTreatment] = useState(null);
    const formattedDate = format(date, 'PP');

    const { data: services, isLoading, refetch } = useQuery(['available', formattedDate], () =>
        fetch(`http://localhost:5000/available?date=${formattedDate}`)
            .then(res => res.json())
    )
    if (isLoading) {
        return <Loading></Loading>
    }
    // useEffect(() => {
    //     fetch(`http://localhost:5000/available?date=${formattedDate}`)
    //         .then(res => res.json())
    //         .then(data => setServices(data))
    // }, [formattedDate])
    return (
        <div>
            <div className='text-center text-secondary text-xl'>
                <h2 className='text-secondary text-2xl'>Available appointments on : {format(date, 'PP')} </h2>
                <h2 className='text-center text-accent'>Please select a service</h2>
            </div>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                {
                    services?.map(service => <Services
                        key={service._id}
                        service={service}
                        setTreatment={setTreatment}
                    ></Services>)
                }
            </div>
            <div>
                {treatment && <BookingModal treatment={treatment} setTreatment={setTreatment}
                    date={date}
                    refetch={refetch}
                ></BookingModal>}
            </div>
        </div>
    );
};

export default AvailableAppointment;
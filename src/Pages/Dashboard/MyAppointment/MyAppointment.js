import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';

const MyAppointment = () => {
    const [appointment, setAppointment] = useState([])
    const [user, loading] = useAuthState(auth);
    if (loading) {
        <Loading></Loading>
    }
    useEffect(() => {
        if (user) {
            fetch(`http://localhost:5000/booking?email=${user.email}`)
                .then(res => res.json())
                .then(data => {
                    setAppointment(data);
                })
        }
    }, [user])
    return (
        <div>
            <h2>No of Appointment : {appointment.length} </h2>
        </div>
    );
};

export default MyAppointment;
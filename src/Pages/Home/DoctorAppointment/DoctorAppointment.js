import React from 'react';
import doctor from '../../../assets/images/doctor.png';
import appointment from '../../../assets/images/appointment.png';
import PrimaryButton from '../../Shared/PrimaryButton/PrimaryButton';

const DoctorAppointment = () => {
    return (
        <section className='flex justify-center items-center my-24'
            style={{ background: `url(${appointment})` }}>
            <div className='flex-1 hidden lg:block'>
                <img className='mt-[-100px]' src={doctor} alt="" />
            </div>
            <div className='flex-1'>
                <h3 className='text-primary text-xl'>Appointment</h3>
                <h2 className='text-white text-3xl'>Make an Appointment Today</h2>
                <p className='text-white'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut, quasi quia quidem veniam dicta eius explicabo eaque at harum inventore error quibusdam consequatur et, vel amet vero voluptatem natus cum.</p>
                <PrimaryButton>Get Started</PrimaryButton>
            </div>
        </section>
    );
};

export default DoctorAppointment;
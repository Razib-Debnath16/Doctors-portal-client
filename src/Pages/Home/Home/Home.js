import React from 'react';
import Banner from '../../Banner/Banner';
import DentalCare from '../../DentalCare/DentalCare';
import Services from '../../Services/Services/Services';
import Footer from '../../Shared/Footer/Footer';
import DoctorAppointment from '../DoctorAppointment/DoctorAppointment';
import Info from '../Info/Info';
import Testimonial from '../Testimonial/Testimonial';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Info></Info>
            <Services></Services>
            <DentalCare></DentalCare>
            <DoctorAppointment></DoctorAppointment>
            <Testimonial></Testimonial>
            <Footer></Footer>
        </div>
    );
};

export default Home;
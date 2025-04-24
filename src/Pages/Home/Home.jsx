import React, { useContext } from 'react';
import Hero from '../../Components/Hero/Hero';
import { DoctorContext } from '../../Contaxt/CreatedContaxt/CreatedContaxt';
import Doctors from '../../Components/Dcotors/Doctors';
import Success from '../../Components/Sucsess/Sucsess';

const Home = () => {
    const {doctors} = useContext(DoctorContext);

    return (
        <>
            <Hero></Hero>
            <Doctors doctors= {doctors}></Doctors>
            <Success></Success>
        </>
    );
};

export default Home;
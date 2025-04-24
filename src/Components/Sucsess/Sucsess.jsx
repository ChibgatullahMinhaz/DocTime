import React from 'react';
import docImg from '../../assets/success-doctor.png'
import Review from '../../assets/success-review.png'
import Patients from '../../assets/success-patients.png'
import Stuff from '../../assets/success-staffs.png'
import CountUp from 'react-countup';
const Success = () => {
    return (
        <>
            <h1 className='text-center font-bold text-2xl md:text-3xl mt-8'>We Provide Best Medical Services</h1>
            <p className='font-normal text-center text-gray-500'>Our platform connects you with verified, experienced doctors across various specialties — all at your convenience. </p>
            <div className='grid grid-cols-1 md:grid-cols-4 items-center justify-center gap-5 mt-6 max-w-10/12 mx-auto '>
                <div className='bg-white shadow-lg rounded-2xl p-3'>
                    <img src={docImg} className='w-[50px]' alt="total doctors" />
                    <h1 className='font-bold text-2xl'>
                    <CountUp start={0} end={199} duration={15}></CountUp>+
                    </h1>
                    <h1 className='text-gray-600 font-semibold'>Total Doctors</h1>
                </div>
                <div className='bg-white shadow-lg rounded-2xl p-3'>
                    <img src={Review} className='w-[50px]' alt="Total Reviews" />
                    <h1 className='font-bold text-2xl'>
                    <CountUp start={0} end={479} duration={30}></CountUp>+
                    </h1>
                    <h1 className='text-gray-600 font-semibold'>Total Reviews</h1>
                </div>
                <div className='bg-white shadow-lg rounded-2xl p-3'>
                    <img src={Patients} className='w-[50px]' alt="Patients" />
                    <h1 className='font-bold text-2xl'>
                    <CountUp start={0} end={1900} duration={25}></CountUp>+
                    </h1>
                    <h1 className='text-gray-600 font-semibold'>Patients</h1>
                </div>
                <div className='bg-white shadow-lg rounded-2xl p-3'>
                    <img src={Stuff} className='w-[50px]' alt="Stuffs" />
                    <h1 className='font-bold text-2xl'>
                    <CountUp start={0} end={300} duration={20}></CountUp>+
                    </h1>
                    <h1 className='text-gray-600 font-semibold'>Total Stuffs</h1>
                </div>
            </div>
        </>
    );
};

export default Success;
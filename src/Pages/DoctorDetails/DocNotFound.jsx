import React from 'react';
import { CiCirclePlus } from "react-icons/ci";
import { NavLink, useParams } from 'react-router';

const DocNotFound = () => {
    const {docRegId} = useParams();
    return (
        <div className='bg-white rounded-2xl shadow-lg py-7'>
            <h1 className='text-center font-bold  text-2xl lg:text-3xl '>Not Doctor Found!</h1>
            <div className='text-center '>
            <small className='text-gray-500 text-lg'>No Doctor Found with this Registration No:-</small>
            <p className='text-gray-950 flex justify-center items-center'><CiCirclePlus></CiCirclePlus>{docRegId} </p>
            </div>
            <div className='flex justify-center items-center mt-3 lg:m-8'>
                <NavLink to='/'>
                <button className="btn btn-primary ">View All Doctor</button>

                </NavLink>
            </div>
        </div>
    );
};

export default DocNotFound;
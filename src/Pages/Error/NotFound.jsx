import React from 'react';
import { NavLink } from 'react-router';
import notfondImg  from '../../assets/Group.png'

const NotFound = () => {
    return (
        <div  className='flex justify-center items-center flex-col py-6 '>
                    <img src={notfondImg} alt="page not found" />

          <h1 className='text-3xl font-bold'>404- Page Not Found!</h1>
          <p className='font-semibold text-xl text-center'>Oops! The page Your are Looking For Doesn't exist</p>
          <div className=' mt-5 lg:mt-10'>
            <NavLink to='/'>
                <button className='btn btn-primary'>Go Back Home</button>
            </NavLink>
          </div>
        </div>
    );
};

export default NotFound;
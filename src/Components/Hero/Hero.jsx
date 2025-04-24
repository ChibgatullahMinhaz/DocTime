import React, { useState } from 'react';
import image1 from '../../assets/banner-img-1.png'


const Hero = () => {
    const [query,setQuery] = useState('');
    const handleSubmit = (e)=>{
        e.preventDefault();
    }
    return (
        <div className='max-w-11/12 mx-auto border-t-4 border-l-4 border-r-4 border-white shadow-xl cursor-pointer rounded-2xl lg:p-14 xl:p-20 p-3'>
            <div className='w-4/5 text-center space-y-4 mb-4 mx-auto'>
                <h1 className='text-center md:text-3xl xl:text-6xl font-bold'>
                Dependable Care, Backed by Trusted Professionals.
                </h1>
                <p>Our platform connects you with verified, experienced doctors across various specialties — all at your convenience. Whether it's a routine checkup or urgent consultation, book appointments in minutes and receive quality care you can trust.</p>
            </div>
            {/* search */}
            <form onSubmit={handleSubmit} className='flex w-2/3 mx-auto my-3'>
                <input type="search" defaultValue={query} name="search" className='input focus:outline-none border-none rounded-l-2xl w-full'/>
                <input type="submit" value="Search" className='btn btn-primary rounded-r-2xl' />
            </form>
           <div className='grid grid-cols-1 gap-3 md:grid-cols-2'>
            <img className='h-full' src={image1} alt="banner image" />
            <img 
            className='h-full rounded-2xl'
            src='https://png.pngtree.com/thumb_back/fh260/background/20220604/pngtree-doctor-working-in-hospital-with-other-doctors-banner-mature-group-photo-image_46699652.jpg' alt="banner image" />
           </div>

        </div>
    );
};

export default Hero;
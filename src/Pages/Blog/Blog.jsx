import React from 'react';
import { CiCalendarDate } from "react-icons/ci";

const Blog = ({blog}) => {
    const {question,answer} = blog
    return (
        <div className='bg-white p-4 my-5 '> 
            <h1 className='text-xl font-bold'>{question}</h1>
            <div className='border-b-2  my-2 border-dashed border-gray-400'></div>
            <h1>{answer}</h1>
            <div className='border-b-2 border-dashed my-2  border-gray-400'></div>
            <p className='flex gap-x-1 items-center text-gray-500'> <CiCalendarDate>
                </CiCalendarDate> Added at 2023-11-12 </p>
        </div>
    );
};

export default Blog;
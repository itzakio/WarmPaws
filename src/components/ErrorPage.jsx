import React from 'react';
import errorCat from "../assets/error-cat.png"
import { Link } from 'react-router';

const ErrorPage = () => {
    return (
        <div className='min-h-screen bg-background flex flex-col justify-center items-center'>
            <img className='w-48' src={errorCat} alt="Error Cat" />
            <h1 className='text-3xl md:text-5xl lg:text-7xl font-bold signika-font'>Error <span className='text-primary'>404</span> Page not found</h1>
            <Link to="/" className='mybtn mt-4'>Back to Home</Link>
        </div>
    );
};

export default ErrorPage;
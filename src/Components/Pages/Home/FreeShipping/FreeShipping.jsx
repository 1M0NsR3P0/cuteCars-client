import React, { useEffect, useState } from 'react';
import './freeshipping.css';
import 'aos/dist/aos.css';
import Aos from 'aos';

const FreeShipping = () => {
    useEffect(() => {
        Aos.init({duration:2000});
    }, []);
    return (
        <div className='bg-blue-300 mx-[150px] h-[500px]'>
            <div className='flex justify-center'>
                <img data-aos="zoom-in-up" data-aos-delay="300" className='' src="https://i.ibb.co/kGTt6n8/shipping-icon.png" alt="freeshipping image" />
            </div>
            <div className='text-center'>
                <div data-aos="fade-right" data-aos-delay="200">
                    <h1 className='fontStyle text-[55px]'>Free Shipping</h1>
                </div>
                <div data-aos="fade-left" data-aos-delay="200" className='py-5'>
                    <p className='px-[150px]'>We celebrate childhood by supporting babies, children, and families with <br></br> thoughtful designs, quality materials and construction, and convenient shopping options.</p>
                </div>
            </div>
            <div className='flex justify-center items-center my-10 className="font-semibold text-lg" gap-24'>
                <div data-aos="flip-up" ><h1 className="font-semibold text-lg">Free shipping worldwide</h1>
                    <small>on all order $99+</small>
                </div>
                <div data-aos="fade-left" data-aos-delay="200"><h1 className="font-semibold text-lg">Money back guarranty</h1>
                    <small>in 30 days, no question asked</small>
                </div>
                <div data-aos="fade-up" ><h1 className="font-semibold text-lg">24/7 customer care</h1>
                    <small>Phone and chat assist</small>
                </div>
                <div data-aos="fade-down" ><h1 className="font-semibold text-lg">Easy and Secure Payment</h1>
                    <small>Paypal/Stripe/COD/Cards</small>
                </div>
                <div data-aos="flip-down" >
                    <h1 className="font-semibold text-lg">Fast and Reliable Delivery</h1>
                    <small>Trackable shipping with timely delivery</small>
                </div>
            </div>
        </div>
    );
};

export default FreeShipping;

import React from 'react';
import { Link, Navigate } from 'react-router-dom';

const Footer = () => {
  return (
    <div className='text-center bg-[#f4f1f1] text-[20px] h-[0px]'>
              <div className=" my-10 py-8 mx-[150px]">
        <div className="container mx-auto py-5 px-4 border border-gray-500">
          <h2 className="text-center text-2xl font-semibold mb-4">
            Stay Connected to us, Subscribe!
          </h2>
          <form className="max-w-md mx-auto">
            <div className="flex items-center border-gray-500 py-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
              />
              {/* i will try to pass the email data to the log in page as a default email on click here */}
              <button
              onClick={Navigate('/login')}
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded focus:outline-none"
              >
                Subscribe
              </button>
            </div>
          </form>
        </div>
        </div>
      <div className='md:flex justify-center items-top h-[200px] px-[100px]'>
        <div className='w-[50%] px-[80px] text-center'>
          <h1 className='text-[27px] mb-4 font-semibold'>CuteCars.com</h1>
          <p className='px-[10%] text-[12px] text-gray-500'>
          Discover joy and imagination at our toy shop. We offer a handpicked selection of high-quality toys, sparking creativity and endless fun for children. With personalized service and a warm atmosphere, we're dedicated to creating memorable playtime experiences. Explore our collection and let the magic unfold!
          </p>
        </div>
        <div className='grid grid-cols-3 w-[100%]'>
          <div>
            <h1 className='text-[27px] text-left font-semibold'>Categories</h1>
            <ul className='text-left text-sm font-semibold my-2'>
              <li className='my-1'>Toys by Age</li>
              <li className='my-1'>Educational Toys</li>
              <li className='my-1'>Pretend Play</li>
              <li className='my-1'>Outdoor Play</li>
              <li className='my-1'>Games and Puzzles</li>
            </ul>
          </div>
          <div>
            <h1 className='text-[27px] text-left font-semibold'>Learn More</h1>
            <p className='text-left text-base pr-5'>96-15 Metropolitan Ave, Forest Hill, North Dakota, United States</p>
             <p className='text-sm text-left'>or</p>
            <p className='text-left text-base pr-5'>1015 S Greensboro Pike, New Castle, Iowa, United States</p>
          </div>
          <div>
            <div className='text-left'>
              <div><img src="https://i.ibb.co/mN3xqvJ/cute-car-logo-2.png" alt="logo" /></div>
              <h1 className='text-[22px] text-left font-semibold'>
                <a href="/">Get Connected</a>
              </h1>
              <p className='text-base'>Follow Us</p>
              <div className='md:flex gap-2 justify-start items-center my-3'>
                <a href="https://www.facebook.com/naimon.chy" target="_blank"><img
                  className='w-[25px]'
                  src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQn95Mb5k_ValMR-ACT3RcQGJhpCPZoWXl8YDbm_13vA&s'
                  alt='not found'
                /></a>
                <a href="https://www.twitter.com/naimonchy" target="_blank">
                <img
                  className='w-[25px]'
                  src='https://png.pngtree.com/png-vector/20221018/ourmid/pngtree-twitter-social-media-round-icon-png-image_6315985.png'
                  alt='not found'
                />
                </a>
                <a href="https://www.instagram.com/naimonchy" target="_blank">
                <img
                  className='w-[25px]'
                  src='https://cdn.pixabay.com/photo/2016/08/09/17/52/instagram-1581266__340.jpg'
                  alt='not found'
                />
                </a>
                <a href="https://www.youtube.com/channel/UCStj-ORBZ7TGK1FwtGAUgbQ" target="_blank">
                  {/* i don't have a channel here! so.. */}
                <img
                  className='w-[25px]'
                  src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTzkbjGCYKY2UQeILfWe0bLFz51T1KstkqrjKribk&s'
                  alt='not found'
                />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='h-[200px] bg-info pt-10 text-gray-600'>
        <div className=''>
          <small>
            &copy; 2022 Yummy, All rights reserved. Powered by MoxCreative.
          </small>
        </div>
        <small className='md:flex justify-center mt-5'>
          <ul className='md:flex justify-center items-center'>
            <li>Terms of Use</li>
            <li>Privacy Policy</li>
            <li>Cookies Policy</li>
            <li>Sitemap</li>
          </ul>
        </small>
      </div>
    </div>
  );
};

export default Footer;

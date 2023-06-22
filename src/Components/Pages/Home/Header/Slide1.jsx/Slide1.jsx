import React, { useState } from 'react';
import Typewriter from 'typewriter-effect';
import TypeWriter from './TypeWriter';


const Slide1 = () => {
    return (
        <div className='md:h-[100vh]'>
            <div className='relative'>
            <img src="https://i.ibb.co/X5rDz2y/cartoon-doodle.png" alt="slide img not found" />
            
            <div className='absolute top-80 left-[26rem] hidden md:block text-left px-24'>
            <TypeWriter></TypeWriter>
            </div>
            </div>

        </div>
    );
};

export default Slide1;
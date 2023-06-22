import React, { useEffect } from 'react';
import TypeWriter from './Slide1.jsx/TypeWriter';
import 'aos/dist/aos.css';
import Aos from 'aos';

const Banner = () => {
    useEffect(() => {
        Aos.init();
      }, []);
    return (
        <div className='md:h-[100vh] bg-blue-50 '>
            <div className='relative'>
            <img className='' src="https://i.ibb.co/X5rDz2y/cartoon-doodle.png" alt="slide img not found"  />
            <img className='animateBallon absolute top-[750px] right-96 w-[120px] h-[120px]' src="https://i.ibb.co/B4LG79s/pngwing-com.png" alt="" />
            <img className='animateBallon1 absolute top-[450px] right-[1384px] w-[120px] h-[120px]' src="https://i.ibb.co/B4LG79s/pngwing-com.png" alt="" />
            <img className='animateBallon2 absolute top-[-250px] right-[1384px] w-[120px] h-[120px]' src="https://i.ibb.co/B4LG79s/pngwing-com.png" alt="" />
            <img className='animateBallon3 absolute top-[-10px] right-[384px] w-[120px] h-[120px]' src="https://i.ibb.co/B4LG79s/pngwing-com.png" alt="" />
            <div className='absolute top-72 left-[26rem] hidden md:block text-left px-24'>
            <TypeWriter></TypeWriter>
            </div>
            </div>

        </div>
    );
};

export default Banner;
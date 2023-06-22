import Banner from '../Header/Banner';
import ToyGallery from '../Header/ToyGallery';
import PopularYoysTab from '../Header/PopularYoysTab';
import React, { useEffect } from 'react';
import 'aos/dist/aos.css';
import Aos from 'aos';
import FreeShipping from '../FreeShipping/FreeShipping';
import NewArrivalsSection from './NewArrivalSection';



const Home = () => {
    useEffect(() => {
        Aos.init({
            duration: 1000,

        });

    }, []);
    return (
        <div className='galleryBg'>
            <div data-aos="fade-down"
                data-aos-offset="300"
                data-aos-mirror="false"
                data-aos-easing="ease-in-sine">
                <Banner></Banner>
            </div>
            <div >
            <div data-aos="flip-left" data-aos-mirror="false" className='  w-full flex justify-center py-[150px]' ><ToyGallery></ToyGallery></div>
            </div>
            <div data-aos="fade-right"
            ><PopularYoysTab></PopularYoysTab></div>
            <div>
                <NewArrivalsSection></NewArrivalsSection>
            </div>
            <div data-aos="fade-left" className='h-[500px] w-full mt-[150px]'>
                <FreeShipping></FreeShipping>
            </div>
        </div>
    );
};

export default Home;
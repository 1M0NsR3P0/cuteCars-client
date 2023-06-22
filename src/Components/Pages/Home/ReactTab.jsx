import React, { useContext, useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import './reactTab.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation, EffectFade, FreeMode, } from "swiper";
import "swiper/css/effect-fade";
import 'swiper/css';
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import { FaRegBookmark, FaShoppingCart } from 'react-icons/fa';
import 'aos/dist/aos.css';
import Aos from 'aos';
import Loading from '../../Shared/Loading';
import ScrollAnimation from 'react-animate-on-scroll';
import 'animate.css/animate.min.css';
import { Link } from 'react-router-dom';
import { AuthContxt } from '../../Layouts/AuthProviders/AuthContext';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const ReactTab = () => {
  
  const toaster = ()=>{
    // return toast.info('You Must Login First!')
    return <ToastContainer/>
  };
  const {user,loading} = useContext(AuthContxt)
  const [isLoading, setLoading] = useState(false)
  
  const privateNavigation = (id)=>{
    if(loading){
      <Loading></Loading>
    }
    if(!user)
    {
      toaster()
      // console.log('i was heere')
    }
  }
  useEffect(() => {
    Aos.init();
  }, []);
  const [sportsCars, setSportsCars] = useState([])
  const [toyTruck, setToyTrucks] = useState([])
  const [miniCopter, setMiniCopters] = useState([])
  const [rollerScater, setRollerScater] = useState([])
  useEffect(() => {
    setLoading(true)
    toaster()
    fetch('https://cute-cars-server-1m0nsr3p0.vercel.app/alltoys/toytruck')
    .then(data => data.json())
    .then(data => {
      setToyTrucks(data)
      // console.log(data)
      setLoading(false)
    })
  }, [])

  useEffect(() => {
    setLoading(true)
    fetch('https://cute-cars-server-1m0nsr3p0.vercel.app/alltoys/rollerscater')
    .then(data => data.json())
    .then(data => setRollerScater(data))
    setLoading(false)
  }, [])
  useEffect(() => {
    setLoading(true)
    fetch('https://cute-cars-server-1m0nsr3p0.vercel.app/alltoys/sportscar')
    .then(data => data.json())
    .then(data => setSportsCars(data))
    setLoading(false)
  }, [])
  return (
    <div className='w-full flex justify-center h-[350px]'>
      
      <div>
        <div className='font-bold text-[26px] text-center pb-5'>
          <span>Top Categories</span>
          <p className='text-base text-gray-700 font-normal'>Choose Top Products choosen by our customers. Choose yours now</p>
        </div>
        <Tabs>
          <TabList>
            <Tab>Toy Trucks</Tab>
            <Tab>Sport Car</Tab>
            <Tab>Roller Scater</Tab>
          </TabList>


          <TabPanel >
            <Swiper
              data-aos="slide-left"
              spaceBetween={5}
              slidesPerView={5}
              loop={true}
              autoplay={false}
              navigation={false}
              modules={[Autoplay, Pagination, Navigation, EffectFade, FreeMode]}
              className="mySwiper"
            >
              {
                isLoading ? <Loading></Loading> : sportsCars.map((sportcar, id) =>
                  <SwiperSlide key={id} >
                    <div>
                      <div className='relative'>
                        <img src={sportcar.picture} alt="slide picture not found" className='hover:blur-sm ' />

                        <div data-aos="fade-up" className='absolute top-16 left-12 p-0 m-0 flex gap-3 items-center justify-center'>
                          <FaShoppingCart className='w-[24px] h-[24px]  p-0 m-0'></FaShoppingCart>
                          <button className='btn btn-outline btn-sm p-0 m-0'>Cart</button>
                          <FaRegBookmark className='w-[24px] h-[24px] p-0 m-0 '></FaRegBookmark>
                        </div>


                      </div>
                      <p className='font-semibold text-xl text-left'>{sportcar.name}</p>
                      <div className='flex gap-6'><p className='font-semibold text-xl text-left'>Price: {sportcar.price}</p><span>Ratings: {sportcar.rating}</span></div>
                      <div className='flex justify-start py-3'>
                        
                        <button className='btn btn-primary btn-xs' onClick={toaster}>
                          {/* <Link to={`/details` }>Details</Link> */}
                          </button>
                      </div>
                    </div>
                  </SwiperSlide>
                )
              }


            </Swiper>
          </TabPanel>
          <TabPanel >
            <Swiper
              // data-aos="slide-left"
              spaceBetween={5}
              slidesPerView={5}
              loop={true}
              autoplay={false}
              navigation={false}
              modules={[Autoplay, Pagination, Navigation, EffectFade, FreeMode]}
              className="mySwiper"
            >
              {
                isLoading ? <Loading></Loading> : sportsCars.map((rollerScate, id) =>
                  <SwiperSlide key={id} >
                    <div>
                      <div className='relative'>
                        <img src={rollerScate.picture} alt="slide picture not found" className='hover:blur-sm ' />

                        <div data-aos="fade-up" className='absolute top-16 left-12 p-0 m-0 flex gap-3 items-center justify-center'>
                          <FaShoppingCart className='w-[24px] h-[24px]  p-0 m-0'></FaShoppingCart>
                          <button className='btn btn-outline btn-sm p-0 m-0'>Cart</button>
                          <FaRegBookmark className='w-[24px] h-[24px] p-0 m-0 '></FaRegBookmark>
                        </div>
                      </div>
                      <p className='font-semibold text-xl text-left'>{rollerScate.name}</p>
                      <div className='flex gap-6'><p className='font-semibold text-xl text-left'>Price: {rollerScate.price}</p><span>Ratings: {rollerScate.rating}</span></div>
                      <div className='flex justify-start py-3'>
                        <button className='btn btn-primary btn-xs'><Link to={`/details/:${rollerScate._id}`}>Details</Link></button>
                      </div>
                    </div>
                  </SwiperSlide>
                )
              }


            </Swiper>
          </TabPanel>
          <TabPanel >
            <Swiper
              // data-aos="slide-left"
              spaceBetween={5}
              slidesPerView={5}
              loop={true}
              autoplay={false}
              navigation={false}
              modules={[Autoplay, Pagination, Navigation, EffectFade, FreeMode]}
              className="mySwiper"
            >
              {
                isLoading ? <Loading></Loading> : sportsCars.map((toytrck, id) =>
                  <SwiperSlide key={id} >
                    <div>
                      <div className='relative'>
                        <img src={toytrck.picture} alt="slide picture not found" className='hover:blur-sm ' />

                        <div data-aos="fade-up" className='absolute top-16 left-12 p-0 m-0 flex gap-3 items-center justify-center'>
                          <FaShoppingCart className='w-[24px] h-[24px]  p-0 m-0'></FaShoppingCart>
                          <button className='btn btn-outline btn-sm p-0 m-0'>Cart</button>
                          <FaRegBookmark className='w-[24px] h-[24px] p-0 m-0 '></FaRegBookmark>
                        </div>
                      </div>
                      <div className='flex gap-6'><p className='font-semibold text-xl text-left'>{toytrck.name}</p><span>Ratings: {toytrck.rating}</span></div>
                      <p className='text-start font-semibold text-blue-700'>price: {toytrck.price}</p>
                      <div className='flex justify-start py-3'>
                        <button className='btn btn-primary btn-xs' ><Link to={`/details/:${toytrck._id}`}>Details</Link></button>
                      </div>
                    </div>
                  </SwiperSlide>
                )
              }


            </Swiper>
          </TabPanel>

        </Tabs>

      </div>
    </div>
  );
};

export default ReactTab;
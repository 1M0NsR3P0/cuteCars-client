import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import TheNewArrivalProducts from './TheNewArrivalProducts';

const NewArrivalsSection = () => {
  const [showMore,setShowmore] = useState(true) 
  const [isLoading,setisLoading] = useState(false) 
  useEffect(() => {
    AOS.init();
  }, []);

  const [newArrivals, setNewArrivals] = useState([]);

  useEffect(() => {
    setisLoading(true)
    fetch('https://cute-cars-server-1m0nsr3p0.vercel.app/newarrival')
    .then(data=>data.json())
    .then(data => showMore ? setNewArrivals(data.slice(0, 4)) : setNewArrivals(data))
    setisLoading
  }, [showMore]);

  return (
    <div className='text-center my-[50px] py-[100px]'>
      <h2 className="text-3xl text-center font-bold mb-6">New Arrivals</h2>
      <div className='grid grid-cols-2  md:grid-cols-4 gap-6 mx-[150px] justify-center items-center'>
      {
        newArrivals.map(newProducts=><TheNewArrivalProducts
        key={newProducts._id}
        newArrivals={newProducts}
        ></TheNewArrivalProducts>)
      }
      </div>
        <button className='btn btn-primary mt-6'onClick={()=>setShowmore(!showMore)} >show more</button>
    </div>
  );
};

export default NewArrivalsSection;

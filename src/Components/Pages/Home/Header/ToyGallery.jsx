import React, { useEffect, useState } from 'react';
import AllToys from './AllToys';
import { Link } from 'react-router-dom';

const ToyGallery = () => {
    const [allToys,setAllToys] = useState([])

    useEffect(()=>{
        fetch('https://cute-cars-server-1m0nsr3p0.vercel.app/alltoys')
        .then(data=>data.json())
        .then(alltoys=>{
            // console.log(alltoys)
            setAllToys(alltoys)})
    },[])
    if(allToys.length>20){
        setAllToys(allToys.slice(0,12))
        // console.log(allToys)
    }
    return (
        <div className='mt-[100px]'>
            <h1 className='text-[44px] font-bold text-center py-9'>Toy Gallery</h1>
            <div className='grid grid-cols-2 md:grid-cols-4 gap-10'>
            {
                allToys.map(toy=><AllToys
                key={toy._id}
                toy={toy}
                ></AllToys>)
            }
        </div>
            <div className='flex justify-center'>
                <Link to="/alltoys" className=' btn btn-secondary mt-10'>Show All</Link>
            </div>
        </div>
    );
};

export default ToyGallery;
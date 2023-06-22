import React, { useEffect, useState } from 'react';
import AllToys from './Header/AllToys';

const ShowAllPage = () => {
    const [allToys,setAllToys] = useState([])
    useEffect(()=>{
        fetch('https://cute-cars-server-1m0nsr3p0.vercel.app/alltoys')
        .then(data=>data.json())
        .then(alltoys=>{
            // console.log(alltoys)
            setAllToys(alltoys)})
        },[])

    return (

            <div className='grid grid-cols-2 md:grid-cols-4'>
                {
                allToys.map(toy=><AllToys
                key={toy._id}
                toy={toy}
                ></AllToys>)
            }
            </div>

    );
};

export default ShowAllPage;
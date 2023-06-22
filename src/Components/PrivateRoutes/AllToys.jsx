import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Toys from './Toys';

const AllToys = () => {
  const [alltoys,setAlltoys] = useState([])
  const [willitLimited,setWillLimited] = useState(true)
  const notLimited = ()=>{
    fetch('https://cute-cars-server-1m0nsr3p0.vercel.app/usertoys')
      .then(data=>data.json())
      .then(data=>setAlltoys(data))
  }
  const willLimited = ()=>{
    fetch('https://cute-cars-server-1m0nsr3p0.vercel.app/usertoys/limit20')
  .then(data=>data.json())
  .then(data=>setAlltoys(data))
  }
  useEffect(()=>{
    willitLimited?willLimited():notLimited()
      // .then(data=>console.log(data))
  },[willitLimited])
    return (
        <div>
          <div className='w-full text-center text-xl font-semibold p-5'><h1>All the toys added by All our users</h1>
          <div>
          <input className='border' type="text" name="text" id="search" value={'search'} />
          <button>Search</button>
          </div>
          <div><h1>filter</h1><button>high to low</button><button>low to high</button></div>
          </div>

            <div className="overflow-x-auto">
  <table className="table w-full">
    {/* head */}
    <thead>
      <tr>
        <th>seller/Brand</th>
        <th>Toy Name</th>
        <th>Price</th>
        <th>Subcategory</th>
        <th>AvaileABle Quantity</th>
        <th>link to details</th>
      </tr>
    </thead>
    <tbody>
      {
        alltoys.map(everyTOy=><Toys key={everyTOy._id} everyToy={everyTOy}></Toys>)
      }
    </tbody>
  </table>
  <button onClick={()=>setWillLimited(!willitLimited)}>show all</button>
</div>
        </div>
    );
};

export default AllToys;
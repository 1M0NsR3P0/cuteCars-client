import React, { useContext, useEffect, useState } from 'react';
import Toys from './Toys';
import { AuthContxt } from '../Layouts/AuthProviders/AuthContext';

const MyToys = () => {
    const {user} = useContext(AuthContxt)
    // console.log(user.email)
    const [alltoys,setAlltoys] = useState([])
    useEffect(()=>{
        fetch(`https://cute-cars-server-1m0nsr3p0.vercel.app/mytoys/${user.email}`)
        .then(data=>data.json())
        .then(data=>data.length>20?setAlltoys(data.slice(0,20)):setAlltoys(data))
        // .then(data=>console.log(data))
    },[])
    return (
        <div>
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
        alltoys.map(everyToy=><Toys key={everyToy._id} everyToy={everyToy}></Toys>)
      }
    </tbody>
  </table>
</div>
        </div>
    );
};

export default MyToys;
import React from 'react';
import { Link } from 'react-router-dom';

const TheNewArrivalProducts = ({newArrivals}) => {
    const {_id,name,picture,description} = newArrivals
    let SlicedDes = ''
    if(description.length>100){
        SlicedDes = description.slice(0,100)+' ...'
    }
    return (
          
            <div
              className=" shadow-lg rounded-md p-4 flex flex-col justify-between"
              data-aos="fade-up-right"
              data-aos-duration="1000"
            >
              
              <img
                src='https://i.ibb.co/KWDVp0N/white-car-isolated-176382-1600.png'
                alt={name}
                className="w-full h-40 object-cover mb-4 rounded-md"
              />
              <div>
                <h3 className="text-lg font-bold mb-2">{name}</h3>
                <p className="text-gray-600 mb-4">{SlicedDes}</p>
              </div>
              <Link
                to='/singledetails'
                className="btn btn-primary"
              >
                View Details
              </Link>
            </div>
    );
};

export default TheNewArrivalProducts;
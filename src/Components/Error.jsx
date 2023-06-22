import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <div className='bg-white flex justify-center items-center w-full md:h-[800px] h-[500px] gap-[200px]'>
            <div><img src="https://i.ibb.co/2y4LPKt/1700289-222677-P31-V4-B-53-ai.png" alt="" /></div>
            {/* <div>
                <h1 className='text-[100px] font-semibold'>404</h1>
                <p className='text-[22px]'>Not Found!!!</p>
                <p>The Resource Request Cannot Be Found On This Server</p>
            </div> */}
            <button className='btn btn-outline'><Link to='/'>Go Home</Link></button>
        </div>
    );
};

export default Error;
import React from 'react';

const Loading = () => {
    return (
        <div className='w-full h-full bg-slate-300 bg-opacity-5 md:flex justify-center items-center'>
            <div><img src="https://raw.githubusercontent.com/n3r4zzurr0/svg-spinners/abfa05c49acf005b8b1e0ef8eb25a67a7057eb20/svg-css/90-ring.svg" className='animate-spin w-5 h-5' alt="loading..." /></div>
        </div>
    );
};

export default Loading;
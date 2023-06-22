import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContxt } from '../../../Layouts/AuthProviders/AuthContext';
import ParticlesBg from 'particles-bg'

const AllToys = ({ toy }) => {


    const { _id, category, picture, name, description, price, url, toyName, sellerName, subcategory } = toy
    const { user } = useContext(AuthContxt)
    let SlicedDes = ''
    if (description?.length > 100) {
        SlicedDes = description.slice(0, 100) + ' ...'
    }
    const HandleAddCart = async(toy, id,user) => {
        const post = {toy,id,mail:user?.email}
        // console.log(post,user)
        if(user){
           await fetch('https://cute-cars-server-1m0nsr3p0.vercel.app/cart',{
                method:'POST',
                headers:{
                    "content-type":"application/json"
                },
                body:JSON.stringify(post)
            })
            .then(data=>data.json())
            .then(data=>{
                console.log(data)
            })
        }
    }
    return (
        // TODO we are gonna add some pagination to this page
        <div className="card w-[300px] h-[450px] glass shadow-lg relative">
            <ParticlesBg type="circle" bg={true} />
            <figure className='w-full m-0'><img src={picture} alt="toy pic" className='cardParent w-[280px] h-[250px]' /></figure>
            <div className="card-body cardChild p-2 m-0">
                <h2 className="card-title">Title: {name}</h2>
                <span className='m-0 pb-0 text-[12px]'>About: {SlicedDes}</span>
                <p className='m-0 pb-0 text-blue-700'>Price: {price}</p>
                <div className="card-actions justify-center m-0 p-0 absolute bottom-1 w-[95%]">
                    <button className="btn btn-primary btn-full w-full" onClick={() => HandleAddCart(toy, _id,user)}>Add to Cart </button>
                    <button className="btn btn-primary btn-full w-full" ><Link to={`/details/:${_id}`}>Details</Link></button>
                </div>
            </div>
        </div>

    );
};

export default AllToys;
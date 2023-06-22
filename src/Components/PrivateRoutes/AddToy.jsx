import React, { useContext, useEffect } from 'react';
import { AuthContxt } from '../Layouts/AuthProviders/AuthContext';

const AddToy = () => {
    const {user} = useContext(AuthContxt)
    const handleAdding = (e)=>{
        e.preventDefault()
        const userMail = user.email
        const userName = user.userName;
        const form = e.target;
        const picture = form.url.value;
        const description = form.description.value;
        const toyName = form.toyName.value;
        const email = form.email.value;
        const category = form.category.value;
        const Price = form.Price.value;
        const rating = form.rating.value;
        const quantity = form.quantity.value;
        const addThisToy = {picture,email,toyName,email,category,Price,quantity,rating,description,userMail:userMail?userMail:userName}
        // console.log(addThisToy)

        fetch('https://cute-cars-server-1m0nsr3p0.vercel.app/addtoy', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(addThisToy),
          })
            .then((response) => response.json())
            .then((data) => console.log(data))
            .catch((error) => console.error(error));
        };


    return (
        <div className='flex justify-center w-full'>
            <form onSubmit={handleAdding}>

                <h1 className='text-xl font-bold'>enter details</h1>
                <div className='flex'>
                <div>
                <div className="form-control w-[400px]">
                    <label className="label">
                        <span className="label-text">url</span>
                    </label>
                    <label className="input-group">
                        <span>url</span>
                        <input type="text" name='url' placeholder="url" className="input input-bordered" />
                    </label>
                </div>
                {/* commetnt */}
                <div className="form-control w-[400px]">
                    <label className="label">
                        <span className="label-text">product name</span>
                    </label>
                    <label className="input-group">
                        <span>product name</span>
                        <input type="text" name='toyName' placeholder="product name" className="input input-bordered" />
                    </label>
                </div>
                {/* commetnt */}
                <div className="form-control w-[400px]">
                    <label className="label">
                        <span className="label-text">Seller Email</span>
                    </label>
                    <label className="input-group">
                        <span>Email</span>
                        <input type="email" name='email' placeholder="info@site.com" className="input input-bordered" />
                    </label>
                </div>
                </div>
                {/* commetnt */}
                <div>
                <select  name='category' className="select select-bordered w-full max-w-xs">
                    <option disabled selected>Toy Car</option>
                    <option>Mini Truck</option>
                    <option>Roller Scater</option>
                    <option>Mini Fire Truck</option>
                    <option>Mini Ambulance</option>
                </select>
                {/* sdfasdf */}
                <div className="form-control w-[400px]">
                    <label className="label">
                        <span className="label-text">Price</span>
                    </label>
                    <label className="input-group">
                        <span>Price</span>
                        <input type="number" name='Price' placeholder="01" className="input input-bordered" />
                    </label>
                </div>
                {/* commetnt */}
                <div className="form-control w-[400px]">
                    <label className="label">
                        <span className="label-text">Ratings</span>
                    </label>
                    <label className="input-group">
                        <span>ratings</span>
                        <input type="text" name='rating' placeholder="3.2" className="input input-bordered" />
                    </label>
                </div>
                {/* commetnt */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Enter Quantity</span>
                    </label>
                    <label className="input-group">
                        <span>Quantity</span>
                        <input type="text" name='quantity' placeholder="10" className="input input-bordered" />
                        <span>Pieces</span>
                    </label>
                </div>
                {/* sdfasdf */}
                <div className="form-control w-[400px]">
                    <label className="label">
                        <span className="label-text">description</span>
                    </label>
                    <label className="input-group">
                        <span>description</span>
                        <input type="text" name='description' placeholder="details" className="input input-bordered" />
                    </label>
                </div>
                </div>
                </div>
                <div className='w-full flex justify-center items-center p-10'><button type='submit' className='btn btn-primary '>Add</button></div>
            </form>
        </div>
    );
};

export default AddToy;
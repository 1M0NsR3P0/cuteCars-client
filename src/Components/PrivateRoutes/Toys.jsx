import React from 'react';
import { Link } from 'react-router-dom';

const Toys = ({ everyToy }) => {
    const {toyName, category, Price, quantity, _id, email } = everyToy;
    const deleteMe = (id)=>{
        fetch(`https://cute-cars-server-1m0nsr3p0.vercel.app/mytoys/${id}`,{
            method:'DELETE'
        })
        console.log(id)
    }
    return (

            <tr className="hover">
                <td>{email ? email : 'not found'}</td>
                <td>{toyName ? toyName : 'not found'}</td>
                <td>{Price ? Price : ''}</td>
                <td>{quantity ? quantity : ''}</td>
                <td>{category ? category : ''}</td>
                <td className='btn btn-info'><Link to="/details">Detail</Link></td>
                <td className='btn btn-info'><button onClick={()=>deleteMe(_id)}>Delete</button></td>
            </tr>

    );
};

export default Toys;
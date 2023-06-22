import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ActiveLink from '../Routes/ActiveLink';
import Loading from './Loading';
import { AuthContxt } from '../Layouts/AuthProviders/AuthContext';
import { FaShoppingCart } from 'react-icons/fa';

const Navbar = () => {
    const {loading, user, logout} = useContext(AuthContxt)
    const [isNavbarFixed, setNavbarFixed] = useState(false);

    //profile log out handle 
    const logoutHandle = ()=>{
        logout()
    }
    //navbar fixed
    useEffect(() => {
        const handleScroll = () => {
          const scrollPosition = window.scrollY;
          if (scrollPosition > 0) {
            setNavbarFixed(true);
          } else {
            setNavbarFixed(false);
          }
        };
    
        window.addEventListener('scroll', handleScroll);
    
        // Clean up the event listener when the component unmounts
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);
    return (
        
        <div>
              <div className={`${isNavbarFixed?"fixed-navbar z-[1000]":''} text-black navbar h-[80px] w-full justify-between gap-10 items-center px-[150px]`}>
                <div className="navbar-start">
                    {/* mobile responsive */}
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow  rounded-box w-52 bg-gray-200">
                            <li><ActiveLink to='/' >Home</ActiveLink></li>
                            <li><ActiveLink to='/blog'>Blog</ActiveLink></li>
                            <li><ActiveLink to='/cart'>
                                <button>
                                    <FaShoppingCart></FaShoppingCart>
                                    <div>{"0"}</div>
                                </button>
                                </ActiveLink></li>
                            <li tabIndex={0}>
                                <Link to='/alltoys' className="justify-between">
                                    All Toys
                                </Link>
                                
                            </li>
                            { !user&&<li><ActiveLink to='/login'>Login</ActiveLink></li>}
                        </ul>
                    </div>
                    {/* desktop navbar starts here */}
                    <a className="btn btn-ghost normal-case text-xl flex justify-center items-center gap-3"><img className='rounded-full w-[70px]' src="https://i.ibb.co/9yH1Fxh/cute-car-logo-2.png" alt="logo not found!" title='lets GO on a Kitty Adventures'/><span className='font-thin text-black text-base'>CUTE CARS</span></a>
                </div> 
                {/* comment */}
                <div className="font-semibold text-[16px] navbar-center hidden md:flex">
                    <ul className="menu menu-horizontal px-1">
                    <li><ActiveLink to='/'>Home</ActiveLink></li>
                            <li><ActiveLink to='/blog'>Blog</ActiveLink></li>
                            <li><ActiveLink to='/cart'>
                                <button className='flex'>
                                    <FaShoppingCart/>                    
                                    <div className=' badge badge-primary'>{" 0"}</div>
                                </button>
                                </ActiveLink></li>
                            <li><ActiveLink to='/allusertoys'>All Toys</ActiveLink></li>
                            <li><ActiveLink to='/alltoys'>Toys</ActiveLink></li>
                            
                            { !user&&<li><ActiveLink to='/login'>Login</ActiveLink></li>}
                    </ul>
                </div>
                {/* profile setting */}
                <div className="dropdown dropdown-end">
                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            {
                               loading? <Loading></Loading>: <img src={user?`${user.photoURL?user.photoURL:''}`:"https://media.istockphoto.com/id/1130884625/vector/user-member-vector-icon-for-ui-user-interface-or-profile-face-avatar-app-in-circle-design.jpg?s=612x612&w=0&k=20&c=1ky-gNHiS2iyLsUPQkxAtPBWH1BZt0PKBB1WBtxQJRE="} title={user?`${user.email?user.email:user.displayName}`:''}/>}
                        </div>
                    </label>
                    <ul tabIndex={0} className={`${user?'':'hidden'} menu menu-compact dropdown-content mt-3 p-2 shadow  rounded-box w-52 bg-gray-300`}>
                        <li>
                            <Link to='/profile' className="justify-between">
                                Profile 
                            </Link>
                        </li>
                        <li>
                            <Link to='/mytoys' className="justify-between">
                               My Toys
                            </Link>
                        </li>
                        <li>
                            <Link to='/addtoy' className="justify-between">
                               Add a Toy
                            </Link>
                        </li>
                        <li><a>Settings</a></li>
                        <li onClick={logoutHandle}><a>Logout</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
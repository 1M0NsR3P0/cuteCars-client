import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContxt } from '../../Layouts/AuthProviders/AuthContext';
import Loading from '../../Shared/Loading';
import { FaBeer, FaEye, FaEyeSlash } from 'react-icons/fa';
import { animated } from '@react-spring/web'

const Register = () => {
    const {
        loading,
        createUser,
        update,
        googleLogin,
        githubLogin,
    } = useContext(AuthContxt)

    const [error, setError] = useState('')
    const [show, setShow] = useState(true)

    //registration handling
    const regHandle = (event) => {
        event.preventDefault()
        const form = event.target
        const email = form.email.value
        const name = form.name.value
        const pass = form.password.value
        const confirm = form.confirm.value
        const url = form.url.value
        setError('')

        if (pass !== confirm) {
            setError(`password didn't mathch`)
            return;
        }
        createUser(email, pass)
            .then(result => {
                update(name, url)
                console.log(result.user)
            })
            .catch(err => {
                if (err.message == 'Firebase: Password should be at least 6 characters (auth/weak-password).') {
                    setError("weak password, type strong password")
                    // console.log(error)
                }
                if (err.message == 'Firebase: Error (auth/email-already-in-use).') {
                    setError("Already Registered with this email. please log in")
                    // console.log(error)
                }
                else { setError(err.message) }
            })
    }
    // lets try floating button


    return (
        <div>
            <form onSubmit={regHandle}>
                <div className="hero min-h-screen bg-base-200">
                    <div className="hero-content flex-col md:flex-row-reverse">
                        <div className="text-center lg:text-left">
                            <h1 className="text-5xl font-bold">Register now!</h1>
                        </div>
                        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                            <div className="card-body">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input type="text" placeholder="Your Name" name="name" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" placeholder="email" name='email' className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">PHoto URL</span>
                                    </label>
                                    <input type="text" placeholder="photo url" name='url' className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type={
                                        !show ? 'password' : 'text'} name='password' placeholder="password" className="input input-bordered" required />
                                    <label className="label">
                                        <span className="label-text">Confirm Password</span>
                                    </label>
                                    <input type={!show ? 'password' : 'text'} placeholder="password" className="input input-bordered" name='confirm' />
                                    <p className='' onClick={() => setShow(!show)}><small className=''>
                                        {
                                            show ? <span className='flex justify-start items-center gap-1 p-1' ><FaEye></FaEye><p>Sow Password</p></span> : <span className='flex justify-start items-center gap-1 p-1' ><FaEyeSlash></FaEyeSlash> <p>Hide password</p> </span>
                                        }
                                    </small></p>
                                    <label className="label">
                                        <div className='flex flex-col'>
                                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                            <div>
                                                Already have an account?
                                                <Link className='btn btn-link' to='/login'>Login</Link>
                                            </div>
                                        </div>
                                    </label>
                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn btn-primary" type='submit'>
                                        Register
                                        <span>{
                                            loading ? <Loading></Loading> : ''
                                        }</span>
                                    </button>
                                </div>
                            </div>
                            <p className='text-error'>{error}</p>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
};


export default Register;
import React, { useContext, useState } from 'react';
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom';
import { AuthContxt } from '../../Layouts/AuthProviders/AuthContext';
import Loading from '../../Shared/Loading';
import { ToastContainer } from 'react-toastify';


const Login = () => {
  
  const {user} =useContext(AuthContxt)
    const location = useLocation()
  const from = location?.state?.from?.pathname || '/'
  // console.log(from)
  const navigate = useNavigate(null)
  const { 
    login,
    loading,
    googleLogin,
    githubLogin,
  } = useContext(AuthContxt)
  const [error, setError] = useState('')

  //login handle
  const loginHandle = (event) => {
    setError('')
    event.preventDefault()
    const form = event.target
    const email = form.email.value
    const pass = form.password.value
    login(email, pass)
      .then(result => {
        console.log(result)
        navigate(from)
      })
      .catch(err => {
        if (err.message == 'Firebase: Password should be at least 6 characters (auth/weak-password).') {
          setError("weak password")
          
        }
        if (err.message == 'Firebase: Error (auth/email-already-in-use).') {
          setError("Already Registered with this email. please log in")
          
          // console.log(error)
        }
        else { setError(err.message); console.log(err) }
      })

    }
      const loginWithGoogle = ()=>{
        setError('')
        googleLogin()

    }
    const githubLoginHandle = ()=>{
        setError('')
        githubLogin()

    }
  

    return (user?<Navigate to="/"></Navigate>:
        <div>
          <form onSubmit={loginHandle}>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col md:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <div className='flex flex-col gap-2'>
                            <button onClick={loginWithGoogle} className='btn btn-outline mt-3'><img className='w-[25px] mr-2' src="https://i.ibb.co/2NrpWDF/google.png" alt="" />Google SignIn</button>
                            <button onClick={githubLoginHandle} className='btn btn-outline'><img className='w-[25px] mr-2' src="https://i.ibb.co/wW4Nn2q/github.png" alt="" /> Github SignIn</button>
                        </div>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" placeholder="email" name='email' className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label> 
                <input type="password" placeholder="password" name='password' className="input input-bordered" required />
                <label className="label">
                  <div className='flex flex-col'>
                    <Link to={'/login'}  onClick={login} className="label-text-alt link link-hover">Forgot password?</Link>
                    <div>
                      don't have an account?
                      <Link className='btn btn-link' to='/reg'>Register here</Link>
                    </div>
                  </div>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">
                  Login <span>{
                    loading ? <Loading></Loading> : ''
                  }</span>
                </button>
              </div>
              {
                <p className='text-error'>{error}</p>
              }
            </div>
          </div>
        </div>
      </div>
    </form>
        </div>
    );
};

export default Login;
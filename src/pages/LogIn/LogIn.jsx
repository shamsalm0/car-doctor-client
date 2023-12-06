import React, { useContext } from 'react';
import img1 from '../../assets/images/login/login.svg'
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';
const LogIn = () => {
const{logIn}=useContext(AuthContext)
    const handleLogIn=e=>{
        e.preventDefault();
        
        const form=e.target;
        const email=form.email.value;
        const password=form.password.value;

        logIn(email,password)
        .then(result=>{
          const user=result.user;
          console.log(user);
        })
        .catch(error=>console.log(error));

    }

    return (
        <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row">
    <div className="w-1/2 mr-12">
      <img src={img1} alt="" />
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
    <h1 className="text-3xl text-center font-bold">Login</h1>
      <form onSubmit={handleLogIn} className="card-body">
      
        <div className="form-control">
       
       <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name='email' placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name='password' placeholder="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button type='submit' className="btn btn-primary">Login</button>
        </div>
       </form>
      <p className='mx-auto mb-2'>New to Car Doctors? <Link className='text-orange-500 font-bold' to='/signup'>Sign Up</Link></p>
    </div>
  </div>
</div>
    );
};

export default LogIn;
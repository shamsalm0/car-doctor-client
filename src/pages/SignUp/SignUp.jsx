import React, { useContext } from 'react';
import img1 from '../../assets/images/login/login.svg'
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';
const SignUp = () => {
  const{createUser}=useContext(AuthContext);
    const handleSignUp=e=>{
        e.preventDefault();
        const form=e.target;
        const name=form.name.value;
        const email=form.email.value;
        const password=form.password.value;

        createUser(email,password)
        .then(result=>{
          const user=result.user;
          console.log(user)
        })
        .catch(error=>console.log(error))

    }
    return (
        <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row">
    <div className="w-1/2 mr-12">
      <img src={img1} alt="" />
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
    <h1 className="text-3xl font-bold text-center">Sign Up</h1>
      <form onSubmit={handleSignUp} className="card-body">
      
        <div className="form-control">
       
       <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" name='name' placeholder="name" className="input input-bordered" required />
        </div>
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
          <button type='submit' className="btn btn-primary">SignUp</button>
        </div>
       </form>
      <p className='mx-auto mb-2'>Already have an account ? <Link className='text-orange-500 font-bold' to='/login'>Sign in</Link></p>
    </div>
  </div>
</div>
    );
};

export default SignUp;
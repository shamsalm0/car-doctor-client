import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';

const CheckOut = () => {
    const services= useLoaderData();
    const{title,price,_id,img}=services
    const{user}=useContext(AuthContext);

    const handleCheckOut=e=>{
      e.preventDefault();
      const form=e.target;
      const name=form.name.value;
      const email=user?.email;
      const date=form.date.value;
      const order={
        customerName: name,
        email,
        date,
        service:title,
        img:img,
        service_id:_id,
        price:price
      }
      console.log(order);

      fetch('http://localhost:5000/booking',{
        method:'POST',
        headers:{
          'content-type':'application/json'
        },
        body:JSON.stringify(order)
      })
      .then(res=>res.json())
      .then(data=>{
        if(data.insertedId){
          alert('Booking Successfully')
        }
        console.log(data);
      })
    }
    return (
        <div>
            <h2 className='text-xl text-center font-bold'>{title}</h2>
            <h2 className='text-xl text-center font-bold'>${price}</h2>
           
      <div className="card-body  ">
     <form onSubmit={handleCheckOut}>   
     <div className='bg-[#F3F3F3] lg:p-28 grid lg:grid-cols-2 gap-5'>
        <div className="form-control mr-5 ">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" defaultValue={user?.email} className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" name='name' placeholder="Name" className="input input-bordered" required />
          
        </div>
        <div className="form-control mr-5 mb-6">
          <label className="label">
            <span className="label-text">Date</span>
          </label>
          <input type="date" name='date' className="input input-bordered" required />
          
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Price</span>
          </label>
          <input type="text"  defaultValue={price} className="input input-bordered" required />
          
        </div>
        <div className='mx-auto lg:w-full lg:ml-40'>
        <label className="label">
            <span className="label-text">Discription</span>
          </label>  
        <textarea placeholder="" className="textarea textarea-bordered textarea-lg w-full " ></textarea>
        </div>
        </div>
        <div className="form-control mt-6">
          <button type='submit' className="btn btn-primary">Submit</button>
        </div></form>
      </div>
    </div>
 
        
    );
};

export default CheckOut;
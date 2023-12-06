import React from 'react';
import { GoArrowRight } from "react-icons/go";
import { Link } from 'react-router-dom';

const ServiceCard = ({service}) => {
    const{_id,title,img,price}=service
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
  <figure><img src={img} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title text-bold text-2xl">{title}</h2>
    <p className='text-semibold text-[#FF3811] text-xl'>Price:${price}</p>
    <div className="card-actions justify-end">
      <Link to={`/checkout/${_id}`}><button className="btn btn-primary"><GoArrowRight />
</button></Link>
    </div>
  </div>
</div>
    );
};

export default ServiceCard;
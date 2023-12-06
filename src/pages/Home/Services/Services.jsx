import React, { useEffect, useState } from 'react';
import ServiceCard from './ServiceCard';
import { LuCalendarClock } from "react-icons/lu";
import { MdOutlinePermPhoneMsg } from "react-icons/md";
import { IoLocation } from "react-icons/io5";
const Services = () => {
    const [services,setServices]=useState([])
    const[products,setProducts] =useState()
    useEffect(()=>{
        fetch('http://localhost:5000/services')
        .then(res=>res.json())
        .then(data=>setServices(data))
    },[])
    return (
        <div>
            <div className='text-center lg:mt-20 lg:mb-24'>
                <h2 className='font-bold text-orange-500 text-2xl '>Services</h2>
                <h3 className='text-5xl font-bold pb-5'>Our Service Area</h3>
                <p className='text-xl'>the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
            </div>
            <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
            {
                services.map(service=><ServiceCard key={service._id} service={service}></ServiceCard>)
            }


            </div>
            <div className='p-8 flex flex-col items-center w-full lg:mb-10'>
<button className="btn btn-outline items-center btn-[FF3811]  w-1/4"><p>Services</p></button>
</div>

<div className='bg-black lg:flex justify-around items-center lg:h-60 rounded-xl lg:mb-24'>
    <div className='text-white flex items-center'>
    <div>
        <LuCalendarClock className='lg:h-10 lg:w-10'/>
        </div>
        <div>
        <h1 className='lg:text-lg'>We are open monday-friday</h1>
        <h3 className='lg:text-2xl font-bold'>7:00 am - 9:00 pm</h3>
        </div>
        
    </div>
    <div className='text-white flex items-center'>
    <div>
        <MdOutlinePermPhoneMsg className='lg:h-10 lg:w-10'/>
        </div>
        <div>
        <h1 className='lg:text-lg'>Have a question?</h1>
        <h3 className='lg:text-2xl font-bold'>+2546 251 2658</h3>
        </div>
        
    </div>
    <div className='text-white flex items-center'>
    <div>
        <IoLocation className='lg:h-10 lg:w-10'/>
        </div>
        <div>
        <h1 className='lg:text-lg'>Need a repair? our address</h1>
        <h3 className='lg:text-2xl font-bold'>Liza Street, New York</h3>
        </div>
        
    </div>
</div>

<div className='text-center  lg:mt-20 lg:mb-24'>
                <h2 className='font-bold text-orange-500 text-2xl '>Popular Products</h2>
                <h3 className='text-5xl font-bold pb-5'>Browse Our Products</h3>
                <p className='text-xl'>the majority have suffered alteration in some form, by injected humour, or randomised <br></br> words which don't look even slightly believable.  </p>
            </div>
        </div>

    );
};

export default Services;
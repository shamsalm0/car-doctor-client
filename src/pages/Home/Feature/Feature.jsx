import React from 'react';
import { IoIosPeople } from "react-icons/io";
import { IoTimeSharp } from "react-icons/io5";
import { BiSupport } from "react-icons/bi";
import { HiOutlineWrenchScrewdriver } from "react-icons/hi2";
import { SiFsecure } from "react-icons/si";
import { AiOutlineDeliveredProcedure } from "react-icons/ai";

const Feature = () => {
    return (
        <div className='lg:mb-28'>
             <div className='text-center lg:mt-20 lg:mb-24'>
                <h2 className='font-bold text-orange-500 text-2xl lg:mb-8 '>Core Features</h2>
                <h3 className='text-5xl font-bold pb-5 '>Why Choose Us</h3>
                <p className='text-xl'>the majority have suffered alteration in some form, by injected humour, or randomised <br></br> words which don't look even slightly believable. </p>
            </div>
            <div className='grid lg:grid-cols-6 md:grid-cols-3 grid-cols-2'>
                <div className='text-8xl lg:w-44 lg:h-40 border-2 rounded-xl'>< IoIosPeople className='mx-auto'/> <p className='font-bold text-center text-lg'>Expert Team</p></div>
                <div className='text-8xl lg:w-44 lg:h-40 bg-[#FF3811] border-2 rounded-xl '>< IoTimeSharp className='mx-auto'/> <p className='font-bold text-center text-lg'>Time Delivery</p></div>
                <div className='text-8xl lg:w-44 lg:h-40 border-2 rounded-xl'>< BiSupport className='mx-auto'/> <p className='font-bold text-center text-lg'>24/7 Support</p></div>
                <div className='text-8xl lg:w-44 lg:h-40 border-2 rounded-xl'>< HiOutlineWrenchScrewdriver className='mx-auto'/> <p className='font-bold text-center text-lg'>Best Equipment</p></div>
                <div className='text-8xl lg:w-44 lg:h-40 border-2 rounded-xl'>< SiFsecure className='mx-auto'/><p className='font-bold text-center text-lg'>100% Gurantee</p></div>
                <div className='text-8xl lg:w-44 lg:h-40 border-2 rounded-xl'>< AiOutlineDeliveredProcedure className='mx-auto'/> <p className='font-bold text-center text-lg'>Timely Delivery</p></div>
            </div>
        </div>
    );
};

export default Feature;
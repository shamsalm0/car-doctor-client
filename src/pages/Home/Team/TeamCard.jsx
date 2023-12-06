import React from 'react';
import img1 from '../../../assets/images/team/1.jpg'
import img2 from '../../../assets/images/team/2.jpg'
import img3 from '../../../assets/images/team/3.jpg'
import { Link } from 'react-router-dom';
import { FaFacebook } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const TeamCard = () => {
    return (
        <div className='lg:mb-36'>
                    <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1'>
                    <div className="card card-compact w-96 bg-base-100 shadow-xl">
  <figure><img src={img1} alt="Shoes" /></figure>
  <div className="card-body text-center">
    <h2 className="card-title font-bold mx-auto text-2xl">Car Engine Plug</h2>
    <p className='text-semibold text-[#737373] text-xl'>Engine Expert</p>
   <div className='flex justify-center'>
    <Link className='text-[#395185] text-4xl'><FaFacebook /></Link>
    <Link className='text-4xl text-[#55ACEE]'><AiFillTwitterCircle /></Link>
    <Link className='text-[#0A66C2] text-4xl'><FaLinkedin /></Link>
    <Link className='text-[#774ADF] text-4xl'><FaInstagram />
</Link>
   </div>
  </div>
</div>

<div className="card card-compact w-96 bg-base-100 shadow-xl">
  <figure><img src={img1} alt="Shoes" /></figure>
  <div className="card-body text-center">
    <h2 className="card-title font-bold mx-auto text-2xl">Car Engine Plug</h2>
    <p className='text-semibold text-[#737373] text-xl'>Engine Expert</p>
   <div className='flex justify-center'>
    <Link className='text-[#395185] text-4xl'><FaFacebook /></Link>
    <Link className='text-4xl text-[#55ACEE]'><AiFillTwitterCircle /></Link>
    <Link className='text-[#0A66C2] text-4xl'><FaLinkedin /></Link>
    <Link className='text-[#774ADF] text-4xl'><FaInstagram />
</Link>
   </div>
  </div>
</div>

<div className="card card-compact w-96 bg-base-100 shadow-xl">
  <figure><img src={img1} alt="Shoes" /></figure>
  <div className="card-body text-center">
    <h2 className="card-title font-bold mx-auto text-2xl">Car Engine Plug</h2>
    <p className='text-semibold text-[#737373] text-xl'>Engine Expert</p>
   <div className='flex justify-center'>
    <Link className='text-[#395185] text-4xl'><FaFacebook /></Link>
    <Link className='text-4xl text-[#55ACEE]'><AiFillTwitterCircle /></Link>
    <Link className='text-[#0A66C2] text-4xl'><FaLinkedin /></Link>
    <Link className='text-[#9D4ADF] text-4xl'><FaInstagram />
</Link>
   </div>
  </div>
</div>
                    </div>
        </div>
    );
};

export default TeamCard;
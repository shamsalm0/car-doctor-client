import React from 'react';
import { FaStar } from "react-icons/fa";

const Testimonial = () => {

    return (
        <div className='lg:mb-32'>
             <div className='text-center lg:mt-20 lg:mb-24'>
                <h2 className='font-bold text-orange-500 text-2xl lg:mb-8'>Testimonial</h2>
                <h3 className='text-5xl font-bold pb-5'>What Customer Says</h3>
                <p className='text-xl'>the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
            </div>
            <div className='flex gap-5'>
            <div className="card w-1/2 h-96 bg-base-100 shadow-xl">
  <div className="card-body">
   <div className='flex gap-5 lg:mb-4'>
    <img className='w-16 h-16 rounded-full' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4VYeeRNWKF6Fs2JXFsKnvvV9dk6Z7TaY0nUvj-8iySCgoIid362fHWJyVsibd1wMQBCY&usqp=CAU" alt="" />
   <div><h2 className="card-title font-bold lg:text-2xl">Awlad Hossain</h2>
    <h2 className="card-title font-semibold lg:text-xl text-[#737373]">Businessman</h2></div>
   </div>
    <p className='text-sm lg:text-lg lg:space-y-4 text-[#737373]'>There are many variations of passages of Lorem Ipsum <br></br> available, but the majority have suffered alteration in some<br></br> form, by injected humour, or randomised words which do not<br></br> look even slightly believable. </p>
    <div className='flex text-orange-500 text-xl mb-8'>
    <FaStar />
    <FaStar />
    <FaStar />
    <FaStar />
    <FaStar />

    </div>
  </div>
</div>
<div className="card w-1/2 h-96 bg-base-100 shadow-xl">
  <div className="card-body">
   <div className='flex gap-5 lg:mb-4'>
    <img className='w-16 h-16 rounded-full' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4VYeeRNWKF6Fs2JXFsKnvvV9dk6Z7TaY0nUvj-8iySCgoIid362fHWJyVsibd1wMQBCY&usqp=CAU" alt="" />
   <div><h2 className="card-title font-bold lg:text-2xl">Awlad Hossain</h2>
    <h2 className="card-title font-semibold lg:text-xl text-[#737373]">Businessman</h2></div>
   </div>
    <p className='text-lg space-y-4 text-[#737373]'>There are many variations of passages of Lorem Ipsum <br></br> available, but the majority have suffered alteration in some<br></br> form, by injected humour, or randomised words which do not<br></br> look even slightly believable. </p>
    <div className='flex text-orange-500 text-xl mb-8'>
    <FaStar />
    <FaStar />
    <FaStar />
    <FaStar />
    <FaStar />

    </div>
  </div>
</div>
            </div>
        </div>
    );
};

export default Testimonial;
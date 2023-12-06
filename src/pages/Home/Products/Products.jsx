import React from 'react';
import img1 from '../../../assets/images/products/1.png'
import img2 from '../../../assets/images/products/2.png'
import img3 from '../../../assets/images/products/3.png'
import img4 from '../../../assets/images/products/4.png'
import img5 from '../../../assets/images/products/5.png'
import img6 from '../../../assets/images/products/6.png'
import { FaStar } from "react-icons/fa6";
const Products = () => {
    return (
        <div className='lg:mb-36'>
        <div className='grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3'>
                    <div className="card  card-compact w-92 h-96 bg-base-100
                     shadow-xl ">
  <div className='border-8 lg:h-52 lg:w-72 mx-auto mt-3 rounded-xl bg-slate-200'>
  <figure className='bg-inherit'><img className='h-16 w-20 lg:h-36 lg:w-40 ' src={img1} alt="Shoes" /></figure>
  </div>
  <div className="card-body text-center">
    <h2 className="card-title text-bold lg:text-2xl text-orange-500 mx-auto lg:mx-auto"><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></h2>
    <h2 className='font-bold text-2xl'>Cools Led Light</h2>
    <p className='font-semibold text-[#FF3811] text-xl'>$20.00</p>
    <div className="card-actions justify-end">
  
    </div>
  </div>
</div>

<div className="card  card-compact w-92 h-96 bg-base-100
                     shadow-xl ">
  <div className='border-8 lg:h-52 lg:w-72 mx-auto mt-3 rounded-xl bg-slate-200'>
  <figure className='bg-inherit'><img className='h-16 w-20 lg:h-36 lg:w-40 ' src={img2} alt="Shoes" /></figure>
  </div>
  <div className="card-body text-center">
    <h2 className="card-title text-bold text-2xl text-orange-500 mx-auto"><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></h2>
    <h2 className='font-bold text-2xl'>Cools Led Light</h2>
    <p className='font-semibold text-[#FF3811] text-xl'>$20.00</p>
    <div className="card-actions justify-end">
  
    </div>
  </div>
</div>

<div className="card  card-compact w-92 h-96 bg-base-100
                     shadow-xl ">
  <div className='border-8 lg:h-52 lg:w-72 mx-auto mt-3 rounded-xl bg-slate-200'>
  <figure className='bg-inherit'><img className='h-16 w-20 lg:h-36 lg:w-40 ' src={img3} alt="Shoes" /></figure>
  </div>
  <div className="card-body text-center">
    <h2 className="card-title text-bold text-2xl text-orange-500 mx-auto"><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></h2>
    <h2 className='font-bold text-2xl'>Car Air Filter</h2>
    <p className='font-semibold text-[#FF3811] text-xl'>$20.00</p>
    <div className="card-actions justify-end">
  
    </div>
  </div>
</div>

<div className="card  card-compact w-92 h-96 bg-base-100
                     shadow-xl ">
  <div className='border-8 lg:h-52 lg:w-72 mx-auto mt-3 rounded-xl bg-slate-200'>
  <figure className='bg-inherit'><img className='h-16 w-20 lg:h-36 lg:w-40 ' src={img4} alt="Shoes" /></figure>
  </div>
  <div className="card-body text-center">
    <h2 className="card-title text-bold text-2xl text-orange-500 mx-auto"><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></h2>
    <h2 className='font-bold text-2xl'>Cools Led Light</h2>
    <p className='font-semibold text-[#FF3811] text-xl'>$20.00</p>
    <div className="card-actions justify-end">
  
    </div>
  </div>
</div>

<div className="card  card-compact w-92 h-96 bg-base-100
                     shadow-xl ">
  <div className='border-8 lg:h-52 lg:w-72 mx-auto mt-3 rounded-xl bg-slate-200'>
  <figure className='bg-inherit'><img className='h-16 w-20 lg:h-36 lg:w-40 ' src={img5} alt="Shoes" /></figure>
  </div>
  <div className="card-body text-center">
    <h2 className="card-title text-bold text-2xl text-orange-500 mx-auto"><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></h2>
    <h2 className='font-bold text-2xl'>Cools Led Light</h2>
    <p className='font-semibold text-[#FF3811] text-xl'>$20.00</p>
    <div className="card-actions justify-end">
  
    </div>
  </div>
</div>

<div className="card  card-compact w-92 h-96 bg-base-100
                     shadow-xl ">
  <div className='border-8 lg:h-52 lg:w-72 mx-auto mt-3 rounded-xl bg-slate-200'>
  <figure className='bg-inherit'><img className='h-16 w-20 lg:h-36 lg:w-40 ' src={img6} alt="Shoes" /></figure>
  </div>
  <div className="card-body text-center">
    <h2 className="card-title text-bold text-2xl text-orange-500 mx-auto"><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></h2>
    <h2 className='font-bold text-2xl'>Car Engine Plug</h2>
    <p className='font-semibold text-[#FF3811] text-xl'>$20.00</p>
    <div className="card-actions justify-end">
  
    </div>
  </div>
</div>
        </div>
        <div className='p-8 flex flex-col items-center w-full lg:mb-10'>
<button className="btn btn-outline items-center btn-[FF3811]  w-1/4">More Products</button>
</div>
        </div>
    );
};

export default Products;
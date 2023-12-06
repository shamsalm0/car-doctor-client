import React from 'react';
import img1 from '../../../assets/images/homeCarousel/1.jpg'
import img2 from '../../../assets/images/homeCarousel/2.jpg'
import img3 from '../../../assets/images/homeCarousel/3.jpg'
import img4 from '../../../assets/images/homeCarousel/4.jpg'
const Banner = () => {
    return (
        <div className="carousel w-full h-[600px]">
  <div id="slide1" className="carousel-item relative w-full">
    <img src={img1} className="w-full rounded-xl" />
    <div className="absolute flex  transform -translate-y-1/2 left-5 right-5 bottom-0 bg-gradient-to-r from-[rgba(21,21,21,30)] to-[rgba(21,21,21,0)]">
     <div className='text-white space-y-7 w-1/3'><h2 className='text-6xl'>Affordable Price For Car Servicing</h2>
     <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
     <div>
    <button className="btn btn-error w-44 mr-5">Discover</button>
    <button className="btn btn-primary w-44">Default</button>
    </div>
     </div>
    </div>
    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0 ">
      <a href="#slide4" className="btn btn-circle">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
    
  </div> 
  <div id="slide2" className="carousel-item relative w-full">
    <img src={img2} className="w-full rounded-xl" />
    <div className="absolute flex  transform -translate-y-1/2 left-5 right-5 bottom-0 bg-gradient-to-r from-[rgba(21,21,21,50)] to-[rgba(21,21,21,0)]">
     <div className='text-white space-y-7 w-1/3'><h2 className='text-6xl'>Affordable Price For Car Servicing</h2>
     <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
     <div>
    <button className="btn btn-error w-44 mr-5">Discover</button>
    <button className="btn btn-primary w-44">Default</button>
    </div>
     </div>
    </div>
    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
      <a href="#slide1" className="btn btn-circle">❮</a> 
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full">
    <img src={img3} className="w-full rounded-xl" />
    <div className="absolute flex  transform -translate-y-1/2 left-5 right-5 bottom-0 bg-gradient-to-r from-[rgba(21,21,21,50)] to-[rgba(21,21,21,0)]">
     <div className='text-white space-y-7 w-1/3'><h2 className='text-6xl'>Affordable Price For Car Servicing</h2>
     <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
     <div>
    <button className="btn btn-error w-44 mr-5">Discover</button>
    <button className="btn btn-primary w-44">Default</button>
    </div>
     </div>
    </div>
    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
      <a href="#slide2" className="btn btn-circle">❮</a> 
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide4" className="carousel-item relative w-full">
    <img src={img4} className="w-full rounded-xl" />
    <div className="absolute flex  transform -translate-y-1/2 left-5 right-5 bottom-0 bg-gradient-to-r from-[rgba(21,21,21,50)] to-[rgba(21,21,21,0)]">
     <div className='text-white  space-y-7 w-1/3 '><h2 className='text-6xl'>Affordable Price For Car Servicing</h2>
     <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
     <div className='flex'>
    <button className="btn btn-error w-44 mr-5">Discover</button>
    <button className="btn btn-primary w-44">Default</button>
    </div>
     </div>
    </div>
    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
      <a href="#slide3" className="btn btn-circle">❮</a> 
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>
</div>
    );
};

export default Banner;
import React from 'react';
import Banner from '../Banner/Banner';
import About from '../../About/About';
import Services from '../Services/Services';
import Products from '../Products/Products';
import Team from '../Team/Team';
import Feature from '../Feature/Feature';
import Testimonial from '../Testimonial/Testimonial';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
           <Services> </Services>
           <Products></Products>
           <Team></Team>
           <Feature></Feature>
           <Testimonial></Testimonial>
        </div>
    );
};

export default Home;
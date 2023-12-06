import React from 'react';
import TeamCard from './TeamCard';

const Team = () => {
    return (
        <div>
             <div className='text-center lg:mt-20 lg:mb-24'>
                <h2 className='font-bold text-orange-500 text-2xl lg:mb-8 '>Team</h2>
                <h3 className='text-5xl font-bold pb-5 '>Meet Our Team</h3>
                <p className='text-xl'>the majority have suffered alteration in some form, by injected humour, or randomised <br></br> words which don't look even slightly believable. </p>
            </div>

            <TeamCard ></TeamCard>
        </div>

    );
};

export default Team;
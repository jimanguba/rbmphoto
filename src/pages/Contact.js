import React from 'react';


import Socials from '../components/Socials';
const Contact = () => {
  return (
    <section className='section flex justify-center items-center'>
      <div className='container mx-auto'>
        {/* text & img wrapper */}
        <div className='flex flex-col items-center lg:items-start'>
          {/* text */}
          <div className='w-full pt-36 pb-14 lg:pt-0 lg:pb-0 lg:w-auto'>
            <h1 className='h1 text-center lg:text-left'>Page under construction!</h1>
            <p className='text-[26px] lg:text-[36px] font-primary mb-4 lg:mb-12'> Check out our socials in the meantime!</p>
            <Socials />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

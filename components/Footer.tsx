import React from 'react';

function Footer() {
  return (
    <div className='relative text-white z-4 bg-blackWh flex flex-col justifiy-center items-center p-40 pt-10'>
      <section>
        <p className='p-5 pt-0'>
          Join the newsletter and we will make sure that you stay updated
        </p>
        <div className='flex'>
          <form className='m-auto flex flex-wrap'>
            <input
              className='p-2 ml-1 mt-1'
              name='email'
              type='email'
              placeholder='Your Email'
            />
            <button className='m-auto ml-1 mt-1 p-2 border border-white hover:bg-blackH duration-200' >Subscribe</button>
          </form>
        </div>
      </section>
      <div className='flex flex-col lg:grid grid-cols-2 gap-4 mt-10'>
        <div className='flex flex-col sm:grid grid-cols-2 gap-4'>
          <div className='flex flex-col'>
            <h2 className='mb-5 text-xl'>About Us</h2>
            <a href='/sign-up'>How it works</a>
            <a href='/'>Testimonials</a>
            <a href='/'>Careers</a>
            <a href='/'>Inveshrefrs</a>
            <a href='/'>Terms of Service</a>
          </div>
          <div className='flex flex-col'>
            <h2 className='mb-5 text-xl' >Contact Us</h2>
            <a href='/'>Contact</a>
            <a href='/'>Support</a>
            <a href='/'>Destinations</a>
            <a href='/'>Sponsorships</a>
          </div>
        </div>
        <div className='flex flex-col sm:grid grid-cols-2 gap-4'>
          <div className='flex flex-col'>
            <h2 className='mb-5 text-xl' >Videos</h2>
            <a href='/'>Submit Video</a>
            <a href='/'>Ambassadors</a>
            <a href='/'>Agency</a>
            <a href='/'>Influencer</a>
          </div>
          <div className='flex flex-col'>
            <h2 className='mb-5 text-xl' >Social Media</h2>
            <a href='/'>Instagram</a>
            <a href='/'>Facebook</a>
            <a href='/'>Youtube</a>
            <a href='/'>Twitter</a>
          </div>
        </div>
      </div>
      
    </div>
  );
}

export default Footer;

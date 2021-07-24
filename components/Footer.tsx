import React from 'react';
import Link from 'next/link'

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
            <Link href='/sign-up'>How it works</Link>
            <Link href='/'>Testimonials</Link>
            <Link href='/'>Careers</Link>
            <Link href='/'>Inveshrefrs</Link>
            <Link href='/'>Terms of Service</Link>
          </div>
          <div className='flex flex-col'>
            <h2 className='mb-5 text-xl' >Contact Us</h2>
            <Link href='/'>Contact</Link>
            <Link href='/'>Support</Link>
            <Link href='/'>Destinations</Link>
            <Link href='/'>Sponsorships</Link>
          </div>
        </div>
        <div className='flex flex-col sm:grid grid-cols-2 gap-4'>
          <div className='flex flex-col'>
            <h2 className='mb-5 text-xl' >Videos</h2>
            <Link href='/'>Submit Video</Link>
            <Link href='/'>Ambassadors</Link>
            <Link href='/'>Agency</Link>
            <Link href='/'>Influencer</Link>
          </div>
          <div className='flex flex-col'>
            <h2 className='mb-5 text-xl' >Social Media</h2>
            <Link href='/'>Instagram</Link>
            <Link href='/'>Facebook</Link>
            <Link href='/'>Youtube</Link>
            <Link href='/'>Twitter</Link>
          </div>
        </div>
      </div>
      
    </div>
  );
}

export default Footer;

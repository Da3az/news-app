import React from 'react'

export default function HeroSection() {
    return (
        <div className='relative'>
                <div className='h-hero w-full'>
                    <video className = 'fixed object-cover bg-transparent bg-fixed h-screen w-screen' src='/videos/video.mp4' autoPlay loop muted />
                </div>
                <div className='bg-blackTr  text-yellow absolute top-0 left-0  w-full h-full flex flex-col items-center justify-center'>
                    <h1 className='p-10 pt-0 pb-0 flex m-auto mb-10 mt-10 md:text-6xl text-3xl'>DON'T MISS ANYTHING</h1>
                    <h1 className='p-4 pt-0 flex m-auto mt-0 mb-0  md:text-3xl text-xl'>All the news , Anytime , Everywhere</h1>
                    <button className='bg-blackWh p-4 mt-20 br-10 rounded hover:bg-red duration-300 text-white' >Subscribe Now</button>
                </div>  
        </div>
    )
}

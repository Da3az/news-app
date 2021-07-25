import React from 'react'
import Image from 'next/image';

// interface IArticle{
//     id:number|string,
//     name:string,
//     title:string,
//     description:string,
//     url:string,
//     urlToImage:string
//   }

interface IArticle{
  id:number|string,
  section:string,
  title:string,
  abstract:string,
  url:string,
  media:Array<{
   [index:string]:Array<{
     [index:string]:string
   }>
  }>
}

type TCases = {
    [index:string]:string,
}

interface IHeadLine {
  el:IArticle,
  index:number,
  news:boolean
}



export default function HeadLine({el,index,news}:IHeadLine) {

    const cases:TCases = {
        '0':'col-span-3 md:text-3xl',

       
    }  

  //   const cases2:TCases = {
  //     '0':'col-span-2 row-span-2',
  //     '4':'col-span-2 row-span-2',
  // }  

    

    // <Image 
    //   layout='responsive'
    //   height={1080}
    //   width={1920}w
    //   src={el.urlToImage}
    // />

  
    return (
                <div key={el.id} className={'border border-blackWh h-full w-full  relative rounded-sm cursor-pointer ' + (cases[index]  ? cases[index] : '')  } >
                    <a  className='  w-full h-full ' target='_blank' rel="noreferrer" href={el.url}>
                
                  <Image 
                    layout='responsive'
                    height={1080}
                    width={1920}
                    className=' rounded-sm w-full h-full object-cover' 
                    src={el.media[0]['media-metadata'][el.media[0]['media-metadata'].length-1].url} alt={el.title} 
                  />
                    <div className='absolute z-3 rounded-xl flex flex-col bg-blackTr w-full  h-full top-0 left-0 mt-auto  text-white opacity-0 hover:opacity-100 duration-300 '>
                      <h3 className=' p-5 overflow-hidden'>{el.title}</h3>
                    </div>
                    </a>
                
                </div>
    )
}

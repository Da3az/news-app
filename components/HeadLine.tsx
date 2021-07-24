import React from 'react'
import Image from 'next/image';
import {ExternalLinkIcon} from '@heroicons/react/outline'

interface IArticle{
    id:number|string,
    name:string,
    title:string,
    description:string,
    url:string,
    urlToImage:string
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

    const cases1:TCases = {
        '0':'col-span-2 row-span-2',
        '1':'row-span-2',
        '3':'col-span-2'
    }  

    const cases2:TCases = {
      '0':'col-span-2 row-span-2',
      '1':'row-span-2',
      '2':'col-span-1 row-span-2',
      '3':'row-span-1',
      '5':'col-span-2 row-span-1'
  }  

    


    // <Image 
    //   layout='responsive'
    //   height={1080}
    //   width={1920}
    //   src={el.urlToImage}
    // />

  
    return (
                <div key={el.id} className={'relative rounded-xl cursor-pointer ' + (cases1[index]&& !news  ? cases1[index] : '') + (news && cases2[index]) } >
                  <a target='_blank' href={el.url}>
                  <img className='border-2 rounded-xl w-full h-full object-cover' src={el.urlToImage} alt={el.title} />
                  <div className='absolute rounded-xl flex flex-col bg-blackTr w-full  h-full top-0 left-0 mt-auto  text-white opacity-0 hover:opacity-100 duration-300 '>
                    <h3 className='mt-auto p-5 overflow-hidden'>{el.title}</h3>
                  </div>
                  </a>
                </div>
    )
}

import React from 'react'
import HeadLine from './HeadLine'

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
  
  
  interface IArticles{
    status:string,
    totalResults:number,
    articles:Array<IArticle>
  }

export default function HeadLines({articles}:{articles:Array<IArticle>}) {

    return (
        <div className='w-full m-auto z-4 relative bg-white flex flex-col justify-center items-center'>
          <div className='w-10/12'>
            <h1 className='mr-auto ml-20 pt-10 text-4xl' >HEADLINES</h1>
            <div className = 'md:grid auto-cols-min grid-cols-3 gap-5 flex flex-col flex-wrap p-10 w-full h-full'>
               {
                   articles?.filter(el => el.media.length )?.slice(0,7).map( (el:IArticle, index:number) => (
                        <HeadLine key={`${el.id}` + index} news={false} el ={el} index={index}></HeadLine>
                   ))
               }
            </div>
          </div>
        </div>
    )
}

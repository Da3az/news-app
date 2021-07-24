import React from 'react'
import HeadLine from './HeadLine'

interface IArticle{
    id:number|string,
    name:string,
    title:string,
    description:string,
    url:string,
    urlToImage:string
  }
  
  
  interface IArticles{
    status:string,
    totalResults:number,
    articles:Array<IArticle>
  }

export default function HeadLines({articles}:{articles:Array<IArticle>}) {
    const head:Array<IArticle> = articles.filter( el => el.urlToImage).slice(0,13)

    return (
        <div className='w-full z-4 relative bg-white p-50  flex flex-col justify-center items-center'>
            <h1 className='mr-auto ml-20 pt-10 text-4xl' >HEADLINES</h1>
            <div className = 'md:grid grid-cols-3 gap-5 flex flex-col flex-wrap p-10'>
               {
                   head?.map( (el:IArticle, index:number) => (
                        <HeadLine key={`${el.id}` + index} news={false} el ={el} index={index}></HeadLine>
                   ))
               }
            </div>
        </div>
    )
}

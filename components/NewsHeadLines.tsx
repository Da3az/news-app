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

export default function NewsHeadLines({articles}:{articles:Array<IArticle>}) {
    const head:Array<IArticle> = articles.filter( el => el.urlToImage)
    return (
        <div key='headlines' className='flex flex-col lg:grid grid-cols-3 gap-4 mt-10 mb-10'>
            {
                head.map( (el:IArticle, index:number) => (
                    <HeadLine key={`${el.id}` + index} news={true} el ={el} index={index}></HeadLine>
               ))
            }
        </div>
    )
}

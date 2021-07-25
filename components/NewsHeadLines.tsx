import React from 'react'
import HeadLine from './HeadLine'

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

export default function NewsHeadLines({articles}:{articles:Array<IArticle>}) {
    return (
        <div key='headlines' className='flex flex-col lg:grid grid-cols-3 gap-4 mt-10 mb-10 w-full h-full'>
            {
                articles?.filter(el => el.media.length )?.map( (el:IArticle, index:number) => (
                    <HeadLine key={`${el.id}` + index} news={true} el ={el} index={index}></HeadLine>
               ))
            }
        </div>
    )
}

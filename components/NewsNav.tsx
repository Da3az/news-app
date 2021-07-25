import React from 'react'
import {useRouter} from 'next/router';

export default function NewsNav({query}:{query:string}) {
    const categories:Array<Array<string>> = [
        ['Most Viewed','viewed/7'],
        ['Most Emailed','emailed/1'],
        ['Most Shared on Facebook','shared/1/facebook']
    ]
    const router = useRouter();
    const handleClick = (el:any,category:string) => {
      router.push(`/news/?category=${category}`)
    }
    return (
        <div className='flex flex-row flex-wrap justify-center'>
            {
                categories.map((category) => (
                    <div 
                      key = {category[0]}
                      className={`category flex p-2 m-2 hover:bg-blackWh hover:text-white rounded-xl cursor-pointer duration-500 ${category[1] === query && 'bg-blackWh text-white'} `} 
                      onClick={(el:any)=> handleClick(el,category[1])}
                    >{category[0]}</div>
                ))
            }
        </div>
    )
}


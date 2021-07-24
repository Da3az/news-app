import React from 'react'
import {useRouter} from 'next/router';


export default function NewsNav() {
    const categories:Array<string> = ['business','entertainment','general','health','science','sports','technology']
    const router = useRouter();
    const handleClick = (el:any,category:string) => {

      const elements = document.getElementsByClassName('category')  
      for (let index = 0; index < elements.length; index++) {
          const element = elements[index];
          element.classList.value = element.classList.value.split(' ').filter(e => e !== 'bg-whiteWh').join(' ')
            
      }
      router.push(`/news/?category=${category}`)
      el.target.classList.value += ' bg-whiteWh'
      console.log('this' , el.target.classList)
    }
    return (
        <div className='flex flex-row flex-wrap justify-center'>
            {
                categories.map((category) => (
                    <div 
                      key = {category}
                      className='category flex p-2 m-2 hover:bg-whiteWh rounded-2xl cursor-pointer duration-300' 
                      onClick={(el:any)=> handleClick(el,category)}
                    >{category}</div>
                ))
            }
        </div>
    )
}

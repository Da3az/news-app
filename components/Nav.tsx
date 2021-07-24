import React , {useState,useEffect}from 'react'
import {useRouter} from 'next/router';

import {
  NewspaperIcon,
  MenuIcon,
  XIcon
} from '@heroicons/react/outline';

export default function Nav() {
    const router = useRouter();
    const [scroll,setScroll] = useState(false)
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);
    
    
    const changeNav = () =>{

        if(window.scrollY >= 150){
            setScroll(true)
        }else{
            setScroll(false)
        }
    }
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);
    const showButton = () => {
        if (window.innerWidth <= 960) {
        setButton(false);
        closeMobileMenu()
        } else {
        setButton(true);
        }
    };

    useEffect(() => {
        showButton();
    }, []);



    useEffect(() => {
        changeNav()
        window.addEventListener('resize', showButton);
        window.addEventListener("scroll",changeNav)
    },[])

    // .nav-menu {
    //     display: flex;
    //     flex-direction: column;
    //     width: 100%;
    //     height: 90vh;
    //     position: absolute;
    //     top: 80px;
    //     left: -100%;
    //     opacity: 1;
    //     transition: all 0.5s ease;
    //   }
    
    //   .nav-menu.active {
    //     background: #242222;
    //     left: 0;
    //     opacity: 1;
    //     transition: all 0.5s ease;
    //     z-index: 1;
    //   }

    return (
        <div className={`sticky top-0 z-10 h-nav flex justify-space p-5  text-white ${!scroll ? 'bg-black' :'bg-black'}`}>
            <div className = 'm-auto w-5/6 flex '>
                <div className='flex justify-space items-center p-2'>
                   <NewspaperIcon className='h-10 w-10 mr-1'/>JDID
                </div>    
                <ul className=
                 {
                    button ? 'ml-auto flex flex-column list-none p-2 items-center justify-center'
                           : click ? 'absolute flex flex-col bg-black top-full left-0 w-full  opacity-100 duration-500 z-1 text-white  t-0 '
                                   : `absolute flex flex-col w-full top-full -left-full duration-500 overflow-hidden`
                 }
                >
                    <li 
                        className={`border-0 text-xl h-50 m-20 mt-0 mb-0 hover:text-yellow cursor-pointer duration-500 ${ click && 'w-full pt-10 pb-10 ml-0 justify-center text-center border-2 border-white border-l-0 border-t-4 hover:bg-blackWh'}`}
                        onClick = {() => {closeMobileMenu();router.push('/')}}
                    >Home</li>
                    <li 
                        className={`border-0 text-xl h-50 m-20 mt-0 mb-0 hover:text-yellow cursor-pointer duration-500 ${ click && 'w-full pt-10 pb-10 ml-0 justify-center text-center border-2 border-white border-l-0 border-b-4 hover:bg-blackWh'}`}
                        onClick = {() => {closeMobileMenu();router.push('/news')}}
                    >News</li>
                </ul>
                
            </div>
            <div className={`ml-auto flex ${button && 'hidden'}`} onClick={handleClick}>
                    {!click ? <MenuIcon className='w-10' />
                           : <XIcon className='w-10'/> 
                    } 
            </div>
        </div>
    )
}

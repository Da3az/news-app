import styles from '../styles/Home.module.css'
import HeroSection from '../components/HeroSection'
import { GetServerSideProps } from 'next'
import call from '../utils/requests';
import HeadLines from '../components/HeadLines'


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




// interface IArticle{
//   id:number|string,
//   section:string,
//   title:string,
//   abstract:string,
//   url:string,
//   urlToImage:string
// }


interface IArticles{
  status:string,
  totalResults:number,
  articles:Array<IArticle>
}

export default function Home({results}:{results:Array<IArticle>}) {
  return (
    <div className={styles.container}>
      <HeroSection></HeroSection>
      <HeadLines articles ={results}></HeadLines> 
    </div>
  )
}

// export const getServerSideProps: GetServerSideProps = async (context) => {
//   const fetchName = context.query.genre?.toString()
//   let props = await queryCall()
//   console.log('props ====> ' ,props)
//      // console.log('results ====>',request)    
//     return {
//       props
//     }
      
// }

export const getServerSideProps: GetServerSideProps = async (context) => {
  const props = await call()
    return {
      props
    }
      
}
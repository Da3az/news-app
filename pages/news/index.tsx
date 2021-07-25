import React from 'react'
import NewsNav from '../../components/NewsNav'
import NewsHeadLines from '../../components/NewsHeadLines';
import { GetServerSideProps } from 'next'
import call from '../../utils/requests';

// interface IArticle{
//   id:number|string,
//   name:string,
//   title:string,
//   description:string,
//   url:string,
//   urlToImage:string
// }

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

interface IIndex{
  query:string,
  props:{[index:string]:Array<IArticle>}
} 

export default function index({query,props}:IIndex) {
    return (
        <div >
          <NewsNav query={query}></NewsNav>
          <NewsHeadLines articles = {props.results}></NewsHeadLines>
        </div>
    )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
    const fetchName = context.query.category?.toString() ? context.query.category?.toString() : 'viewed/7'
    const props = await call(fetchName)
      return {
        props:{
           props,
           query : fetchName
        }
      }
        
  }
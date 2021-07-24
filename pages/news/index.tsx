import React from 'react'
import NewsNav from '../../components/NewsNav'
import NewsHeadLines from '../../components/NewsHeadLines';
import { GetServerSideProps } from 'next'
import call from '../../utils/requests';

interface IArticle{
  id:number|string,
  name:string,
  title:string,
  description:string,
  url:string,
  urlToImage:string
}

export default function index({articles}:{articles:Array<IArticle>}) {
    return (
        <div >
          <NewsNav></NewsNav>
          <NewsHeadLines articles = {articles}></NewsHeadLines>
        </div>
    )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
    const fetchName = context.query.category?.toString() 
    const props = await call(fetchName)
      return {
        props
      }
        
  }
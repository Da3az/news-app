
const API_KEY =process.env.API_KEY
import { ApolloClient, InMemoryCache, gql } from '@apollo/client';



const queryCall = async (category:string|undefined=undefined) => {
    let uri:string;
    !category ?  uri = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`
              :  uri = `https://newsapi.org/v2/top-headlines&category=${category}?country=us&apiKey=${API_KEY}`
   
    console.log(uri)
 
    const client = new ApolloClient({
        uri,
        cache: new InMemoryCache(),
      });
      
    const { data } = await client.query({
        query: gql`
        query GetArticle {
            articles(limit:10) {
                title
                description
                url
                urlToImage
            }
        }
        `
    });
    
    return data
 
}




export default queryCall

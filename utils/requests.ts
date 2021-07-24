const API_KEY =process.env.API_KEY

const call = async (category:string|undefined=undefined) => {
    let uri:string;

    !category ?  uri = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`
              :  uri = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${API_KEY}`

    const data = await fetch(
        uri
    ).then(res => res.json())

    return data
}

export default call
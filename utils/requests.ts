const API_KEY =process.env.API_KEY

// const call = async (category:string|undefined=undefined) => {
//     let uri:string;

//     !category ?  uri = `https://newsapi.org/v2/top-headlines?sources=politico&apiKey=${API_KEY}`
//               :  uri = `https://newsapi.org/v2/top-headlines?sources=${category}&apiKey=${API_KEY}`

//     const data = await fetch(
//         uri
//     ).then(res => res.json())

//     return data
// }
const call = async (category:string|undefined=undefined) => {
    const data = await fetch
    (
     `https://api.nytimes.com/svc/mostpopular/v2/${category ? category : 'viewed/7'}.json?api-key=${API_KEY}`
    )
    .then(response => {
        return response.json()
    })
    .catch(err => {
        console.error(err);
    });


    return data

}
export default call
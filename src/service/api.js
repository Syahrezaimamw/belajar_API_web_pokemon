import axios from 'axios'

// const endpoint='https://pokeapi.co/api/v2/pokemon'
// export const getApi=async()=>{
//  const {data}= await axios.get(endpoint)
//  console.log(data)
//  return data
// }

export const dataPokemon =async(param)=>{
    return await axios.get(`https://pokeapi.co/api/v2/pokemon?offset=${param}&limit=20`)
    .then((a)=>
    {
        console.log(a.data.results)
       return a.data.results
    }
    ).catch(a=>console.log('asaas'))
    
}
// export const nextPage =async()=>{
//     const next=await getApi()
//     console.log(next.next)
//     return next.next
    
// }

// export const previousPage =async()=>{
//     const previous=await getApi()
//     console.log(previous.previous)
//     return previous.previous

// }
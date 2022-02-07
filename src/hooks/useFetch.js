import { useEffect, useState } from "react"
export const useFetch=(url)=>{
  const [state, setState]  = useState({
      data:[],
      loading:true
  });
  useEffect(()=>{
    fetch(url)
    .then(resp => resp.json())
    .then(({results}) =>{
      setState({
        data: results,
        loading:false
      })
      
    })
    
  },[url])
 
  
  return state;
}

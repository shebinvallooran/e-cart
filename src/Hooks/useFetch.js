import { useEffect,useState } from "react";
const useFetch = (url)=>{
    const [data,setData]= useState(null)
    useEffect(()=>{
        fetch(url).then(result=>{
            result.json().then(res=>{
                setData(res.products)
            })
        })
    },[url])
    return data

}

export default useFetch
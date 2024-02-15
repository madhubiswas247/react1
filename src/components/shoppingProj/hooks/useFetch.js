import React, { useEffect, useState, useRef } from 'react'

const useFetch = (url, _body) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const body = useRef(_body);  //reference created with initial value, since object/array address keeps on changing , 
    //so function keeps on loading without useref (print body without by commenting this line)
    //for function -> usecallback
    //for object -> useRef
    //state,string -> work fine without anything else
    useEffect(()=>{
        
        const fetchData = async ()=> { 
           setLoading(true);
           try {
            const response = await fetch(url);
            if(!response.ok) {
                throw new Error(response.statusText);
            }
            const result = await response.json();
            setLoading(false);
            setData(result) 
            setError("");
           } catch(error) {
             setLoading(false);
             setError(error.message)
           }
          
        }
        fetchData();
    },[url, body])
  return {data, loading, error}
}

export default useFetch
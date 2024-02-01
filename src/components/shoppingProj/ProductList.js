import React, { useCallback, useEffect, useState } from 'react'

const ProductList = () => {
    const [products, setProducts] = useState([]);
    const [url, setUrl] = useState("http://localhost:8000/products")

    const fetchP = async () => {
        await fetch(url).then(res=>res.json())
        .then(data=>setProducts(data));
    }

    const fetchProducts = useCallback(async () => {  //we need usecallback when our function code is outside our useeffect
        const res = await fetch(url);
        const data = await res.json();
        setProducts(data);
    },[url]);

     useEffect(()=>{       
        fetchProducts();
    },[fetchProducts])

    // useEffect(()=>{       
    //     fetchP()
    // },[url])  //warning React Hook useEffect has a missing dependency: 'fetchP' 
    // because function will be on different address so we need to use useCallBack as fetchProducts

    // useEffect(()=>{       
    //      fetch(url).then(res=>res.json())
    //     .then(data=>setProducts(data));
    // },[url]) //everytime url is updated by the button, the lines within useEffect will be executed
   
  return (
    <section>
        <h1>ProductList</h1>
       <button onClick={()=>setUrl("http://localhost:8000/products")}>All</button>
       <button onClick={()=>setUrl("http://localhost:8000/products?instock=1")}>In Stock</button>
        {products.map((prod=>{
            return (
                <div className='card' key={prod.id}>
                    <p className='id'> {prod.id}</p>
                    <p className='name'>{prod.name}</p>
                    <p className='info'>
                        <span>Rs.{prod.price}</span>
                        <span className={prod.instock? " inStock" : "unavailable"}>{prod.instock? " In Stock" : " Out of Stock"}</span>
                    </p>
                    
                </div>
            )
        }))}
      
    </section>

  )
}

export default ProductList
import React, { useCallback, useEffect, useState } from 'react'
import useFetch from './hooks/useFetch';

const ProductListWithUseFetch = () => {
   // const [products, setProducts] = useState([]);
    const [url, setUrl] = useState("http://localhost:8000/products");
    const {data: products, loading, error} = useFetch(url, {content: "ABC"});
   
  return (
    <section>
        <h1>ProductList</h1>
       <button onClick={()=>setUrl("http://localhost:8000/products")}>All</button>
       <button onClick={()=>setUrl("http://localhost:8000/products?instock=1")}>In Stock</button>
       {loading && <p>Loading........</p>}
       {error && <p>{error}</p>}

        {products && products.map((prod=>{
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

export default ProductListWithUseFetch
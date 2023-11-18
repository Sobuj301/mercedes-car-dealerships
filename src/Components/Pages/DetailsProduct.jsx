import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Product from "../Product";



const DetailsProduct = () => {
    const [products,setProducts] = useState()
    console.log(products)

    useEffect(()=>{
        fetch('http://localhost:5000/brands')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])

     

    return (
        <div>
            {
                products?.map(product =><Product key={product._id}product={product} ></Product> )
            }
        </div>
    );
};

export default DetailsProduct;
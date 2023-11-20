import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Swal from "sweetalert2";



const DetailsProduct = () => {
    const [products, setProducts] = useState()
    console.log(products)
    const { id } = useParams()
    console.log(id)
    useEffect(() => {
        fetch(`https://server-side-kappa-five.vercel.app/brand/${id}`)
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    const handleCart = () =>{
        fetch('https://server-side-kappa-five.vercel.app/carts',{
            method:"POST",
            headers:{
                "content-type":"application/json"
            },
            body:JSON.stringify(products)
        })
        .then(res =>res.json())
        .then(data => {
            console.log(data)
            if(data.insertedId){
                Swal.fire({
                    position: "top",
                    icon: "success",
                    title: "Your product added",
                    showConfirmButton: false,
                    timer: 1500
                  });
            }
        })
    }

    return (
        <div className="max-w-6xl m-auto mb-14 mt-16">
            <div className="card card-side bg-base-100 shadow-xl">
            <figure><img className="h-96 " src={products?.photo}alt="Movie" /></figure>
            <div className="card-body">
                <h2 className="card-title text-2xl">{products?.name}</h2>
                <p>{products?.details}</p>
                <div className="card-actions justify-end">
                       <button onClick={handleCart} className="btn btn-primary">add to cart</button>
                </div>
            </div>
        </div>
        </div>
    );
};

export default DetailsProduct;
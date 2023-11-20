import { useState } from "react";
import Swal from "sweetalert2";


const Cart = ({cart ,carts,setCarts}) => {
    const {_id,name,brand,price,details,rating,photo} = cart;
   
    
    

    const handleDelete = id => {
        console.log(id)
        fetch(`https://server-side-kappa-five.vercel.app/carts/${id}`,{
            method:"DELETE",
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.deletedCount > 0 ){
                Swal.fire({
                    position: "top",
                    icon: "success",
                    title: "Your cart has been deleted",
                    showConfirmButton: false,
                    timer: 1500
                  });
            }
            const remaining = carts?.filter(cart => cart._id !== id);
            setCarts(remaining)
        })
    }
    return (
        <div className="card card-compact  bg-base-100 shadow-xl">
        <figure><img className="" src={photo} alt="Shoes" /></figure>
        <div className="card-body">
            <h2 className="card-title">{name}</h2>
            <p>{details}</p>
            <div className="card-actions justify-end">
            <button onClick={()=>handleDelete(_id)} className="btn btn-primary">Delete</button> 
            </div>
        </div>
    </div>
    );
};

export default Cart;
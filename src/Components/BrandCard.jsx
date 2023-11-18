// import React from 'react';
// import slider_1 from "../assets/BMW-1.jpg"
// import slider_2 from "../assets/BMW-2.jpg"
// import slider_3 from "../assets/BMW-3.jpg"

import { Link } from "react-router-dom";



const BrandCard = ({ newBrand}) => {
    const {_id,name,brand,price,details,rating,photo} = newBrand;

    const handleDetails = (id) => {
        console.log(id)
        fetch("")
    }
    return (
        <div>

            <div className="card bg-base-100 shadow-xl">
                <figure><img className="h-96" src={photo} alt="Shoes" /></figure>
                <div className="card-body">
                <div className="text-2xl font-medium">{name}</div>
                    <div className="flex">
                        <h2 className="text-xl font-normal"> 
                           {brand}
                        </h2>
                        <p className="text-end text-xl font-normal">Price: {price}</p>
                    </div>
                    <div className="card-actions justify-between mt-6">
                        
                       
                        <Link to={`/details/${_id}`}>
                        <button className="btn btn-primary">Details</button>
                        </Link>
                        <button className="btn btn-warning">Update</button>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BrandCard;
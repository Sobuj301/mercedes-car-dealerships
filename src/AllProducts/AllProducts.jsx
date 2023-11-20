import React, { useEffect, useState } from 'react';

const AllProducts = () => {
    const [products, setProducts] = useState()

    useEffect(() => {
        fetch('https://server-side-kappa-five.vercel.app/brands')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return (
        <div>
            <h2 className='text-3xl font-bold mt-7'>
                Explore Our Product
            </h2>
            <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4'>
               
            {
                products?.slice(0,12).map(product => <div key={product._id}>

                    <div className="card  bg-base-100 shadow-xl">
                        <figure className="px-10 pt-10">
                            <img  src={product.photo} alt="Shoes" className="rounded-xl h-44" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">{product.name}</h2>
                            <p>{product.details}</p>
                            <div className="card-actions">
                                <button className="btn btn-primary">View Details</button>
                            </div>
                        </div>
                    </div>

                </div>)
            }
            </div>
        </div>
    );
};

export default AllProducts;
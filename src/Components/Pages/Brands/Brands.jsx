import { useEffect, useState } from "react";
import Brand from "./Brand";


const Brands = () => {
 const [brands,setBrands] = useState()


 useEffect(()=>{
    fetch('brands.json')
    .then(res =>res.json())
    .then(data => setBrands(data))
 },[])
    return (
        <div>
            <h2 className="text-3xl font-bold mb-6">Top Brands</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
            {
                brands?.map(brand => <Brand key={brand.id} brand={brand}></Brand>)
            }
            </div>
        </div>
    );
};

export default Brands;
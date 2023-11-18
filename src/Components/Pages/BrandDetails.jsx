import { useLoaderData } from "react-router-dom";
import BrandCard from "../BrandCard";

const BrandDetails = () => {

    const brands = useLoaderData()
    console.log(brands)
    return (
        <div>
            <h2>{brands.length}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {
                brands?.map(newBrand => <BrandCard key={newBrand._id} newBrand={newBrand}></BrandCard>)
            }
          </div>
        </div>
        
    );
};

export default BrandDetails;
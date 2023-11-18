import { useLoaderData } from "react-router-dom";
import BrandCard from "../BrandCard";
import slider_1 from "../../assets/BMW-1.jpg";
import slider_2 from "../../assets/BMW-2.jpg";
import slider_3 from "../../assets/BMW-3.jpg";

const BrandDetails = () => {

  const brands = useLoaderData()
  console.log(brands)
  return (
    <div>
      <div className="carousel w-full mt-12">
        <div id="slide1" className="carousel-item relative w-full">
          <img src={slider_1} className="w-full h-2/3" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className="btn btn-circle">❮</a>
            <a href="#slide2" className="btn btn-circle">❯</a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img src={slider_2} className="w-full h-2/3" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">❮</a>
            <a href="#slide3" className="btn btn-circle">❯</a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img src={slider_3} className="w-full h-2/3" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">❮</a>
            <a href="#slide4" className="btn btn-circle">❯</a>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {
          brands?.map(newBrand => <BrandCard key={newBrand._id} newBrand={newBrand}></BrandCard>)
        }
      </div>
    </div>

  );
};

export default BrandDetails;
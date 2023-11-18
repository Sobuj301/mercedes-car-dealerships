
import { Link } from 'react-router-dom';

const Brand = ({ brand }) => {

    const { brand_name, img } = brand
    return (
        <div>
            <Link to={`/brandDetails/${brand_name}`}>
                <div className="card  bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={img} alt="Shoes" className="rounded-xl h-44" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">{brand_name}</h2>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default Brand;
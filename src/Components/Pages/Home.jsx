import AllProducts from "../../AllProducts/AllProducts";
import Banner from "../../Banner/Banner";
import Feedback from "../Feedback";
import Brands from "./Brands/Brands";

const Home = () => {
    return (
        <div className="space-y-8">
            <Banner></Banner>
            <Brands></Brands>
            <AllProducts></AllProducts>
            <Feedback></Feedback>
        </div>
    );
};

export default Home;
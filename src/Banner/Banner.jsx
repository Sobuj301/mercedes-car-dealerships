import banner from "../assets/banner.jpg"

const Banner = () => {
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={banner} className="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-3xl font-bold">  Explore the Mercedes-Benz Experience!</h1>
                        <p className="py-6">Experience the epitome of automotive luxury with Mercedes-Benz. Unleash the power of precision engineering and indulge in a driving experience like no other.</p>
                        <input className="p-5 border w-1/2 rounded-2xl" type="text" name=""placeholder="Enter your dream model" id="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
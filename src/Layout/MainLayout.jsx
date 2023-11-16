import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

const MainLayout = () => {
    return (
        <div>
            <div className="max-w-7xl m-auto shadow-xl p-6 mb-3">
                <Navbar></Navbar>
            </div>
            <div className="max-w-7xl m-auto">
                <Outlet></Outlet>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default MainLayout;
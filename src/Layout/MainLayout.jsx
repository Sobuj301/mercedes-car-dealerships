import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";

const MainLayout = () => {
    return (
        <div>
           <div className="max-w-7xl m-auto">
              <Navbar></Navbar>
           </div>
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayout;
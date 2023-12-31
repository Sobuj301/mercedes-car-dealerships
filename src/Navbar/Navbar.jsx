import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo.avif"
import { useContext } from "react";
import { AuthContext } from "../Components/Provider/AuthProvider";
import Swal from "sweetalert2";

const Navbar = () => {
    const { users, logout } = useContext(AuthContext)


    const links = <>
        <li><NavLink to="/"> Home </NavLink></li>
        <li><NavLink to="/addProduct"> Add Product </NavLink></li>
        <li><NavLink to="/myCart"> My Cart </NavLink></li>




    </>


    const handleLogout = () => {
        logout()
            .then(result => {
                Swal.fire({
                    position: "top",
                    icon: "success",
                    title: "Logout successfully",
                    showConfirmButton: false,
                    timer: 1500
                });
            })
            .catch(err => {
                console.log(err.message)
            })
    }
    return (
        <div className="navbar bg-base-100 ">
            <div className="navbar-start ">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden ">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box space-y-4 ">

                        {links}
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl"><img className="w-28 h-10 rounded-2xl" src={logo} alt="" /></a>
            </div>
            <div className="navbar-center  hidden lg:flex">
                <ul className="menu menu-horizontal px-1 gap-1">

                    {links}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    users ? <div>
                        <p>{users.email}</p>
                        <button onClick={handleLogout}>Logout</button>
                    </div>
                        :
                        <Link to="/login"><button>Login</button></Link>
                }
            </div>
        </div>
    );
};

export default Navbar;
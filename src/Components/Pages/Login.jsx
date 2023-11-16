import { useContext, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";

const Login = () => {
const [error,setError] = useState(null)
const {userLogin,googleLogin} = useContext(AuthContext)
const navigate = useNavigate()


const handleLogin = event =>{
    event.preventDefault()
    const form = event.target;
    const email = event.target.email.value;
    const password = event.target.password.value;

    console.log(email,password)
    userLogin(email,password)
    .then(result => {
    const user = result.user;
    console.log(user)
    Swal.fire({
        position: "top",
        icon: "success",
        title: "Login Successful",
        showConfirmButton: false,
        timer: 1500
      });
    setError()
    navigate('/')
    
    })
    .catch(err => {
        console.log(err.message)
        setError(err.message)
    })
    form.reset()
}


const handleGoogleLogin = () => {
      googleLogin()
      .then(result => {
        console.log(result.user)
        Swal.fire({
            position: "top",
            icon: "success",
            title: "Login Successful",
            showConfirmButton: false,
            timer: 1500
          });
      })
      .catch(err =>{
        console.log(err.message)
      })
}

    return (
        <div className="max-w-4xl m-auto">
        
            <h2 className="text-5xl font-semibold">Please Login</h2>
            <p className="text-red-300 text-2xl mt-5">{error}</p>
            <form onSubmit={handleLogin} className="card-body mb-10 w-2/4">
            <div className="form-control">
                <label className="label">
                    <span className="label-text">Email</span>
                </label>
                <input type="email" placeholder="email"name="email" className="input input-bordered " required />
            </div>
            <div className="form-control">
                <label className="label">
                    <span className="label-text">Password</span>
                </label>
                <input type="password" placeholder="password"name="password" className="input input-bordered " required />
                <label className="label">
                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
            </div>
            <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
            </div>
            <h2 className="mt-5">New here? Please <Link className="text-blue-500 underline" to="/register">Register</Link></h2>
        </form>

        <button onClick={handleGoogleLogin} className="btn btn-neutral mb-10 w-1/3">google</button>
        
        </div>
    );
};

export default Login;
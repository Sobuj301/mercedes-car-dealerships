import { useContext, useState,} from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "./Provider/AuthProvider";
import Swal from "sweetalert2";

const Register = () => {
    const [error,setError] =useState(null)
    const {createUser} = useContext(AuthContext)

     const handleRegister = event => {
        event.preventDefault()
        const form = event.target;
        const email = event.target.email.value;
        const password = event.target.password.value;
        console.log(email,password)
        createUser(email,password)
        .then(result =>{
           const user = result.user;
           console.log(user)
           Swal.fire({
            position: "top",
            icon: "success",
            title: "Your Registration Done",
            showConfirmButton: false,
            timer: 1500
          });
          setError()
          
        })
        .catch(error => {
            console.log(error.message)
            setError(error.message)
            
        })
        form.reset()
     }

    return (
        <div className="max-w-4xl m-auto">
            <h2 className="text-5xl font-semibold">Please Register</h2>
            <p className="text-2xl text-red-400 mt-5">{error}</p>
            <form onSubmit={handleRegister} className="card-body mb-10 w-2/4">
            <div className="form-control">
                <label className="label">
                    <span className="label-text">Name</span>
                </label>
                <input type="text" placeholder="Name"name="name" className="input input-bordered " />
            </div>
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
                <button className="btn btn-primary">Register</button>
            </div>
            <h2 className="mt-5">Already have register? Please <Link className="text-blue-500 underline" to="/login">Login</Link></h2>
        </form>
        
        </div>
    );
};

export default Register;
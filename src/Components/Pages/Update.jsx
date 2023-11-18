
import { useLoaderData} from 'react-router-dom';
import Swal from 'sweetalert2';

const Update = () => {

   const product = useLoaderData()
   console.log(product)

    const handleUpdateProduct = event =>{
        event.preventDefault()
        const form = event.target;
        const name = event.target.name.value;
        const brand = event.target.brand.value;
        const price = event.target.price.value;
        const details = event.target.details.value;
        const rating = event.target.rating.value;
        const photo = event.target.photo.value;

        const updateProduct = {name,brand,price,details,rating,photo}

        console.log(updateProduct)

        fetch(`http://localhost:5000/brand/${product._id}`,{
            method:"PUT",
            headers:{
                "content-type":"application/json"
            },
            body:JSON.stringify(updateProduct)
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data)
           if(data.modifiedCount > 0){
            Swal.fire({
                position: "top",
                icon: "success",
                title: "Your product has been updated",
                showConfirmButton: false,
                timer: 1500
              });
           }
        } )

    }
    return (
        <div>
           <h2 className='text-3xl font-bold'>Update your information</h2>
           <form onSubmit={handleUpdateProduct} className="card-body">
                <div className="flex gap-4">
                    <div className="form-control w-1/2">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" placeholder="name" name="name"defaultValue={product?.name} className="input input-bordered w-full" />
                    </div>
                    <div className="form-control w-1/2">
                        <label className="label">
                            <span className="label-text">Brand Name</span>
                        </label>
                        <input type="text" placeholder="Brand Name" name="brand"defaultValue={product?.brand} className="input input-bordered w-full" />
                    </div>
                </div>
                <div className="flex gap-4">
                    <div className="form-control w-1/2">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <input type="text" placeholder="Price" name="price"defaultValue={product?.price} className="input input-bordered w-full" />
                    </div>
                    <div className="form-control w-1/2">
                        <label className="label">
                            <span className="label-text">Details</span>
                        </label>
                        <input type="text" placeholder="Details" name="details"defaultValue={product?.details} className="input input-bordered w-full" />
                    </div>
                </div>
                <div className="flex gap-4">
                    <div className="form-control w-1/2">
                        <label className="label">
                            <span className="label-text">Rating</span>
                        </label>
                        <input type="text" placeholder="Rating" name="rating"defaultValue={product?.rating} className="input input-bordered w-full" />
                    </div>
                    <div className="form-control w-1/2 mb-5">
                        <label className="label">
                            <span className="label-text">Photo</span>
                        </label>
                        <input type="text" placeholder="Photo url" name="photo"defaultValue={product?.photo} className="input input-bordered w-full" />
                    </div>
                </div>
                <input className="btn btn-neutral " type="submit" value="Update product" />

            </form>
        </div>
    );
};

export default Update;
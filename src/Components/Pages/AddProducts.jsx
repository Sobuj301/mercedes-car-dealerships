

const AddProducts = () => {


    const handleAddProduct = event =>{
        event.preventDefault()
        const form = event.target;
        const name = event.target.name.value;
        const brand = event.target.brand.value;
        const price = event.target.price.value;
        const details = event.target.details.value;
        const rating = event.target.rating.value;
        const photo = event.target.photo.value;

        const addProduct = {name,brand,price,details,rating,photo}

        console.log(addProduct)

        fetch('https://server-side-kappa-five.vercel.app/brands',{
            method:"POST",
            headers:{
                "content-type":"application/json"
            },
            body:JSON.stringify(addProduct)
        })
        .then(res => res.json())
        .then(data => console.log(data))

    }
    return (
        <div className="max-w-5xl m-auto">
            <h2 className="text-3xl font-semibold">Add you product !!</h2>
            <form onSubmit={handleAddProduct} className="card-body">
                <div className="flex gap-4">
                    <div className="form-control w-1/2">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" placeholder="name" name="name" className="input input-bordered w-full" />
                    </div>
                    <div className="form-control w-1/2">
                        <label className="label">
                            <span className="label-text">Brand Name</span>
                        </label>
                        
                        <input  type="text" placeholder="Brand Name" name="brand"defaultValue={menu} className="input input-bordered w-full" />
                    </div>
                </div>
                <div className="flex gap-4">
                    <div className="form-control w-1/2">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <input type="text" placeholder="Price" name="price" className="input input-bordered w-full" />
                    </div>
                    <div className="form-control w-1/2">
                        <label className="label">
                            <span className="label-text">Details</span>
                        </label>
                        <input type="text" placeholder="Details" name="details" className="input input-bordered w-full" />
                    </div>
                </div>
                <div className="flex gap-4">
                    <div className="form-control w-1/2">
                        <label className="label">
                            <span className="label-text">Rating</span>
                        </label>
                        <input type="text" placeholder="Rating" name="rating" className="input input-bordered w-full" />
                    </div>
                    <div className="form-control w-1/2 mb-5">
                        <label className="label">
                            <span className="label-text">Photo</span>
                        </label>
                        <input type="text" placeholder="Photo url" name="photo" className="input input-bordered w-full" />
                    </div>
                </div>
                <input className="btn btn-neutral " type="submit" value="add product" />

            </form>
        </div>
    );
};

export default AddProducts;
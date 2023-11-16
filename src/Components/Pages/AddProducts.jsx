

const AddProducts = () => {
    return (
        <div>
            <form className="card-body">
                <div className="flex gap-4">
                    <div className="form-control w-1/2">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="text" placeholder="name" className="input input-bordered w-full" />
                    </div>
                    <div className="form-control w-1/2">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="text" placeholder="name" className="input input-bordered w-full" />
                    </div>
                </div>
            </form>
        </div>
    );
};

export default AddProducts;
import { useEffect, useState } from "react";
import Cart from "../Cart";

const MyCards = () => {

    const [carts,setCarts] = useState()

    useEffect(() =>{
        fetch('http://localhost:5000/carts')
        .then(res =>res.json())
        .then(data => setCarts(data))
    },[])

    console.log(carts)



    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
           
            {
               carts?.map(cart => <Cart key={cart._id} cart={cart} carts={carts} setCarts={setCarts}></Cart>) 
            }
        </div>
    );
};

export default MyCards;
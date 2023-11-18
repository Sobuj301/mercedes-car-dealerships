import React, { useEffect, useState } from 'react';

const Feedback = () => {

    const [customers, setCustomers] = useState()

    useEffect(() => {
        fetch("feedback.json")
            .then(res => res.json())
            .then(data => setCustomers(data))
    }, [])
    return (
        <div>
            <h2 className='text-3xl font-bold mt-10'>Customers Feedback </h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8 mb-8'>
                {
                    customers?.map(customer => <div key={customer.customer_id}>

                        <div className="card  bg-slate-200 text-neutral-content">
                            <div className="card-body items-center text-center">
                                <h2 className="card-title text-black font-black">{customer.name}</h2>
                                <p className='text-black text-xs'>{customer.comment}</p>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Feedback;
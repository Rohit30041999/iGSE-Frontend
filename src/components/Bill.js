import { useEffect, useState } from "react";
import { useAuthContext } from "../hooks/useAuthContext";

const Bill = () => {

    const [ bill, setBill ] = useState('');
    const [ error, setError ] = useState('');
    const { customer } = useAuthContext(); 

    useEffect(() => {
        const fetchBill = async () => {
            const response = await fetch(`http://localhost:4000/api/igse/bills/${customer.customer_id}`);
            const json = await response.json();
            
            if(!response.ok) {
                setError(json.error);
            }

            if(response.ok) {
                setBill(json['bill']);
            }
        }

        if(customer) {
            fetchBill();
        }
    }, [customer]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if(!customer) return;

        const response = await fetch('http://localhost:4000/api/igse/bills/', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(customer)
        });
        
        const json = await response.json();

        if(!response.ok) {
            setError(json.error);
        }

        if(response.ok) {
            setBill(0);
            alert('Payment Recieved. Please Re-login to check your balance.');
        }
    }

    return (
        <form className="payBill" onSubmit={handleSubmit}>
            <h3>Bill Payment</h3>
            <h2>£{bill}</h2>
            <button>pay</button>
            {error && <div className="error">{error}</div>}
        </form>
    )
}

export default Bill;
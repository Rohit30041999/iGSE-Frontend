import { useState } from "react";
import { useAuthContext } from "../hooks/useAuthContext";

const TopUp = () => {

    const [evcCode, setEVCCode] = useState('');
    const [error, setError] = useState('');

    const { customer } = useAuthContext();

    const handleSubmit = async (e) => {
        e.preventDefault();

        if(!customer) {
            return;
        }

        const response = await fetch('http://localhost:4000/api/igse/topup/', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({ customer_id: customer.customer_id, evc_code: evcCode})
        });
        
        const json = await response.json();

        if(!response.ok) {
            setError(json.error);
        }

        if(response.ok) {
            alert("Top Up Succesful. Please Re-login to the page.");
        }
    }

    return (
        <form className="topUp" onSubmit={handleSubmit}>
            <h3>Top Up Energy Credit</h3>

            <label>EVC Code:</label>
            <input 
                type="text" 
                onChange={(e) => setEVCCode(e.target.value)} 
                value={evcCode}
            />

            <button>Top Up</button>
            {error && <div className="error">{error}</div>}
        </form>
    )
}

export default TopUp;
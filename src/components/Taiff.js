import { useState } from "react";
import { useAuthContext } from "../hooks/useAuthContext";

const Taiff = () => {

    const [taiffType, setTaiffType] = useState('');
    const [rate, setRate] = useState(0);
    const [error, setError] = useState('');

    const { customer } = useAuthContext(); 


    const handleSubmit = async (e) => {
        e.preventDefault();

        if(customer) {
           const response = await fetch('http://localhost:4000/api/igse/taiffs/89457', {
            method: 'PUT',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                taiff_type: taiffType,
                rate: rate
            })
          })
          const json = await response.json();

          if(!response.ok) {
            setError(json.error);
          }

          if(response.ok) {
            alert("Taiff has been changed successfully.")
          }
        }
    }

    return (
        <form className="taiff" onSubmit={handleSubmit}>
            <label>Taiff Type:</label>
            <select value={taiffType} onChange={(e) => setTaiffType(e.target.value)}>
                <option value="select">Select</option>
                <option value="electricity_day">Electricity Day Reading</option>
                <option value="electricity_night">Electricity Night Reading</option>
                <option value="gas">Gas Reading</option>
                <option value="standing_charge">Standing Charge</option>
            </select>

            <label>Rate:</label>
            <input 
                type="text" 
                onChange={(e) => setRate(e.target.value)} 
                value={rate}
            />

            <button>Change Taiff</button>
            {error && <div className="error">{error}</div>}
        </form>
    )
}

export default Taiff;
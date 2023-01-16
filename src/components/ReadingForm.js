import { useState } from "react"
import { useAuthContext } from "../hooks/useAuthContext";

const ReadingForm = () => {
    const [error, setError] = useState(null);
    const [submissionDate, setSubmissionDate] = useState('');
    const [electricityDay, setElectricityDay] = useState(0);
    const [electricityNight, setElectricityNight] = useState(0);
    const [gas, setGas] = useState(0);
    // const [status, setStatus] = useState('unpaid');

    const { customer } = useAuthContext();

    const handleSubmit = async (e) => {
        e.preventDefault();

        console.log(submissionDate);
        console.log(electricityDay);
        console.log(electricityNight);
        console.log(gas);

        if(customer) {
            const response = await fetch('http://localhost:4000/api/igse/readings', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({ 
                    submission_date: submissionDate, 
                    elec_readings_day: electricityDay, 
                    elet_reading_night: electricityNight, 
                    gas_reading: gas, 
                    status: "unpaid", 
                    customer_id: customer.customer_id 
                })
            });
            
            const json = await response.json();

            if(!response.ok) setError(json.error);

            if(response.ok) {
                alert('The Latest Energy Reading has beem Submitted Successfully.');
            }

        } else {
            setError('Must be logged In');
        }
    }

    return (
        <form className="reading" onSubmit={handleSubmit}>
            <h3 className="reading-form-title">New Reading</h3>
            <label>Submission Date:</label>
            <input 
                type="date" 
                onChange={(e) => setSubmissionDate(e.target.value)} 
                value={submissionDate}
            />

            <label>Electricity Day:</label>
            <input 
                type="text" 
                onChange={(e) => setElectricityDay(e.target.value)} 
                value={electricityDay}
            />

            <label>Electricity Night:</label>
            <input 
                type="text" 
                onChange={(e) => setElectricityNight(e.target.value)} 
                value={electricityNight}
            />

            <label>Gas:</label>
            <input 
                type="text" 
                onChange={(e) => setGas(e.target.value)} 
                value={gas}
            />

            <button>Submit</button>
            {error && <div className="error">{error}</div>}
        </form>
    );
}

export default ReadingForm;
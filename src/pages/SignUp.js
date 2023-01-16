import { useState } from "react";
import { useSignup } from "../hooks/useSignUp";

const SignUp = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [address, setAddress] = useState('');
    const [propertyType, setPropertyType] = useState('select');
    const [bedrooms, setBedrooms] = useState(0);
    const [evcCode, setEVCCode] = useState('');

    const { signup, error } = useSignup();


    const handleSubmit = async (e) => {
        e.preventDefault();

        console.log(email);
        console.log(password);
        console.log(address);
        console.log(propertyType);
        console.log(bedrooms);
        console.log(evcCode);

        await signup({ 
            customer_id: email,
            password: password,
            address: address,
            property_type: propertyType,
            bedroom_num: bedrooms,
            customer_type: "customer",
            evc_code: evcCode
        });
    }

    return (
        <form className="login" onSubmit={handleSubmit}>
            <h3> Sign Up </h3>

            <label>Customer ID:</label>
            <input 
                type="email" 
                onChange={(e) => setEmail(e.target.value)} 
                value={email}
            />

            <label>Password:</label>
            <input 
                type="password" 
                onChange={(e) => setPassword(e.target.value)} 
                value={password}
            />

            <label>Address:</label>
            <input 
                type="text" 
                onChange={(e) => setAddress(e.target.value)} 
                value={address}
            />

            <label>Property Type:</label>
            <select value={propertyType} onChange={(e) => setPropertyType(e.target.value)}>
                <option value="select">Select</option>
                <option value="detached">detached</option>
                <option value="semi-detached">Semi Detached</option>
                <option value="terraced">terraced</option>
                <option value="flat">flat</option>
                <option value="cottage">cottage</option>
                <option value="bungalow">bungalow</option>
                <option value="mansion">mansion</option>
            </select>

            <label>Bedrooms:</label>
            <input 
                type="text" 
                onChange={(e) => setBedrooms(e.target.value)} 
                value={bedrooms}
            />

            <label>EVC Code:</label>
            <input 
                type="text" 
                onChange={(e) => setEVCCode(e.target.value)} 
                value={evcCode}
            />

            <button>Sign Up</button>
            {error && <div className="error">{error}</div>}
        </form>
    )
}

export default SignUp;
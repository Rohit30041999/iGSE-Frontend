import { useState } from "react";
import { useLogin } from "../hooks/useLogin";

const Login = () => {
    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { login, error } = useLogin();

    const handleSubmit = (e) => {
        e.preventDefault();

        login(email, password);
    }

    return (
        <form className="login" onSubmit={handleSubmit}>
            <h3> Log In </h3>

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

            <button>Sign In</button>
            {error && <div className="error">{error}</div>}
        </form>
    )
}

export default Login;
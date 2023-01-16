import { Link } from "react-router-dom";
import { useLogout } from "../hooks/useLogout";
import { useAuthContext } from "../hooks/useAuthContext";

const Navbar = () => {
    const { logout } = useLogout()
    const { customer } = useAuthContext()
  
    const handleClick = () => {
      logout()
    }

    return (
        <header>
            <div className="navbar-container">
                <Link to='/'>
                    <h2>iGSE</h2>
                </Link>
                <nav>
                {customer && customer.customer_type === 'customer' && (
                    <div>
                        <span className="customer-name">{customer.customer_id.split('@')[0]}</span>
                        <span className="customer-balance">£{customer.energy_credit}</span>
                        {/* <button className="logout" onClick={handleClick}>Log out</button> */}
                        <Link className="logout" onClick={handleClick} to="/">Log out</Link>
                    </div>
                )}
                {customer && customer.customer_type === 'admin' && (
                    <div>
                        <span className="customer-name">{customer.customer_id.split('@')[0]} Admin</span>
                        {/* <button className="logout" onClick={handleClick}>Log out</button> */}
                        <Link className="logout" onClick={handleClick} to="/">Log out</Link>
                    </div>
                )}
                {!customer && (
                    <div>
                        <Link to="/login">Login</Link>
                        <Link to="/signup">Signup</Link>
                    </div>
                )}
                </nav>
            </div>
        </header>
    )
}

export default Navbar;
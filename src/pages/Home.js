import { useEffect, useState } from "react";
import ReadingForm from "../components/ReadingForm";
import { useAuthContext } from "../hooks/useAuthContext";
import ReadingDetails from "../components/ReadingDetails";
import TopUp from "../components/TopUp";
import Bill from "../components/Bill";
import Taiff from "../components/Taiff";

const Home = () => {

    const { customer } = useAuthContext();

    const [readings, setReadings] = useState([]);

    useEffect(() => {
        const fetchReadings = async () => {
            const response = await fetch(`http://localhost:4000/api/igse/readings/`);
            const json = await response.json();

            if(response.ok) {
                setReadings(json);
            }
        }

        if(customer && customer['customer_type'] === 'admin') {
            fetchReadings();
        }
    }, [customer])

    return (
        <div className="home">
            {!customer && 
                (<div className="home">
                    <h3>Great Shangri-La Energy</h3>
                    <p>The Valley of Shangri-La is experiencing an unprecedented energy crisis due to the recent disruption to gas supplies. As a result, the government launched a public consultation on how to help its residents manage their fuel bills and keep warm as it gets closer to its winter season. The residents of Shangri-La voted overwhelmingly to support the Energy Bills Support Scheme, and the creation of GSE (Great Shangri-La Energy), a publicly-own energy company committed to providing affordable and sustainable energy supplies to Shangri-La.</p>
                </div>)
            }
            {
                customer && customer.customer_type === "admin" &&
                (
                    <div className="customer-loggedin">
                        <div className="readings">
                            {readings && readings.map((reading) => ( 
                                <ReadingDetails key={reading._id} reading={reading} /> 
                            ))}
                        </div>
                        <div className="taiffs">
                            <Taiff />
                        </div>
                    </div>
                )
            }
            {
                customer && customer.customer_type === "customer" &&
                (
                    <div className="customer-loggedin">
                        <div className="reading-form">
                            <ReadingForm />
                        </div>
                        <div className="topUp">
                            <TopUp />
                        </div>
                        <div className="bill">
                            <Bill />
                        </div>
                    </div>
                )
            }
        </div>
    )
}

export default Home;
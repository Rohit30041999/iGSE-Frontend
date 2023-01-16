const ReadingDetails = ({ reading }) => {
    return (
        <div className="reading-details">
            <p><strong>Customer ID: </strong>{ reading.customer_id }</p>
            <p><strong>Submission Date: </strong>{ reading.submission_date }</p>
            <p><strong>Electricity Reading Day: </strong>{ reading.elec_readings_day }</p>
            <p><strong>Electricity Reading Night: </strong>{ reading.elet_reading_night }</p>
            <p><strong>Gas Reading: </strong>{ reading.gas_reading }</p>
            <p><strong>Status: </strong>{ reading.status }</p>
        </div>
    );
}

export default ReadingDetails;
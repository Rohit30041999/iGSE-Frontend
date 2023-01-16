import Table from 'react-bootstrap/Table';

const ReadingDetails = ({ readings }) => {
    return (
        <div className="reading-details">
            <Table stripped bordered hover>
                <thead>
                    <tr>
                        <th>Customer ID</th>
                        <th>Submission Date</th>
                        <th>Electricity Reading Day</th>
                        <th>Electricity Reading Night</th>
                        <th>Gas Reading</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {readings && readings.map((reading) => ( 
                        <tr key={reading._id}>
                            <td><p>{ reading.customer_id }</p></td>
                            <td><p>{ reading.submission_date }</p></td>
                            <td><p>{ reading.elec_readings_day }</p></td>
                            <td><p>{ reading.elet_reading_night }</p></td>
                            <td><p>{ reading.gas_reading }</p></td>
                            <td><p>{ reading.status }</p></td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    );
}

export default ReadingDetails;
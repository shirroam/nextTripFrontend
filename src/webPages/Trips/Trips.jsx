import React, { useState } from "react";
import CreateTripArea from "../../webComponents/CreateTripArea/CreateTripArea";
import './Trips.css';
import Trip from "../../webComponents/Trip/Trip";

function Trips() {
    const [trips, setTrips] = useState([]);

    function addTrip(trip) {
        setTrips((prevTrips) => {
            return [...prevTrips, {
                tripName: trip.tripName,
                startDate: trip.startDate,
                endDate: trip.endDate,
                destination: trip.destination,
                transport: trip.transport
            }]
        })
    }

    return <div className="Trips">
        <CreateTripArea onAdd={addTrip} />
        <div className="trips-container">
            {trips.map((trip, index) => (
                <Trip 
                key={index}
                id={index}
                tripName={trip.tripName} 
                startDate={trip.startDate}
                destination={trip.destination}
                />
            ))}
        </div>
    </div>
}

export default Trips;
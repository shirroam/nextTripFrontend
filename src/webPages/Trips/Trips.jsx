import React, { useState, useEffect } from "react";
import CreateTripArea from "../../webComponents/CreateTripArea/CreateTripArea";
import './Trips.css';
import Trip from "../../webComponents/Trip/Trip";

function Trips() {
    const [trips, setTrips] = useState([]);
    const [userId] = useState(1);

    const fetchTripsData = async () => {
        const baseUrl = "http://localhost:8080/trips";
        const allTripsByUserAPI = `${baseUrl}/getAllTrips?userId=${userId}`;
        try {
            const response = await fetch(allTripsByUserAPI); // Fetch trips data from API
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const tripsData = await response.json(); // Parse response as JSON
            
            setTrips(tripsData); // Update the state with trips data
        } catch (error) {
            console.error('Error fetching catalog data:', error);
        }
    };

    useEffect(() => {
        // Fetch the trips data on mount
        fetchTripsData();
    })

    // function addTrip(trip) {
    //     setTrips((prevTrips) => {
    //         return [...prevTrips, {
    //             tripName: trip.tripName,
    //             startDate: trip.startDate,
    //             endDate: trip.endDate,
    //             destination: trip.destination,
    //             transport: trip.transport
    //         }]
    //     })
    // }

    const addTrip = (trip) => {
        setTrips((prevTrips) => [
            ...prevTrips, 
            {
                name: trip.name,
                startDate: trip.startDate,
                endDate: trip.endDate,
                destination: trip.destination,
                transport: trip.transport
            }
        ]);
    };

    return <div className="Trips">
        <CreateTripArea onAdd={addTrip} />
        <div className="trips-container">
            {trips.map((trip, index) => (
                <Trip 
                key={index}
                id={index}
                name={trip.name} 
                startDate={trip.startDate}
                destination={trip.destination}
                />
            ))}
        </div>
    </div>
}

export default Trips;
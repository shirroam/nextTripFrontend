import React, { useState } from "react";
import './CreateTripArea.css';

function CreateTripArea(props) {
    const [trip, setTrip] = useState({
        tripName: "",
        startDate: "",
        endDate: "",
        destination: "",
        transport: ""
    })

    function handleChange(event) {
        const {name, value} = event.target;

        setTrip((prevTrip) => {
            if(name === "tripName") {
                return {
                    tripName: value,
                    startDate: prevTrip.startDate,
                    endDate: prevTrip.endDate,
                    destination: prevTrip.destination,
                    transport: prevTrip.transport
                }
            } else if(name === "startDate") {
                return {
                    tripName: prevTrip.tripName,
                    startDate: value,
                    endDate: prevTrip.endDate,
                    destination: prevTrip.destination,
                    transport: prevTrip.transport
                }
            } else if(name === "endDate") {
                return {
                    tripName: prevTrip.tripName,
                    startDate: prevTrip.startDate,
                    endDate: value,
                    destination: prevTrip.destination,
                    transport: prevTrip.transport
                }
            } else if(name === "destination") {
                return {
                    tripName: prevTrip.tripName,
                    startDate: prevTrip.startDate,
                    endDate: prevTrip.endDate,
                    destination: value,
                    transport: prevTrip.transport
                }
            } else {
                return {
                    tripName: prevTrip.tripName,
                    startDate: prevTrip.startDate,
                    endDate: prevTrip.endDate,
                    destination: prevTrip.destination,
                    transport: value
                }
            }
        })
    }

    function submitTrip(event) {
        props.onAdd(trip);
        event.preventDefault();
    }

    return <div className="create-box">
        <h2>Create a new Trip</h2>
        <form className="input-form">
            <input onChange={handleChange} name="tripName" className="input-field" placeholder="Trip Name" value={trip.tripName} />
            <input onChange={handleChange} name="startDate" className="input-field" placeholder="Start Date" value={trip.startDate} />
            <input onChange={handleChange} name="endDate" className="input-field" placeholder="End Date" value={trip.endDate} />
            <input onChange={handleChange} name="destination" className="input-field" placeholder="Destination" value={trip.destination} />
            <input onChange={handleChange} name="transport" className="input-field" placeholder="Transportation Mode" value={trip.transport}/>
        </form>
        <button onClick={submitTrip} className="add-trip-button">Add New Trip</button>
    </div>
}

export default CreateTripArea;
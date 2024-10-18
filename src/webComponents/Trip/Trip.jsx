import React from "react";
import './Trip.css'

function Trip(props) {
    return (
        <div className="trip-box">
            <h1 className="name">{props.tripName}</h1>
            <h2 className="location">{props.destination}</h2>
            <h2 className="date">{props.startDate}</h2>
        </div>
    )
}

export default Trip;
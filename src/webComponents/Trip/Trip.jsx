import React from "react";
import './Trip.css'

function Trip(props) {
    return (
        <div className="trip-box">
            <h1 className="name">{props.name}</h1>
            <div className="location-wrapper">
                <i className="fas fa-map-signs"></i>
                <h2 className="location">{props.destination}</h2>
            </div>
            <div className="date-wrapper">
                <i className="fas fa-calendar-alt"></i>
                <h2 className="date">{props.startDate}</h2>
            </div>
        </div>
    )
}

export default Trip;
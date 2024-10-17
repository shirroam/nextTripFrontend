import React from "react";
import './CreateTripArea.css';

function CreateTripArea() {
    return <div className="create-box">
        <h2>Create a new Trip</h2>
        <form className="input-form">
            <input className="input-field" placeholder="Trip Name" />
            <input className="input-field" placeholder="Start Date" />
            <input className="input-field" placeholder="End Date" />
            <input className="input-field" placeholder="Destination" />
            <input className="input-field" placeholder="Transportation Mode"/>
        </form>
        <button className="add-trip-button">Add New Trip</button>
    </div>
}

export default CreateTripArea;
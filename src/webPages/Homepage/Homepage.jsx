import React, { useState } from "react";
import './Homepage.css'

function Homepage() {

    const [activeTab, setActiveTab] = useState('visited');

    return <div className="homePage">
        <h1>HOMEPAGE</h1>
        {/* Tabs for Visited and Bucketlist */}
      <div className="tabs">
        <div
          className={`tab-item ${activeTab === 'visited' && 'active'}`}
          onClick={() => setActiveTab('visited')}
        >
          Visited
        </div>
        <div
          className={`tab-item ${activeTab === 'bucketlist' && 'active'}`}
          onClick={() => setActiveTab('bucketlist')}
        >
          Bucketlist
        </div>
      </div>
    </div>
}

export default Homepage;
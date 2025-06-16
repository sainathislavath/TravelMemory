import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { baseUrl } from "../../url";
import "./ExperienceDetails.css";

export default function ExperienceDetails() {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`${baseUrl}/api/trip/${id}`)
      .then((res) => setData(res.data))
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) {
    return (
      <div className="ed-spinner-container">
        <div className="ed-spinner" />
      </div>
    );
  }

  if (!data) {
    return (
      <div className="ed-no-data">
        <p>No experience found.</p>
      </div>
    );
  }

  return (
    <div className="ed-page">
      <h1 className="ed-title">{data.tripName}</h1>

      <div className="ed-hero">
        <img src={data.image} alt={data.tripName} className="ed-hero-img" />
      </div>

      <div className="ed-details-card">
        <div className="ed-detail">
          <span className="ed-label">Hotel Name</span>
          <span className="ed-value">{data.nameOfHotels}</span>
        </div>
        <div className="ed-detail">
          <span className="ed-label">Trip Type</span>
          <span className="ed-value">{data.tripType}</span>
        </div>
        <div className="ed-detail">
          <span className="ed-label">Start Date</span>
          <span className="ed-value">{data.startDateOfJourney}</span>
        </div>
        <div className="ed-detail">
          <span className="ed-label">End Date</span>
          <span className="ed-value">{data.endDateOfJourney}</span>
        </div>
        <div className="ed-detail ed-full-row">
          <span className="ed-label">Places Visited</span>
          <span className="ed-value">{data.placesVisited}</span>
        </div>
        <div className="ed-detail ed-full-row">
          <span className="ed-label">Total Cost (₹)</span>
          <span className="ed-value">{data.totalCost}</span>
        </div>
      </div>

      <div className="ed-experience">
        <h2>Your Experience</h2>
        <p>{data.experience}</p>
      </div>
    </div>
  );
}

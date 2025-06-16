import React, { useState } from "react";
import { baseUrl } from "../../url";
import axios from "axios";

export default function AddExperience() {
  const [loading, setLoading] = useState(false);
  const [formdata, setFormdata] = useState({
    tripName: "",
    startDateOfJourney: "",
    endDateOfJourney: "",
    nameOfHotels: "",
    placesVisited: "",
    totalCost: 0,
    experience: "",
    image: "",
    tripType: "",
    featured: false,
    shortDescription: "",
  });

  const submitForm = async () => {
    setLoading(true);
    try {
      await axios.post(`${baseUrl}/api/trip`, formdata);
      alert("Experience added successfully!");
    } catch (error) {
      console.error("Submission error:", error);
      alert("Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="d-flex vh-100 justify-content-center align-items-center bg-light">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="container py-5">
      <div className="shadow-lg p-4 rounded bg-white">
        <h2 className="text-center mb-4 text-primary fw-bold">
          Share Your Trip Experience
        </h2>

        <div className="mb-3">
          <label htmlFor="tripName" className="form-label fw-semibold">
            Trip Name
          </label>
          <input
            type="text"
            className="form-control"
            id="tripName"
            placeholder="Add your Trip Name"
            value={formdata.tripName}
            onChange={(e) =>
              setFormdata({ ...formdata, tripName: e.target.value })
            }
          />
        </div>

        <div className="mb-3 row g-3">
          <div className="col-md-6">
            <label className="form-label fw-semibold">Start Date</label>
            <input
              type="date"
              className="form-control"
              value={formdata.startDateOfJourney}
              onChange={(e) =>
                setFormdata({ ...formdata, startDateOfJourney: e.target.value })
              }
            />
          </div>
          <div className="col-md-6">
            <label className="form-label fw-semibold">End Date</label>
            <input
              type="date"
              className="form-control"
              value={formdata.endDateOfJourney}
              onChange={(e) =>
                setFormdata({ ...formdata, endDateOfJourney: e.target.value })
              }
            />
          </div>
        </div>

        <div className="mb-3">
          <label className="form-label fw-semibold">Name of Hotels</label>
          <input
            type="text"
            className="form-control"
            placeholder="Hotel names separated by comma"
            value={formdata.nameOfHotels}
            onChange={(e) =>
              setFormdata({ ...formdata, nameOfHotels: e.target.value })
            }
          />
        </div>

        <div className="row mb-3 g-3">
          <div className="col-md-6">
            <label className="form-label fw-semibold">Trip Type</label>
            <select
              className="form-select"
              value={formdata.tripType}
              onChange={(e) =>
                setFormdata({ ...formdata, tripType: e.target.value })
              }
            >
              <option value="">Select One</option>
              <option value="backpacking">Backpacking</option>
              <option value="leisure">Leisure</option>
              <option value="business">Business</option>
            </select>
          </div>
          <div className="col-md-6">
            <label className="form-label fw-semibold">Total Cost (₹)</label>
            <input
              type="number"
              className="form-control"
              placeholder="e.g. 35000"
              value={formdata.totalCost}
              onChange={(e) =>
                setFormdata({ ...formdata, totalCost: e.target.value })
              }
            />
          </div>
        </div>

        <div className="mb-3">
          <label className="form-label fw-semibold">Places Visited</label>
          <input
            type="text"
            className="form-control"
            placeholder="E.g. Delhi, Paris, Tokyo"
            value={formdata.placesVisited}
            onChange={(e) =>
              setFormdata({ ...formdata, placesVisited: e.target.value })
            }
          />
        </div>

        <div className="mb-3">
          <label className="form-label fw-semibold">Featured Trip?</label>
          <div className="form-check form-check-inline ms-2">
            <input
              className="form-check-input"
              type="radio"
              name="featured"
              value={true}
              id="featuredTrue"
              checked={formdata.featured === true}
              onChange={(e) =>
                setFormdata({
                  ...formdata,
                  featured: JSON.parse(e.target.value),
                })
              }
            />
            <label className="form-check-label" htmlFor="featuredTrue">
              Yes
            </label>
          </div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="featured"
              value={false}
              id="featuredFalse"
              checked={formdata.featured === false}
              onChange={(e) =>
                setFormdata({
                  ...formdata,
                  featured: JSON.parse(e.target.value),
                })
              }
            />
            <label className="form-check-label" htmlFor="featuredFalse">
              No
            </label>
          </div>
        </div>

        <div className="mb-3">
          <label className="form-label fw-semibold">Image Link</label>
          <input
            type="text"
            className="form-control"
            placeholder="https://example.com/image.jpg"
            value={formdata.image}
            onChange={(e) =>
              setFormdata({ ...formdata, image: e.target.value })
            }
          />
        </div>

        <div className="mb-3">
          <label className="form-label fw-semibold">Short Description</label>
          <textarea
            className="form-control"
            rows={2}
            placeholder="Give a catchy summary of your trip"
            value={formdata.shortDescription}
            onChange={(e) =>
              setFormdata({ ...formdata, shortDescription: e.target.value })
            }
          />
        </div>

        <div className="mb-3">
          <label className="form-label fw-semibold">Full Experience</label>
          <textarea
            className="form-control"
            rows={5}
            placeholder="Describe your full experience..."
            value={formdata.experience}
            onChange={(e) =>
              setFormdata({ ...formdata, experience: e.target.value })
            }
          />
        </div>

        <div className="text-center">
          <button
            className="btn btn-primary px-5 py-2 fw-semibold shadow"
            onClick={submitForm}
          >
            Submit Experience
          </button>
        </div>
      </div>
    </div>
  );
}

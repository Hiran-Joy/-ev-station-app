import axios from "axios";
import React, { useState } from "react";

const AddEv = () => {
  const [input, changeInput] = useState({
    bookingId: "",
    ownerName: "",
    email: "",
    phone: "",
    vehicleRegistrationNumber: "",
    vehicleBrand: "",
    vehicleModel: "",
    batteryCapacity: "",
    connectorType: "",
    chargingDate: "",
    timeSlot: "",
    estimatedUnits: "",
    chargingBayNumber: "",
  });

  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const inputHandler = (e) => {
    changeInput({ ...input, [e.target.name]: e.target.value });
  };

  const readValues = () => {
    axios
      .post("http://localhost:3000/add_booking", input)
      .then(() => {
        setMessage("Booking added successfully");
        setError("");

        changeInput({
          bookingId: "",
          ownerName: "",
          email: "",
          phone: "",
          vehicleRegistrationNumber: "",
          vehicleBrand: "",
          vehicleModel: "",
          batteryCapacity: "",
          connectorType: "",
          chargingDate: "",
          timeSlot: "",
          estimatedUnits: "",
          chargingBayNumber: "",
        });
      })
      .catch((err) => {
        setMessage("");

        if (err.response) {
          setError(err.response.data.message);
        } else {
          setError("Error");
        }
      });
  };

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-12">
          <h3 className="mb-4">EV Charging Slot Booking</h3>

          {message && <div className="alert alert-success">{message}</div>}
          {error && <div className="alert alert-danger">{error}</div>}

          <div className="row g-3">
            <div className="col-md-6">
              <label className="form-label">Booking ID</label>
              <input
                type="text"
                className="form-control"
                name="bookingId"
                value={input.bookingId}
                onChange={inputHandler}
              />
            </div>

            <div className="col-md-6">
              <label className="form-label">Owner Name</label>
              <input
                type="text"
                className="form-control"
                name="ownerName"
                value={input.ownerName}
                onChange={inputHandler}
              />
            </div>

            <div className="col-md-6">
              <label className="form-label">Email</label>
              <input
                type="email"
                className="form-control"
                name="email"
                value={input.email}
                onChange={inputHandler}
              />
            </div>

            <div className="col-md-6">
              <label className="form-label">Phone</label>
              <input
                type="text"
                className="form-control"
                name="phone"
                value={input.phone}
                onChange={inputHandler}
              />
            </div>

            <div className="col-md-6">
              <label className="form-label">
                Vehicle Registration Number
              </label>
              <input
                type="text"
                className="form-control"
                name="vehicleRegistrationNumber"
                value={input.vehicleRegistrationNumber}
                onChange={inputHandler}
              />
            </div>

            <div className="col-md-6">
              <label className="form-label">Vehicle Brand</label>
              <input
                type="text"
                className="form-control"
                name="vehicleBrand"
                value={input.vehicleBrand}
                onChange={inputHandler}
              />
            </div>

            <div className="col-md-6">
              <label className="form-label">Vehicle Model</label>
              <input
                type="text"
                className="form-control"
                name="vehicleModel"
                value={input.vehicleModel}
                onChange={inputHandler}
              />
            </div>

            <div className="col-md-6">
              <label className="form-label">Battery Capacity (kWh)</label>
              <input
                type="text"
                className="form-control"
                name="batteryCapacity"
                value={input.batteryCapacity}
                onChange={inputHandler}
              />
            </div>

            <div className="col-md-6">
              <label className="form-label">Connector Type</label>
              <input
                type="text"
                className="form-control"
                name="connectorType"
                value={input.connectorType}
                onChange={inputHandler}
              />
            </div>

            <div className="col-md-6">
              <label className="form-label">Charging Date</label>
              <input
                type="date"
                className="form-control"
                name="chargingDate"
                value={input.chargingDate}
                onChange={inputHandler}
              />
            </div>

            <div className="col-md-6">
              <label className="form-label">Time Slot</label>
              <input
                type="text"
                className="form-control"
                name="timeSlot"
                value={input.timeSlot}
                onChange={inputHandler}
              />
            </div>

            <div className="col-md-6">
              <label className="form-label">Estimated Units (kWh)</label>
              <input
                type="number"
                className="form-control"
                name="estimatedUnits"
                value={input.estimatedUnits}
                onChange={inputHandler}
              />
            </div>

            <div className="col-md-6">
              <label className="form-label">Charging Bay Number</label>
              <input
                type="text"
                className="form-control"
                name="chargingBayNumber"
                value={input.chargingBayNumber}
                onChange={inputHandler}
              />
            </div>

            <div className="col-12">
              <button className="btn btn-primary" onClick={readValues}>
                Add Booking
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddEv;
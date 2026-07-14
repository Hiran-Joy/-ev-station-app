import axios from "axios";
import React, { useEffect, useState } from "react";

const ViewEv = () => {
  const [bookingData, changeData] = useState([]);

  const fetchData = () => {
    axios
      .get("http://localhost:3000/view_booking")
      .then((response) => {
        changeData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <div className="container mt-4">
        <div className="row">
          <div className="col-12">
            <div className="table-responsive">
              <table className="table table-striped table-hover table-bordered align-middle text-center">
                <thead className="table-primary">
                  <tr>
                    <th>Booking ID</th>
                    <th>Owner Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Vehicle Registration No.</th>
                    <th>Vehicle Brand</th>
                    <th>Vehicle Model</th>
                    <th>Battery Capacity (kWh)</th>
                    <th>Connector Type</th>
                    <th>Charging Date</th>
                    <th>Time Slot</th>
                    <th>Estimated Units (kWh)</th>
                    <th>Charging Bay Number</th>
                  </tr>
                </thead>

                <tbody>
                  {bookingData.map((value, index) => {
                    return (
                      <tr key={index}>
                        <td>{value.bookingId}</td>
                        <td>{value.ownerName}</td>
                        <td>{value.email}</td>
                        <td>{value.phone}</td>
                        <td>{value.vehicleRegistrationNumber}</td>
                        <td>{value.vehicleBrand}</td>
                        <td>{value.vehicleModel}</td>
                        <td>{value.batteryCapacity}</td>
                        <td>{value.connectorType}</td>
                        <td>{value.chargingDate}</td>
                        <td>{value.timeSlot}</td>
                        <td>{value.estimatedUnits}</td>
                        <td>{value.chargingBayNumber}</td>
                      </tr>
                    );
                  })}
                </tbody>

              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewEv;
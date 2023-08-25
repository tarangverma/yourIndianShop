import React from "react";
import "../stylesheet/Warehouse.css";
import Tilt from "react-parallax-tilt";
const Warehouse = ({
  id,
  name,
  location,
  availability,
  features,
  hours,
  fees,
  rating,
  image,
  handleSelect,
}) => {
  return (
    <Tilt
      glareEnable={true}
      glareColor="#ebe7ee3f"
      glarePosition="all"
      tiltMaxAngleX="12"
      tiltMaxAngleY="12"
      className="parallax-effect-glare-scale-wh bggg "
    >
      <div className="warehouse-card">
        <div className="wh-img-ol">
          <img src={image} alt={name} className="warehouse-image" />
        </div>
        <div className="w-data">
          <h3 className="warehouse-name">{name}</h3>
          <p className="warehouse-details">
            <strong>Location:</strong> {location}
            <br />
            <strong>Availability:</strong> {availability ? "Available" : "Full"}
            <br />
            <strong>Features:</strong> {features.join(", ")}
            <br />
            <strong>Operating Hours:</strong> {hours}
            <br />
            <strong>Fees:</strong> {fees}
            <br />
            <strong>Rating:</strong> {rating} stars
            <br />
          </p>
        </div>
        <button className="btn btn-b" onClick={() => handleSelect(id)}>
          Select
        </button>
      </div>
    </Tilt>
  );
};

export default Warehouse;

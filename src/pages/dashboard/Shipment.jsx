import React, { useState } from "react";
import "../../stylesheet/dashboard/DispatchRequestForm.css";

function Shipment() {
  // State variables to store form data
  const [customerInfo, setCustomerInfo] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
  });
  const [deliveryInfo, setDeliveryInfo] = useState({
    deliveryAddress: "",
  });
  const [termsAgreed, setTermsAgreed] = useState(false);

  // New state variables for additional fields
  const [warehouseId, setWarehouseId] = useState("");
  const [selectedProduct, setSelectedProduct] = useState("");
  const [destinationInfo, setDestinationInfo] = useState({
    destinationContactName: "",
    destinationContactPhone: "",
    destinationAddress: "",
  });

  // Handle form submissions
  const handleSubmit = (e) => {
    e.preventDefault();
    // Combine all form data into one object
    const formData = {
      customerInfo,
      deliveryInfo,
      warehouseId,
      selectedProduct,
      destinationInfo,
      termsAgreed,
    };
    // Process and send form data to the server or admin
    console.log(formData);
  };

  return (
    <div id="dash-dreq" className="shipment-form">
      <h2>
        <span id="blue">Shipment </span>
        <span id="org">Request</span>
      </h2>
      <form onSubmit={handleSubmit}>
        {/* Customer Information */}
        <div className="form-group">
          <input
            type="text"
            placeholder="Full Name"
            value={customerInfo.fullName}
            onChange={(e) =>
              setCustomerInfo({ ...customerInfo, fullName: e.target.value })
            }
          />
        </div>
        <div className="form-group">
          <input
            type="email"
            placeholder="Email Address"
            value={customerInfo.email}
            onChange={(e) =>
              setCustomerInfo({ ...customerInfo, email: e.target.value })
            }
          />
        </div>
        <div className="form-group">
          <input
            type="tel"
            placeholder="Phone Number"
            value={customerInfo.phoneNumber}
            onChange={(e) =>
              setCustomerInfo({ ...customerInfo, phoneNumber: e.target.value })
            }
          />
        </div>

        {/* Warehouse Selection */}
        <div className="form-group">
          <select
            value={warehouseId}
            onChange={(e) => setWarehouseId(e.target.value)}
          >
            <option value="">Select Warehouse</option>
            <option value="WarehouseA">Warehouse A</option>
            <option value="WarehouseB">Warehouse B</option>
            <option value="WarehouseC">Warehouse C</option>
          </select>
        </div>

        {/* Product Selection */}
        <div className="form-group">
          <input
            type="text"
            placeholder="Selected Product ID"
            value={selectedProduct}
            onChange={(e) => setSelectedProduct(e.target.value)}
          />
        </div>

        {/* Delivery Information */}
        <div className="form-group">
          <input
            type="text"
            placeholder="Delivery Address"
            value={deliveryInfo.deliveryAddress}
            onChange={(e) =>
              setDeliveryInfo({
                ...deliveryInfo,
                deliveryAddress: e.target.value,
              })
            }
          />
        </div>

        {/* Destination Information */}
        <div className="form-group">
          <input
            type="text"
            placeholder="Destination Contact Name"
            value={destinationInfo.destinationContactName}
            onChange={(e) =>
              setDestinationInfo({
                ...destinationInfo,
                destinationContactName: e.target.value,
              })
            }
          />
        </div>
        <div className="form-group">
          <input
            type="tel"
            placeholder="Destination Contact Phone"
            value={destinationInfo.destinationContactPhone}
            onChange={(e) =>
              setDestinationInfo({
                ...destinationInfo,
                destinationContactPhone: e.target.value,
              })
            }
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="Destination Address"
            value={destinationInfo.destinationAddress}
            onChange={(e) =>
              setDestinationInfo({
                ...destinationInfo,
                destinationAddress: e.target.value,
              })
            }
          />
        </div>

        {/* Terms and Conditions */}
        <div className="form-group">
          <label>
            <input
              type="checkbox"
              checked={termsAgreed}
              onChange={() => setTermsAgreed(!termsAgreed)}
            />
            I agree to the Terms and Conditions
          </label>
        </div>

        {/* Submit Button */}
        <div className="form-group">
          <button className="btn btn-b" type="submit">
            Submit Request
          </button>
        </div>
      </form>
    </div>
  );
}

export default Shipment;

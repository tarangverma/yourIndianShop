import React, { useState } from "react";
import "../../stylesheet/dashboard/ProductAcceptanceForm.css"; // Import your CSS file for styling

function ProductAcceptanceForm() {
  const warehouses = [
    { id: 1, name: "Warehouse A" },
    { id: 2, name: "Warehouse B" },
    { id: 3, name: "Warehouse C" },
    // Add more warehouses as needed
  ];
  // State variables to store form data
  const [customerInfo, setCustomerInfo] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
  });
  const [productInfo, setProductInfo] = useState({
    productName: "",
    productImage: "",
    productDescription: "",
  });
  const [deliveryInfo, setDeliveryInfo] = useState({
    deliveryAddress: "",
  });
  const [termsAgreed, setTermsAgreed] = useState(false);

  // Handle form submissions
  const handleSubmit = (e) => {
    e.preventDefault();
    // Process and send form data to the server or admin
    // ...
  };

  return (
    <div id="dash-pa" className="product-acceptance-form">
      <h2>
        <span id="blue">Product </span>
        <span id="org">Acceptance </span>
        <span id="blue">Request</span>
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

        {/* Product Details */}
        <div className="form-group">
          <input
            type="text"
            placeholder="Product Name"
            value={productInfo.productName}
            onChange={(e) =>
              setProductInfo({ ...productInfo, productName: e.target.value })
            }
          />
        </div>
        <div className="form-group">
          <input
            type="file"
            accept="image/*"
            onChange={(e) =>
              setProductInfo({
                ...productInfo,
                productImage: e.target.files[0],
              })
            }
          />
        </div>
        <div className="form-group">
          <textarea
            placeholder="Product Description"
            value={productInfo.productDescription}
            onChange={(e) =>
              setProductInfo({
                ...productInfo,
                productDescription: e.target.value,
              })
            }
          />
        </div>

        {/* Delivery Information */}
        <div className="form-group">
          {/* <label>Select Warehouse:</label> */}
          <select
            id="wh-list"
            value={deliveryInfo.selectedWarehouse}
            onChange={(e) =>
              setDeliveryInfo({
                ...deliveryInfo,
                selectedWarehouse: e.target.value,
              })
            }
          >
            <option value="">Select Warehouse</option>
            {warehouses.map((warehouse) => (
              <option key={warehouse.id} value={warehouse.id}>
                {warehouse.name}
              </option>
            ))}
          </select>
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

export default ProductAcceptanceForm;

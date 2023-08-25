import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import "../../stylesheet/dashboard/AssistedPurchase.css";
function AssistedPurchase() {
  // State variables to store form data
  const [customerInfo, setCustomerInfo] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
  });
  const [productInfo, setProductInfo] = useState({
    productName: "",
    productURL: "",
    productImage: "",
    productDescription: "",
  });
  const [deliveryInfo, setDeliveryInfo] = useState({
    deliveryAddress: "",
    deliveryMethod: "",
  });
  const [additionalInfo, setAdditionalInfo] = useState({
    reasonForRequest: "",
    priceRange: "",
    specificRequirements: "",
  });
  const [termsAgreed, setTermsAgreed] = useState(false);

  // Handle form submissions
  const handleSubmit = (e) => {
    e.preventDefault();
    // Process and send form data to the server or admin
    // ...
  };
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        form.current,
        "YOUR_PUBLIC_KEY"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div id="dash-ap" className="assisted-purchase-form">
      <h2>
        <span id="blue">Assisted </span>
        <span id="org">Purchase </span>
        <span id="blue">Request</span>
      </h2>
      <form ref={form} onSubmit={handleSubmit}>
        {/* Customer Information */}
        <div className="form-group">
          <input
            type="text"
            placeholder="Full Name"
            name="full-name"
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
            name="email"
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
            name="phone"
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
            name="product-aame"
            value={productInfo.productName}
            onChange={(e) =>
              setProductInfo({ ...productInfo, productName: e.target.value })
            }
          />
        </div>
        <div className="form-group">
          <input
            type="url"
            placeholder="Product Image URL"
            name="product-url"
            value={productInfo.productURL}
            onChange={(e) =>
              setProductInfo({ ...productInfo, productURL: e.target.value })
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
            name="product-description"
            value={productInfo.productDescription}
            onChange={(e) =>
              setProductInfo({
                ...productInfo,
                productDescription: e.target.value,
              })
            }
          />
        </div>
        {/* ... Add more form groups for other sections */}

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

export default AssistedPurchase;

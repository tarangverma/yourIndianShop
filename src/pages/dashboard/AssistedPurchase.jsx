import React, { useContext, useState, useRef, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { MyContext } from '../../App';
import "../../stylesheet/dashboard/AssistedPurchase.css";
import { fetchreq, uploadImageAws } from '../../Helper/fetch';

function AssistedPurchase() {
  // State variables to store form data
  const { isLogin,user } = useContext(MyContext);
  const nav = useNavigate();

  const [productName, setProductName] = useState('');
  const [brandName, setBrandName] = useState('');
  const [productDescription, setProductDescription] = useState('');
  const [specialDetails, setSpecialDetails] = useState('');
  const [termsAgreed, setTermsAgreed] = useState(false);
  const [img ,setImg]=useState(null);

  // Handle form submissions
  const handleSubmit =async (e) => {
    e.preventDefault();
    const url = await uploadImageAws(img.name,img);
    const form = {
      cid: user.Cid,
      wid: null,
      Name: productName, // Replace with the actual product name
      Brand: brandName,   // Replace with the actual brand name
      Description: productDescription, // Replace with the actual description
      Other: specialDetails, // Replace with the actual special details
      Images: url,  // Replace with the actual images data or file path
    };
    // Process and send form data to the server or admin
    // ...
    const dt = await fetchreq("POST","assistedReq",{form});
    if(dt){
      alert("Made request Successfully...");
      nav("/YourAssistedReq");
    }else{
      alert("Something went wrong...");
    }
  };
  const form = useRef();

  useEffect(() => {
    if (!isLogin) {
      nav('/');
    }
  }, []);

  return (
    <div id="dash-ap" className="assisted-purchase-form">
      <Link  style={{marginBottom:"20px"}} className='btn btn-b' to="/YourAssistedReq">Your Requsts</Link>
      <h2>
        <span id="blue">Assisted </span>
        <span id="org">Purchase </span>
        <span id="blue">Request</span>
      </h2>
      <form ref={form} onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            type="text"
            placeholder="Product Name"
            name="product-name"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="Brand Name"
            name="brand-name"
            value={brandName}
            onChange={(e) => setBrandName(e.target.value)}
          />
        </div>

        <div className="form-group">
          <textarea
            placeholder="Product Description"
            name="product-description"
            value={productDescription}
            onChange={(e) => setProductDescription(e.target.value)}
          />
        </div>
        <div className="form-group">
          <textarea
            placeholder="Other SPL Details"
            name="special-details"
            value={specialDetails}
            onChange={(e) => setSpecialDetails(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="imges">Product Image</label>
          <input type="file" accept="image/*" name="imges" onChange={(e)=>{setImg(e.target.files[0])}} />
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
export default AssistedPurchase;
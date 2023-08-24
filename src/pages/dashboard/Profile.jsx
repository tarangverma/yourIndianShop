import React, { useState } from "react";
import "../../stylesheet/dashboard/Profile.css";

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);

  // Sample user data
  const [userData, setUserData] = useState({
    name: "John Doe",
    addressLine1: "123 Main St",
    addressLine2: "Apt 4B",
    landmark: "Near Park",
    city: "New York",
    state: "NY",
    pincode: "10001",
    phoneNumber: "555-123-4567",
    email: "johndoe@example.com",
  });

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    setIsEditing(false);
    // Update user data in your database or state management here
  };

  const handleCopyClick = () => {
    // Function to copy the user's virtual address details to the clipboard
    const virtualAddress = `${userData.name}\n${userData.addressLine1}\n${userData.addressLine2}\n${userData.landmark}\n${userData.city}, ${userData.state} - ${userData.pincode}\nPhone: ${userData.phoneNumber}\nEmail: ${userData.email}`;
    navigator.clipboard.writeText(virtualAddress);
  };

  return (
    <div className="dashboard-profile">
      <div id="pfl">
        <div className="profile-header">
          <h2>Profile</h2>
        </div>
        <div className="profile-details">
          <div className="detail-item">
            <span className="detail-label">Name:</span>
            {isEditing ? (
              <input
                type="text"
                value={userData.name}
                onChange={(e) =>
                  setUserData({ ...userData, name: e.target.value })
                }
              />
            ) : (
              <span className="detail-value">{userData.name}</span>
            )}
          </div>
          <div className="detail-item">
            <span className="detail-label">Address Line 1:</span>
            {isEditing ? (
              <input
                type="text"
                value={userData.addressLine1}
                onChange={(e) =>
                  setUserData({ ...userData, addressLine1: e.target.value })
                }
              />
            ) : (
              <span className="detail-value">{userData.addressLine1}</span>
            )}
          </div>
          <div className="detail-item">
            <span className="detail-label">Address Line 2:</span>
            {isEditing ? (
              <input
                type="text"
                value={userData.addressLine2}
                onChange={(e) =>
                  setUserData({ ...userData, addressLine2: e.target.value })
                }
              />
            ) : (
              <span className="detail-value">{userData.addressLine2}</span>
            )}
          </div>
          <div className="detail-item">
            <span className="detail-label">Landmark:</span>
            {isEditing ? (
              <input
                type="text"
                value={userData.landmark}
                onChange={(e) =>
                  setUserData({ ...userData, landmark: e.target.value })
                }
              />
            ) : (
              <span className="detail-value">{userData.landmark}</span>
            )}
          </div>
          <div className="detail-item">
            <span className="detail-label">City:</span>
            {isEditing ? (
              <input
                type="text"
                value={userData.city}
                onChange={(e) =>
                  setUserData({ ...userData, city: e.target.value })
                }
              />
            ) : (
              <span className="detail-value">{userData.city}</span>
            )}
          </div>
          <div className="detail-item">
            <span className="detail-label">State:</span>
            {isEditing ? (
              <input
                type="text"
                value={userData.state}
                onChange={(e) =>
                  setUserData({ ...userData, state: e.target.value })
                }
              />
            ) : (
              <span className="detail-value">{userData.state}</span>
            )}
          </div>
          <div className="detail-item">
            <span className="detail-label">Pincode:</span>
            {isEditing ? (
              <input
                type="text"
                value={userData.pincode}
                onChange={(e) =>
                  setUserData({ ...userData, pincode: e.target.value })
                }
              />
            ) : (
              <span className="detail-value">{userData.pincode}</span>
            )}
          </div>
          <div className="detail-item">
            <span className="detail-label">Phone Number:</span>
            {isEditing ? (
              <input
                type="text"
                value={userData.phoneNumber}
                onChange={(e) =>
                  setUserData({ ...userData, phoneNumber: e.target.value })
                }
              />
            ) : (
              <span className="detail-value">{userData.phoneNumber}</span>
            )}
          </div>
          <div className="detail-item">
            <span className="detail-label">Email:</span>
            {isEditing ? (
              <input
                type="text"
                value={userData.email}
                onChange={(e) =>
                  setUserData({ ...userData, email: e.target.value })
                }
              />
            ) : (
              <span className="detail-value">{userData.email}</span>
            )}
          </div>
        </div>
        <div>
          <button className="copy-button" onClick={handleCopyClick}>
            Copy Virtual Address
          </button>
          {isEditing ? (
            <button className="save-button" onClick={handleSaveClick}>
              Save
            </button>
          ) : (
            <button className="edit-button" onClick={handleEditClick}>
              Edit
            </button>
          )}
        </div>
      </div>{" "}
    </div>
  );
};

export default Profile;

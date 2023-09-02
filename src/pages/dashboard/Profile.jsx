import React, { useContext, useState } from "react";
import "../../stylesheet/dashboard/Profile.css";
import { MyContext } from "../../App";

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const {user}=useContext(MyContext);
  // Sample user data
  // const [userData, setUserData] = useState({
  //   name: "John Doe",
  //   addressLine1: "123 Main St",
  //   addressLine2: "Apt 4B",
  //   landmark: "Near Park",
  //   city: "New York",
  //   state: "NY",
  //   pincode: "10001",
  //   phoneNumber: "555-123-4567",
  //   email: "johndoe@example.com",
  // });
  const [userData, setUserData] = useState(user);

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
                value={userData.Name}
                onChange={(e) =>
                  setUserData({ ...userData, Name: e.target.value })
                }
              />
            ) : (
              <span className="detail-value">{userData.Name}</span>
            )}
          </div>
          <div className="detail-item">
            <span className="detail-label">Address Line 1:</span>
            {isEditing ? (
              <input
                type="text"
                value={userData.Address}
                onChange={(e) =>
                  setUserData({ ...userData, Address: e.target.value })
                }
              />
            ) : (
              <span className="detail-value">{userData.Address}</span>
            )}
          </div>
          <div className="detail-item">
            <span className="detail-label">Address Line 2:</span>
            {isEditing ? (
              <input
                type="text"
                value={userData.Address2}
                onChange={(e) =>
                  setUserData({ ...userData, Address2: e.target.value })
                }
              />
            ) : (
              <span className="detail-value">{userData.Address2}</span>
            )}
          </div>
          <div className="detail-item">
            <span className="detail-label">Landmark:</span>
            {isEditing ? (
              <input
                type="text"
                value={userData.Landmark}
                onChange={(e) =>
                  setUserData({ ...userData, Landmark: e.target.value })
                }
              />
            ) : (
              <span className="detail-value">{userData.Landmark}</span>
            )}
          </div>
          <div className="detail-item">
            <span className="detail-label">City:</span>
            {isEditing ? (
              <input
                type="text"
                value={userData.City}
                onChange={(e) =>
                  setUserData({ ...userData, City: e.target.value })
                }
              />
            ) : (
              <span className="detail-value">{userData.City}</span>
            )}
          </div>
          <div className="detail-item">
            <span className="detail-label">State:</span>
            {isEditing ? (
              <input
                type="text"
                value={userData.State}
                onChange={(e) =>
                  setUserData({ ...userData, State: e.target.value })
                }
              />
            ) : (
              <span className="detail-value">{userData.State}</span>
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
                value={userData.phoneNo}
                onChange={(e) =>
                  setUserData({ ...userData, phoneNo: e.target.value })
                }
              />
            ) : (
              <span className="detail-value">{userData.phoneNo}</span>
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

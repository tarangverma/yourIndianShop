import React, { useState, useEffect } from "react";
import "./PopAd.css";
import { IconButton } from "@mui/material";
import { WhatsApp } from "@mui/icons-material";

const PopAd = () => {
  const adsData = [
    {
      title: "Buy Plans",
      description: "Check out our latest plans and offers.",
      link: "/plans",
    },
    {
      title: "Get Discounts",
      description: "Hurry! Limited-time discounts available.",
      link: "/discounts",
    },
    {
      title: "Explore Our Services",
      description: "Discover a wide range of services we offer.",
      link: "/services",
    },
  ];

  const [currentAdIndex, setCurrentAdIndex] = useState(0);
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const adDisplayDuration = 5000; // 5 seconds
    const adTransitionDuration = 3000; // 3 seconds

    const adTimeout = setTimeout(
      () => {
        setShowPopup(true);

        const displayTimeout = setTimeout(() => {
          setShowPopup(false);
        }, adDisplayDuration);

        const nextIndex = (currentAdIndex + 1) % adsData.length;
        setCurrentAdIndex(nextIndex);

        return () => {
          clearTimeout(displayTimeout);
        };
      },
      currentAdIndex === 0 ? 0 : adDisplayDuration + adTransitionDuration
    );

    return () => {
      clearTimeout(adTimeout);
    };
  }, [currentAdIndex, adsData.length]);

  const handleClosePopup = () => {
    // Close the popup
    setShowPopup(false);
    console.log("bandh : ", showPopup);
  };

  const handleViewMore = () => {
    // Redirect to the ad's link when "View More" is clicked
    window.location.href = adsData[currentAdIndex].link;
  };

  return (
    <div>
      <div className={`popup-ads ${showPopup ? "show" : "invis"}`}>
        <div className="popup-content">
          <h2>{adsData[currentAdIndex].title}</h2>
          <p>{adsData[currentAdIndex].description}</p>
          <div className="popup-buttons">
            <button
              className="view-more-button btn-v-o"
              onClick={handleViewMore}
            >
              View More
            </button>
            <button className="close-button btn-v-r" onClick={handleClosePopup}>
              Close
            </button>
          </div>
        </div>
      </div>
      <div id="wts">
        <div className="i">
          <WhatsApp />
        </div>
      </div>
    </div>
  );
};

export default PopAd;

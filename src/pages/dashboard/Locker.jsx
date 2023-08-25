import React from "react";
import Warehouse from "../../components/Warehouse";
const dummyWarehouses = [
  {
    id: 1000000, // 7-digit static number
    name: "Warehouse A",
    location: "123 Main Street, City",
    availability: true,
    features: ["Climate Control", "Security"],
    hours: "Mon-Fri 9am-5pm",
    fees: "$50/month",
    rating: 4.5,
    image:
      "https://raw.githubusercontent.com/KHUNTPRIYANSH/site_photos/main/shipping/whrehouse/wh-1.jpg",
  },
  {
    id: 2000000, // 7-digit static number
    name: "Warehouse B",
    location: "456 Elm Avenue, Town",
    availability: false,
    features: ["24/7 Access", "Alarm System"],
    hours: "Mon-Sun 24/7",
    fees: "$60/month",
    rating: 4.0,
    image:
      "https://raw.githubusercontent.com/KHUNTPRIYANSH/site_photos/main/shipping/whrehouse/wh-2.jpg",
  },
  {
    id: 3000000, // 7-digit static number
    name: "Warehouse C",
    location: "789 Oak Road, Village",
    availability: true,
    features: ["Security Cameras"],
    hours: "Mon-Fri 8am-6pm",
    fees: "$45/month",
    rating: 4.2,
    image:
      "https://raw.githubusercontent.com/KHUNTPRIYANSH/site_photos/main/shipping/whrehouse/wh-3.jpg",
  },
  {
    id: 4000000, // 7-digit static number
    name: "Warehouse D",
    location: "101 Pine Street, Suburb",
    availability: true,
    features: ["Climate Control"],
    hours: "Mon-Sat 7am-8pm",
    fees: "$55/month",
    rating: 4.7,
    image:
      "https://raw.githubusercontent.com/KHUNTPRIYANSH/site_photos/main/shipping/whrehouse/wh-4.jpg",
  },
  {
    id: 5000000, // 7-digit static number
    name: "Warehouse E",
    location: "222 Maple Avenue, Town",
    availability: false,
    features: ["24/7 Access"],
    hours: "Mon-Sun 24/7",
    fees: "$65/month",
    rating: 3.8,
    image:
      "https://raw.githubusercontent.com/KHUNTPRIYANSH/site_photos/main/shipping/whrehouse/wh-5.jpg",
  },
  {
    id: 6000000, // 7-digit static number
    name: "Warehouse F",
    location: "333 Cedar Lane, Suburb",
    availability: true,
    features: ["Alarm System"],
    hours: "Mon-Fri 8am-5pm",
    fees: "$40/month",
    rating: 4.1,
    image:
      "https://raw.githubusercontent.com/KHUNTPRIYANSH/site_photos/main/shipping/whrehouse/wh-6.jpg",
  },
];

const Locker = () => {
  const handleSelect = (id) => {
    // Handle warehouse selection here, e.g., store the selected warehouse ID in state.
    console.log(`Selected warehouse ID: ${id}`);
  };

  return (
    <div className="warehouse-container locker">
      {dummyWarehouses.map((warehouse) => (
        <Warehouse
          key={warehouse.id}
          {...warehouse}
          handleSelect={handleSelect}
        />
      ))}
    </div>
  );
};

export default Locker;

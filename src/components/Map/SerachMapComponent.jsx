import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, useMap, Circle } from "react-leaflet";
import { OpenStreetMapProvider, GeoSearchControl } from "leaflet-geosearch";
import "leaflet/dist/leaflet.css";
import "leaflet-geosearch/dist/geosearch.css";
import L from "leaflet";

// Import custom icon images
import customIconPng from "/image/car_icon.svg";
import customShadowPng from "leaflet/dist/images/marker-shadow.png";

// Fix marker issue with Leaflet's default icon
const CustomIcon = L.icon({
  iconUrl: customIconPng, // Replace with your custom icon path
  shadowUrl: customShadowPng,
  iconAnchor: [12, 41],
  iconSize: [250, 250], // Adjust the size of your custom icon
});

const SearchField = ({ setLocation }) => {
  const map = useMap();

  React.useEffect(() => {
    const provider = new OpenStreetMapProvider();
    const searchControl = new GeoSearchControl({
      provider,
      marker: {
        draggable: true,
        icon: CustomIcon,
      },
      autoComplete: true,
      autoClose: false,
      keepResult: true,
    });

    map.addControl(searchControl);

    // Ensure the search box is visible and focused
    const openSearchInput = () => {
      const searchInput = document.querySelector(".geosearch");
      if (searchInput) {
        searchInput.classList.add("leaflet-control-geosearch--active"); // Make search input always visible
        const inputField = document.querySelector(".geosearch input");
        if (inputField) {
          inputField.classList.add("custom-search-input"); // Add custom class to input field
          inputField.focus(); // Auto-focus the search input
        }
      }
    };

    // Wait for the search control to render, then open the input
    setTimeout(openSearchInput, 500);

    // Update location on search
    map.on("geosearch/showlocation", (result) => {
      const { x, y } = result.location;
      setLocation([y, x]);
    });

    return () => {
      map.removeControl(searchControl);
    };
  }, [map, setLocation]);

  return null;
};

const SearchMapComponent = () => {
  const [location, setLocation] = useState([10.7637196, 76.272355]); // Default to New York

  return (
    <div className="relative">
      <MapContainer
        center={location}
        zoom={13}
        style={{ height: "304px", width: "100%" }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={location} icon={CustomIcon} />

        <SearchField setLocation={setLocation} />
      </MapContainer>
    </div>
  );
};

export default SearchMapComponent;

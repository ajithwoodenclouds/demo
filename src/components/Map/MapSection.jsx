import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import carIcon from "/image/car_icon.svg"; // Add your car icon image
import CustomButton from "../buttons/CustomButton";
import { useState, useEffect, useRef } from "react";

// Custom icon for the car
const carMarkerIcon = new L.Icon({
  iconUrl: carIcon,
  iconSize: [250, 250],
});

export default function MapSection() {
  const [position, setPosition] = useState([10.367795, 76.198707]); // Default coordinates
  const markerRef = useRef(null); // Reference to the marker

  // Function to get the user's current location
  const getCurrentLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          const { latitude, longitude } = pos.coords;
          setPosition([latitude, longitude]); // Update the map position
        },
        (err) => {
          console.error("Error getting location: ", err);
        },
        {
          enableHighAccuracy: true,
        }
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
  };

  // Use useEffect to open the popup by default
  useEffect(() => {
    if (markerRef.current) {
      markerRef.current.openPopup();
    }
  }, [position]);

  return (
    <div className="flex flex-col w-[40%] rounded-[16px]  bg-white p-[32px]">
      {/* Map Container */}
      <div className="w-[396px] h-[362px] mb-4">
        <MapContainer
          center={position}
          zoom={13}
          scrollWheelZoom={false}
          className="h-full w-full"
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://osm.org/copyright">OpenStreetMap</a> contributors'
          />
          <Marker position={position} icon={carMarkerIcon} ref={markerRef}>
            <Popup>
              <div className="flex gap-3 items-center">
                <img src="/image/map_light_icon.svg" alt="icon" />
                <div>
                  <h3 className="text-[#232323] font-[700]">
                    Current Location
                  </h3>
                  <span className="text-[#B0B0B0] font-[400]">
                    {position[0].toFixed(6)}, {position[1].toFixed(6)}
                  </span>
                </div>
              </div>
            </Popup>
          </Marker>
        </MapContainer>
      </div>

      {/* Coordinates Section */}
      <div className="text-center flex w-full justify-between mb-4">
        <p className="text-[#575A5E] text-[14px]">Coordinates</p>
        <p className="font-[400] text-[14px] text-[#212529]">
          {position[0].toFixed(6) + "," + position[1].toFixed(6)}
        </p>
      </div>

      {/* Button to get current location */}
      <CustomButton
        style=" bg-[#0E3281] text-[#fff] w-[200px]  py-[15px] px-[20px] rounded-[4px]"
        text="View current location"
        onClick={getCurrentLocation} // Call the function to get current location
      />
    </div>
  );
}

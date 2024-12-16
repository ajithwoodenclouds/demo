import { MapContainer, TileLayer, Marker, Popup, Circle } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// Fix default icon not being loaded properly
import carIcon from "/image/car_icon.svg";
import iconShadow from "leaflet/dist/images/marker-shadow.png";

const carMarkerIcon = new L.Icon({
  iconUrl: carIcon,
  iconSize: [250, 250],
});

L.Marker.prototype.options.icon = carMarkerIcon;

const TrackMapSection = () => {
  const position = [31.1171, -97.7278];

  return (
    <div className="w-full h-[100%]">
      <MapContainer
        center={position}
        zoom={15}
        scrollWheelZoom={false}
        className=" w-full h-[100%]"
      >
        {/* Tile layer */}
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />

        {/* Marker with car icon and popup */}
        <Marker position={position} icon={carMarkerIcon}>
          <Popup>
            <div className="flex gap-3 items-center">
              <img src="/image/map_light_icon.svg" alt="icon" />
              <div>
                <h3 className="text-[#232323] font-[700]">Current Location</h3>
                <span className="text-[#B0B0B0] font-[400]">
                  {position[0].toFixed(6)}, {position[1].toFixed(6)}
                </span>
              </div>
            </div>
          </Popup>
        </Marker>

        {/* Blue circle around the marker */}
      </MapContainer>
    </div>
  );
};

export default TrackMapSection;

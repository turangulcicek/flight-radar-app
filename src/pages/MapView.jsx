import { MapContainer, TileLayer, useMap, Popup, Marker } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useSelector } from "react-redux";
import L from "leaflet";
import icon from "./../assets/plane-i.png";
const MapView = ({ openModal }) => {
  const store = useSelector((store) => store);
  const planeIcon = L.icon({ iconUrl: icon, iconSize: [20, 20] });
  return (
    <div className="leaflet-container">
      <MapContainer
        center={[39.93327781458862, 32.85742177001182]}
        zoom={6}
        scrollWheelZoom={true}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {store.flights.map((flight) => (
          <Marker
            icon={planeIcon}
            key={flight.id}
            position={[flight.lat, flight.lng]}
          >
            <Popup>
              <div className="popup d-flex flex-column fw-bolder gap-2 align-items-center">
                <span>Kodu:{flight.code}</span>
                <button
                  onClick={() => {
                    // console.log("mapid", flight.id);
                    openModal(flight.id);
                  }}
                  className="btn btn-dark"
                >
                  Detay
                </button>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default MapView;

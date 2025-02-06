import React from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L, { LatLngExpression } from "leaflet";

// Custom marker icon
const customMarker = L.icon({
  iconUrl:
    "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

// Custom popup styles
const customPopupStyle = `
  .custom-popup .leaflet-popup-content-wrapper {
    background: #FFFFFF;
    border-radius: 12px;
    box-shadow: 0 4px 16px rgba(0,0,0,0.08);
    padding: 3;
  }
  .custom-popup .leaflet-popup-content {
    margin: 16px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
    min-width: 240px;
  }
  .custom-popup .company-name {
    font-weight: 500;
    color: #202124;
    font-size: 16px;
    margin-bottom: 6px;
    letter-spacing: -0.2px;
  }
  .custom-popup .address {
    color: #5f6368;
    font-size: 14px;
    line-height: 1.5;
  }
  .leaflet-popup-tip {
    background: #FFFFFF;
    box-shadow: 0 4px 16px rgba(0,0,0,0.08);
  }
  .leaflet-popup-close-button {
    top: 15px !important;
    right: 4px !important;
  }
  .leaflet-container {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
  }
  .leaflet-control-zoom {
    border: none !important;
    box-shadow: 0 2px 8px rgba(0,0,0,0.12) !important;
  }
  .leaflet-control-zoom a {
    background: white !important;
    color: #666 !important;
    border: none !important;
  }
  .leaflet-control-zoom a:hover {
    background: #f8f9fa !important;
    color: #202124 !important;
  }
`;

const position: LatLngExpression = [-6.2341214507513305, 106.92265149402358];

const MapComponent: React.FC = () => {
  return (
    <>
      <style>{customPopupStyle}</style>
      <MapContainer
        center={position}
        zoom={16}
        scrollWheelZoom={true}
        className="h-full w-full rounded-sm shadow-lg"
        zoomControl={true}
        attributionControl={false}
      >
        <TileLayer
          url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
          maxZoom={19}
        />
        <Marker position={position} icon={customMarker}>
          <Popup className="custom-popup">
            <div className="company-name">PT. Anugrah Niaga Mandiri</div>
            <div className="address">
              Jl. Radin Inten II No. 61A
              <br />
              Duren Sawit, Jakarta Timur
            </div>
          </Popup>
        </Marker>
      </MapContainer>
    </>
  );
};

export default MapComponent;

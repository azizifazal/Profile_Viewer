import React, { useEffect, useState } from "react";

function MapView({ address, onClose }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadMap = async () => {
      if (!window.google || !window.google.maps) {
        alert("Google Maps API is not loaded. Please check your setup.");
        return;
      }

      const geocoder = new window.google.maps.Geocoder();
      const map = new window.google.maps.Map(document.getElementById("map"), {
        zoom: 14,
        center: { lat: 0, lng: 0 }, 
      });

      geocoder.geocode({ address }, (results, status) => {
        if (status === "OK" && results[0]) {
          map.setCenter(results[0].geometry.location);
          new window.google.maps.Marker({
            map,
            position: results[0].geometry.location,
          });
          console.log("Map loaded successfully for:", results[0].formatted_address);
        } else {
          console.error("Geocode failed:", status, "Address:", address);
          alert("Failed to load the map for the given address.");
        }
        setIsLoading(false); 
      });
    };

    if (address) {
      console.log("Attempting to load map for:", address);
      loadMap();
    }
  }, [address]);

  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96 relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
        >
          ✖
        </button>
        <h3 className="text-lg font-semibold mb-4">
          Location for: {address}
        </h3>
        {isLoading ? (
          <div className="flex justify-center items-center h-48">
            <div className="loader border-t-4 border-blue-500 rounded-full w-12 h-12 animate-spin"></div>
          </div>
        ) : (
          <div id="map" className="w-full h-64"></div>
        )}
      </div>
    </div>
  );
}

export default MapView;

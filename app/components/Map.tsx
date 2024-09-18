import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faExpand } from "@fortawesome/sharp-regular-svg-icons";

const MapComponent = ({ latitude, longitude, address }: any) => {
  const location = address;

  const iframeSrc = `https://maps.google.com/maps?q=${encodeURIComponent(
    location
  )}&t=&z=13&ie=UTF8&iwloc=&output=embed`;

  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    location
  )}`;

  return (
    <div style={{ position: "relative" }}>
      <iframe
        width="260"
        height="220"
        style={{ border: 0 }}
        src={iframeSrc}
        allowFullScreen
        aria-hidden="false"
        title="Google Map"
      ></iframe>
      <a
        href={googleMapsUrl}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          position: "absolute",
          top: 10,
          right: 10,
          backgroundColor: "white",
          border: "none",
          cursor: "pointer",
          zIndex: 30,
        }}
      >
        <FontAwesomeIcon
          icon={faExpand}
          size="lg"
          className="text-base bg-white p-2"
        />
      </a>
    </div>
  );
};

export default MapComponent;

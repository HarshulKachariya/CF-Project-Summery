import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExpand } from "@fortawesome/sharp-regular-svg-icons";

const MapComponent = ({ latitude, longitude, address }: any) => {
  let iframeSrc, googleMapsUrl;

  console.log("latitude=============>>>>>>>>>>", latitude);
  console.log("longitude=============>>>>>>>>>>", longitude);
  console.log("address=============>>>>>>>>>>", address);

  if (latitude && longitude) {
    // Use latitude and longitude if available
    iframeSrc = `https://maps.google.com/maps?q=${latitude},${longitude}&t=m&z=15&ie=UTF8&iwloc=&output=embed`;
    googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${latitude},${longitude}`;
  } else if (address) {
    // Use address if latitude and longitude are not available
    iframeSrc = `https://maps.google.com/maps?q=${encodeURIComponent(
      address
    )}&t=m&z=15&ie=UTF8&iwloc=&output=embed`;
    googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
      address
    )}`;
  } else {
    // Handle case where neither coordinates nor address is provided
    return <></>;
  }

  return (
    <div className="relative">
      <iframe
        width="260"
        height="220"
        className="border-0"
        src={iframeSrc}
        allowFullScreen
        aria-hidden="false"
        title="Google Map"
      ></iframe>
      <a
        href={googleMapsUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="absolute top-2 right-2 bg-white border-none cursor-pointer z-30"
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

import React, { useEffect, useRef } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { Container } from "react-bootstrap";
import markerSvg from "./svges/marker-svgrepo-com.svg";

const ContactMap = () => {
  const mapRef = useRef(null);

  useEffect(() => {
    if (mapRef.current && !mapRef.current._leaflet_id) {
      const map = L.map(mapRef.current).setView([51.36923, 19.35721], 6);
      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution:
          '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
        maxZoom: 18,
      }).addTo(map);

      const markerIcon = L.icon({
        iconUrl: markerSvg,
        iconSize: [50, 50],
        iconAnchor: [25, 25],
      });

      const marker = L.marker([51.36923, 19.35721], { icon: markerIcon }).addTo(
        map
      );
      marker.bindPopup("Tomir sp. z o.o").openPopup();
    }
  }, [mapRef]);

  return (
    <>
      <Container>
        <div ref={mapRef} style={{ height: "500px" }} />
      </Container>
    </>
  );
};

export default ContactMap;

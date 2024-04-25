import React from "react";
import "./styles.css";
import "leaflet/dist/leaflet.css";

import { MapContainer, TileLayer, Marker } from "react-leaflet";
import { marker } from "leaflet";
import { Icon } from "leaflet";

export default function App() {
  const markers = [
    {
      geocode: [-1.9898583314927791, 30.099637912907017],
      popUp: "Hello Nobleza",
    },
    {
      geocode: [-1.9683356885675563, 30.099979333276817],
      popUp: "Hello Sonatubes",
    },
    {
      geocode: [-1.9624005218568032, 30.134684666233106],
      popUp: "Hello Kanombe",
    },
  ];
  const cutsomIcon = new Icon({
    iconUrl:
      "https://pics.freeicons.io/uploads/icons/png/18337528831606062173-512.png",
    iconSize: [38, 38],
  });

  return (
    <MapContainer center={[48.8566, 2.3522]} zoom={13}>
      <TileLayer
        attribution="&copy; <a href='https://www.openstreetmap.org/'"
        url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {markers.map((marker) => (
        <Marker position={marker.geocode} icon={cutsomIcon}></Marker>
      ))}
    </MapContainer>
  );
}

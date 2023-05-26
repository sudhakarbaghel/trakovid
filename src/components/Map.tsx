// 
import React, { useState,useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup, Tooltip } from "react-leaflet";
import { Icon } from "leaflet";
import { Link } from "react-router-dom";
import { useQuery } from "react-query";

function Map() {
    // const [countriesData, setCountriesData] = useState([]);

   const { data: countriesData } = useQuery("countries", async () => {
     const response = await fetch("https://disease.sh/v3/covid-19/countries");
     const data = await response.json();
     return data;
   });

  return (
    <div style={{ position: "relative" }}>
      <Link to="/graph">
        <button
          style={{
            border: "2px solid #a4a8a1",
            borderRadius: "5px",
            padding: "8px",
            position: "absolute",
            right: "10px",
            bottom: "10px",
            zIndex: "99955",
            // boxSizing: "border-box",
            color: "white",
            background: "linear-gradient(to top, #b64442, transparent)",
            // backgroundColor: "#b64442",
          }}
        >
          Go to Graph
        </button>
      </Link>
      <MapContainer center={[22, 77]} zoom={2.5} scrollWheelZoom={true}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />

        {countriesData?.map((country: any) => (
          <Marker
            key={country.country}
            position={[country.countryInfo.lat, country.countryInfo.long]}
          >
            <Tooltip>
              {" "}
              <div>
                <h3>{country.country}</h3>
                <p>Total Active Cases: {country.active}</p>
                <p>Total Recovered: {country.recovered}</p>
                <p>Total Deaths: {country.deaths}</p>
              </div>
            </Tooltip>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}
export default Map
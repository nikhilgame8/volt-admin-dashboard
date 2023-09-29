import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { AreaMap } from "@ant-design/maps";

const IndiaMap = () => {
  const [data, setData] = useState({ type: "FeatureCollection", features: [] });
  const [selectedCountry, setSelectedCountry] = useState("");

  useEffect(() => {
    asyncFetch();
  }, []);

  const asyncFetch = () => {
    fetch(
      "https://gw.alipayobjects.com/os/basement_prod/d36ad90e-3902-4742-b8a2-d93f7e5dafa2.json"
    )
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => {
        console.log("fetch data failed", error);
      });
  };
  // We can change color here
  const color = ["rgb(12,44,132)"];

  const countries = [
    { name: "India", code: "IN" },
    { name: "United States", code: "US" },
    { name: "China", code: "CN" },
    // Add more countries as needed
  ];

  const config = {
    map: {
      type: "mapbox",
      style: "blank",
      center: [120.19382669582967, 30.258134],
      zoom: 3,
      pitch: 0,
    },
    source: {
      data: data,
      parser: {
        type: "geojson",
      },
    },
    autoFit: true,
    color: {
      field: "density",
      value: color,
      scale: {
        type: "quantile",
      },
    },
    style: {
      opacity: 1,
      stroke: "rgb(93,112,146)",
      lineType: "dash",
      lineDash: [2, 2],
      lineWidth: 0.6,
      lineOpacity: 1,
    },
    state: {
      active: true,
      select: true,
    },
    tooltip: {
      items: ["name", "density"],
    },
    zoom: {
      position: "bottomright",
    },
    legend: {
      position: "bottomleft",
    },
  };

  const handleCountrySelect = (country) => {
    setSelectedCountry(country);
  };

  return (
    <div className="h-100 w-100 pb-2">
      <div className="d-flex justify-content-between dropdown ">
        <div  className="textStyle">Geography</div>
        <div>
        <button
          className="d-flex align-items-center nav-link collapsed border p-1 rounded gap-1"
          data-bs-target="#countryDropdown"
          data-bs-toggle="collapse"
          type="button"
          id="countryDropdown"
          aria-expanded="false"
        >
          {selectedCountry ? selectedCountry.name : "Select Country"}
          <i className="bi bi-chevron-down ms-auto"></i>
        </button>

        <ul className="dropdown-menu" id="countryDropdown">
          {countries.map((country) => (
            <li key={country.code}>
              <button
                className="dropdown-item"
                onClick={() => handleCountrySelect(country)}
              >
                {country.name}
              </button>
            </li>
          ))}
        </ul>
        </div>
      </div>
      <AreaMap {...config} />
    </div>
  );
};

export default IndiaMap;

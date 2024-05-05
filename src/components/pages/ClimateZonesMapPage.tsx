import React, { useState, CSSProperties } from "react";
import Card from "react-bootstrap/Card";
import MapChart from "../ClimteZonesGrouping/MapChart";
import MapChartUSA from "../ClimteZonesGrouping/USADetailedMap";
import "../../styles/pages/general.css";
import "../../styles/pages/MapPage.css";
import tropicalIcon from "../../assets/tropical.svg";
import aridIcon from "../../assets/desert.svg";
import temperateIcon from "../../assets/temparate.svg";
import continentalIcon from "../../assets/normal.svg";
import polarIcon from "../../assets/polar.svg";

function ClimateZonesMapPage() {
  const [activeTab, setActiveTab] = useState("tab1");

  interface ZoneColors {
    [key: string]: string;
    Tropical: string;
    Arid: string;
    Temperate: string;
    Continental: string;
    Polar: string;
  }

  const zoneColors: ZoneColors = {
    Tropical: "#36a2eb",
    Arid: "#FFA500",
    Temperate: "#00ff00",
    Continental: "#a64db8",
    Polar: "#817d82",
  };

  const cardContainerStyle: CSSProperties = {
    display: "flex",
    justifyContent: "space-between",
    flexWrap: "nowrap",
    overflowX: "auto",
    gap: "15px",
    paddingBottom: "20px",
  };

  const titleWithIconStyle: CSSProperties = {
    display: "flex",
    alignItems: "center",
    gap: "10px",
  };

  const titleStyle: CSSProperties = {
    fontWeight: "bold",
    fontFamily: "Arial, sans-serif",
    fontSize: "20px",
  };

  const textBodyStyle: CSSProperties = {
    fontFamily: "Arial, sans-serif",
    fontSize: "18px",
  };

  const cardStyle: CSSProperties = {
    flex: "1 1 300px",
    borderRadius: "10px",
    backgroundColor: "#f0f4f8",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    padding: "10px",
  };

  const climateZones = [
    {
      title: "Tropical",
      description:
        "The tropical climate is characterized by high temperatures and significant rainfall throughout the year. In this climate zone, the average annual temperature stands at 24.79°C, with UV radiation measuring 3794.99.",
      icon: tropicalIcon,
    },
    {
      title: "Arid",
      description:
        "The arid climate, with low precipitation and high temperatures, creates desert conditions. With an average annual temperature of 26.33°C and UV radiation at 4843.95, this zone experiences high air pollution (46.10 μg/m³) due to deserted areas and airborne sand and dirt.",
      icon: aridIcon,
    },
    {
      title: "Temperate",
      description:
        "The temperate climate features moderate temperatures and distinct seasonal changes. In this climate zone, the average annual temperature stands at 9.98 °C, with UV radiation measuring 2120.08.",
      icon: temperateIcon,
    },
    {
      title: "Continental",
      description:
        "The continental climate experiences extreme temperature variations, with hot summers and cold winters. In this climate zone, the average annual temperature stands at 3.83 °C, with UV radiation measuring 1588.32.",
      icon: continentalIcon,
    },
    {
      title: "Polar",
      description:
        "The polar climate is characterized by consistently low temperatures and minimal precipitation, often in the form of snow. In this climate zone, the average annual temperature stands at -5 °C, with UV radiation measuring 345.00.",
      icon: polarIcon,
    },
  ];

  return (
    <div className="page-container">
      <h1 className="heading">Climate Zones Map</h1>
      <p className="text">
        The data on this map provides information about the climate zones of
        planet Earth. The division into zones was conducted based on the Köppen
        climate classification. The Köppen climate classification divides
        climates into five main climate groups, with each group being divided
        based on patterns of seasonal precipitation and temperature. The five
        main groups are A (tropical), B (arid), C (temperate), D (continental),
        and E (polar).
      </p>

      <hr className="separator" />

      <div style={cardContainerStyle}>
        {climateZones.map((zone, index) => (
          <Card key={index} style={cardStyle}>
            <Card.Body>
              <Card.Title style={titleStyle}>
                <div style={titleWithIconStyle}>
                  <img
                    src={zone.icon}
                    alt={`${zone.title} Icon`}
                    width="30"
                    height="30"
                  />
                  {zone.title}
                </div>
              </Card.Title>
              <Card.Text style={textBodyStyle}>{zone.description}</Card.Text>
            </Card.Body>
            <div
              style={{
                height: "8px",
                backgroundColor:
                  zoneColors[zone.title as keyof typeof zoneColors],
              }}
            ></div>
          </Card>
        ))}
      </div>

      <hr className="separator" />

      <div className="tabs-container">
        <button
          onClick={() => setActiveTab("tab1")}
          className={activeTab === "tab1" ? "active" : ""}
        >
          World Climate Map
        </button>
        <button
          onClick={() => setActiveTab("tab2")}
          className={activeTab === "tab2" ? "active" : ""}
        >
          USA Detailed Climate Map
        </button>
      </div>
      <div>
        {activeTab === "tab1" && <MapChart />}
        {activeTab === "tab2" && <MapChartUSA />}
      </div>
    </div>
  );
}

export default ClimateZonesMapPage;

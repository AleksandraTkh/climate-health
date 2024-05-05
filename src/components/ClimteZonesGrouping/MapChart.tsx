import React, { useState } from "react";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";
import { useGroups } from "../ClimteZonesGrouping/CountriesGroups";
import HighlightSwitch from "../ui/HighlightSwitch";
import CountrySelector from "../utils/CountrySelector";
import "../../styles/map/MapChart.css";

const geoUrl = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-50m.json";

type GroupKey = "group1" | "group2" | "group3" | "group4" | "group5";

const colorMapping: {
  [key in GroupKey]: { normal: string; selected: string };
} = {
  group1: { normal: "#36a2eb", selected: "#227acc" },
  group2: { normal: "#FFA500", selected: "#FF4500" },
  group3: { normal: "#00ff00", selected: "#00cc00" },
  group4: { normal: "#a64db8", selected: "#4B0082" },
  group5: { normal: "#817d82", selected: "#696969" },
};

const MapChart: React.FC = () => {
  const groups = useGroups();
  const [activeGroup, setActiveGroup] = useState<string | null>(null);
  const [highlightAll, setHighlightAll] = useState(true);
  const [selectedCountry, setSelectedCountry] = useState<string | null>(null);

  const handleCountrySelect = (
    countryId: string | null,
    countryName: string | null
  ) => {
    if (countryId && countryName) {
      const group = findGroup(countryId);
      setActiveGroup(group);
      setSelectedCountry(countryId);
      setHighlightAll(false);
      console.log(`Country clicked: ${countryName} (ID: ${countryId})`);
    } else {
      setActiveGroup(null);
      setSelectedCountry(null);
    }
  };

  const findGroup = (countryId: string): GroupKey | null => {
    return Object.entries(groups).find(([_, ids]) =>
      ids.includes(countryId)
    )?.[0] as GroupKey;
  };

  return (
    <div className="map-container">
      <div className="map-controls">
        <CountrySelector onCountrySelect={handleCountrySelect} />
        <HighlightSwitch
          isOn={highlightAll}
          handleToggle={() => setHighlightAll(!highlightAll)}
        />
      </div>
      <ComposableMap className="composable-map">
        <Geographies geography={geoUrl}>
          {({ geographies }) =>
            geographies.map((geo) => {
              const countryId = geo.id;
              const countryName = geo.properties.name;
              const group = findGroup(countryId);
              const isGroupActive =
                group &&
                (highlightAll || (activeGroup && group === activeGroup));
              const isCountrySelected = countryId === selectedCountry;

              const fillColor = isCountrySelected
                ? group
                  ? colorMapping[group as GroupKey].selected
                  : "#F53"
                : isGroupActive
                ? colorMapping[group as GroupKey].normal
                : "#D6D6DA";

              return (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  onClick={() => handleCountrySelect(countryId, countryName)}
                  style={{
                    default: { fill: fillColor, outline: "none" },
                    hover: {
                      fill: group
                        ? colorMapping[group as GroupKey].selected
                        : "#F0F0F0",
                      outline: "none",
                    },
                    pressed: {
                      fill: group
                        ? colorMapping[group as GroupKey].selected
                        : "#E0E0E0",
                      outline: "none",
                    },
                  }}
                />
              );
            })
          }
        </Geographies>
      </ComposableMap>
    </div>
  );
};

export default MapChart;

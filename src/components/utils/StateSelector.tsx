import React, { useState, useEffect } from "react";
import Select from "react-select";
import axios from "axios";
import "../../styles/map/MapChart.css";

interface CountryOption {
  value: string;
  label: string;
}

const StateSelector: React.FC<{
  onCountrySelect: (id: string | null, name: string | null) => void;
}> = ({ onCountrySelect }) => {
  const [states, setStates] = useState<CountryOption[]>([]);

  useEffect(() => {
    const fetchStates = async () => {
      try {
        const response = await axios.get(
          "https://cdn.jsdelivr.net/npm/us-atlas@3/states-10m.json"
        );
        const stateOptions: CountryOption[] =
          response.data.objects.states.geometries
            .map((geo: any) => ({
              value: geo.id,
              label: geo.properties.name,
            }))
            .sort((a: CountryOption, b: CountryOption) =>
              a.label.localeCompare(b.label)
            );
        setStates(stateOptions);
      } catch (error) {
        console.error("Failed to fetch states:", error);
      }
    };

    fetchStates();
  }, []);

  const handleChange = (selectedOption: CountryOption | null) => {
    if (selectedOption) {
      onCountrySelect(selectedOption.value, selectedOption.label);
    } else {
      onCountrySelect(null, null);
    }
  };

  return (
    <Select
      options={states}
      onChange={handleChange}
      className="country-selector"
      placeholder="Select a state..."
      isClearable
      isSearchable
    />
  );
};

export default StateSelector;

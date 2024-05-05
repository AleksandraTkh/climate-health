import React, { useState, useEffect } from "react";
import Select from "react-select";
import axios from "axios";
import "../../styles/map/MapChart.css";

interface CountryOption {
  value: string;
  label: string;
}

const CountrySelector: React.FC<{
  onCountrySelect: (id: string | null, name: string | null) => void;
}> = ({ onCountrySelect }) => {
  const [countries, setCountries] = useState<CountryOption[]>([]);

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await axios.get(
          "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-50m.json"
        );
        const excludedCountries = [
          "S. Geo. and the Is.",
          "Br. Indian Ocean Ter.",
          "Guernsey",
          "Sint Maarten",
          "Siachen Glacier",
          "British Virgin Is.",
          "Somaliland",
          "São Tomé and Principe",
          "San Marino",
          "Samoa",
          "St. Vin. and Gren.",
          "Saint Lucia",
          "Cook Is.",
          "Niue",
          "Aruba",
          "Curaçao",
          "Nauru",
          "Monaco",
          "Mauritius",
          "Maldives",
          "Luxembourg",
          "Liechtenstein",
          "Kosovo",
          "Kiribati",
          "Grenada",
          "St. Pierre and Miquelon",
          "Wallis and Futuna Is.",
          "St-Martin",
          "St. Kitts and Nevis",
          "Antigua and Barb.",
          "Ashmore and Cartier Is.",
          "Norfolk Island",
          "Heard I. and McDonald Is.",
          "Indian Ocean Ter.",
          "Barbados",
          "Brunei",
          "Cabo Verde",
          "Hong Kong",
          "Macao",
          "Comoros",
          "N. Cyprus",
          "Faeroe Is.",
          "Dominica",
          "Fiji",
          "Åland",
          "Fr. S. Antarctic Lands",
          "New Caledonia",
          "Fr. Polynesia",
          "St-Barthélemy",
          "Solomon Is.",
          "Vatican",
          "U.S. Virgin Is.",
          "N. Mariana Is.",
          "Guam",
          "Marshall Is.",
          "Vanuatu",
          "American Samoa",
          "Pitcairn Is.",
          "Cayman Is.",
          "Bermuda",
          "Turks and Caicos Is.",
          "Isle of Man",
          "Montserrat",
          "Jersey",
          "Tonga",
          "Seychelles",
          "Palau",
        ];
        const countryOptions: CountryOption[] =
          response.data.objects.countries.geometries
            .map((geo: any) => ({
              value: geo.id,
              label: geo.properties.name,
            }))
            .filter(
              (country: CountryOption) =>
                !excludedCountries.includes(country.label)
            )
            .sort((a: CountryOption, b: CountryOption) =>
              a.label.localeCompare(b.label)
            );
        setCountries(countryOptions);
      } catch (error) {
        console.error("Failed to fetch countries:", error);
      }
    };
    fetchCountries();
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
      options={countries}
      onChange={handleChange}
      className="country-selector"
      placeholder="Select a country..."
      isClearable
      isSearchable
    />
  );
};

export default CountrySelector;

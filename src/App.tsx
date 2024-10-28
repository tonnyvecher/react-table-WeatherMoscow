import React, { useMemo, useState } from "react";
import "./App.css";
import Weather from "./components/Weather";
import { weatherOptions } from "./components/WeatherVariables";

function App() {
  const [variables, setVariables] = useState<string[]>([
    "rain_sum",
    "snowfall_sum",
  ]);
  const [selectedVariable, setSelectedVariable] = useState<string>(""); // для контроля за select

  const handleAddVariable = () => {
    if (selectedVariable && !variables.includes(selectedVariable)) {
      setVariables((prevVariables) => [...prevVariables, selectedVariable]);
    }

    setSelectedVariable("");
  };

  const weatherOptionsFiltered = useMemo(
    () => weatherOptions.filter((item) => !variables.includes(item.value)),
    [variables]
  );

  return (
    <div className="main">
      <div className="main__controls">
        <label>
          {/* available values:
                weathercode, temperature_2m_max, temperature_2m_min, apparent_temperature_max, apparent_temperature_min, sunrise, sunset, precipitation_sum, rain_sum,
                showers_sum, snowfall_sum, precipitation_hours, windspeed_10m_max, windgusts_10m_max, winddirection_10m_dominant, shortwave_radiation_sum, et0_fao_evapotranspiration
                */}

          <select
            className="main__select-menu"
            value={selectedVariable}
            onChange={(e) => setSelectedVariable(e.target.value)}
          >
            <option value="">Выберете переменную</option>
            {weatherOptionsFiltered.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          <button
            className="main__add-variable-button"
            onClick={handleAddVariable}
          >
            Добавить переменную
          </button>
        </label>
      </div>
      <Weather lat={55.751244} long={37.618423} variables={variables} />
    </div>
  );
}

export default App;

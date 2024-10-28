/* tslint:disable */
// @ts-nocheck
import React, { useEffect, useState } from "react";
import "./Weather.css";

interface Props {
  lat: number;
  long: number;

  variables: string[];
}

interface WeatherData {
  daily: {
    time: string[];
    [key: string]: number[];
  };
}

const Weather: React.FC<Props> = (props) => {
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchWeather = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          `https://api.open-meteo.com/v1/forecast?latitude=${
            props.lat
          }&longitude=${props.long}&daily=${props.variables.join(
            ","
          )}&timezone=Europe/Moscow&past_days=0`
        );
        const data = await response.json();
        setWeather(data);
      } catch (error) {
        console.error("Ошибка при загрузке данных:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchWeather();
  }, [props.lat, props.long, props.variables]);

  if (loading) {
    return <div>Идет загрузка...</div>;
  }

  if (!weather || !weather.daily) {
    return <div>Нет данных для отображения</div>;
  }

  return (
    <table className="weather-table" style={{ width: "100%" }}>
      <thead className="weather-table__header">
        <tr>
          <td>date</td>
          {props.variables.map((variable) => (
            <td key={variable}>{variable}</td>
          ))}
        </tr>
      </thead>
      <tbody className="weather-table__row">
        {weather.daily.time.map((time, index) => (
          <tr key={time}>
            <td>{new Date(time).toLocaleDateString()}</td>

            {props.variables.map((variable) => (
              <td key={variable}>
                {weather.daily[variable]?.[index] ?? "N/A"}{" "}
                {/* Если данных нет, выводим 'N/A' */}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Weather;

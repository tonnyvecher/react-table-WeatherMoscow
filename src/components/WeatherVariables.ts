interface Options {
    value: string;
    label: string;
}

type WeatherOptions = Options[] 

export const weatherOptions: WeatherOptions = [
    { value: 'rain_sum', label: 'Сумма осадков' },
    { value: 'snowfall_sum', label: 'Сумма снегопада' },
    { value: 'temperature_2m_max', label: 'Макс. температура на 2м' },
    { value: 'temperature_2m_min', label: 'Мин. температура на 2м' },
    { value: 'windspeed_10m_max', label: 'Макс. скорость ветра на 10м' },
    // дальше аналогично
    { value: 'weathercode', label: 'Погодный код' },
    { value: ' apparent_temperature_max', label: 'Макс. ощущаемая температура' },
    { value: ' apparent_temperature_min', label: 'Мин. ощущаемая температура' },
    { value: 'sunrise', label: 'Восход солнца' },
    { value: 'sunset', label: 'Закат солнца' },
    { value: 'showers_sum', label: 'Сумма ливня' },
    { value: 'precipitation_hours', label: 'Часы осадков' },
    { value: 'windgusts_10m_max', label: 'Макс. порывы ветра на 10м' },
    { value: 'winddirection_10m_dominant', label: 'Преобладающее направление ветра на 10м' },
    { value: 'shortwave_radiation_sum', label: 'Сумма коротковолнового излучения' },
    { value: 'et0_fao_evapotranspiration', label: 'Суммарное испарение влаги с поверхн. почвы' },
]
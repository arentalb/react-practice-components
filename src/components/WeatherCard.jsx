import { emojiConverter } from "../util/emojiConverter.js";

export function WeatherCard({ countryData }) {
  return (
    <>
      <h1 className={"text-7xl text-white self-center mb-4"}>
        {countryData?.weather.temperature}
      </h1>
      <h3 className={"text-6xl text-white self-center mb-6"}>
        {emojiConverter(countryData.weather.conditions)}
      </h3>

      <h3 className={"text-2xl text-white self-center mb-12 uppercase"}>
        {countryData?.name}
      </h3>

      <div className={"flex justify-between"}>
        <p className={"text-2xl text-white"}>
          💧 {countryData?.weather.humidity}
        </p>
        <p className={"text-2xl text-white"}>
          💨{countryData?.weather.windSpeed}
        </p>
      </div>
    </>
  );
}

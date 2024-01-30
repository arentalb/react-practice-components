import { Button } from "./components/Button.jsx";
import { Input } from "./components/Input.jsx";
import { useEffect, useState } from "react";
import { WeatherCard } from "./components/WeatherCard.jsx";
import { MutatingDots } from "react-loader-spinner";
import { VideoBackground } from "./components/VideoBackground.jsx";

const baseUrl = "http://localhost:3000/countries";

function App() {
  const [countryData, setCountryData] = useState(undefined);

  async function getRandomWeather() {
    const randomNumber = Math.floor(Math.random() * 11);
    const res = await fetch(`${baseUrl}/${randomNumber}`);
    const data = await res.json();
    setCountryData(data);
  }

  async function getWeatherByName(name) {
    const res = await fetch(`${baseUrl}?name=${name}`);
    const data = await res.json();
    if (data[0] === undefined) setCountryData(undefined);
    setCountryData(data[0]);
  }

  useEffect(function () {
    getRandomWeather();
  }, []);

  return (
    <>
      {countryData === undefined ? (
        ""
      ) : (
        <>
          <VideoBackground condition={countryData?.weather.conditions} />
          <div className="absolute inset-0 bg-gray-600 bg-opacity-70 flex items-center justify-center z-[-2]"></div>
        </>
      )}

      <div
        className={`${
          countryData === undefined
            ? "bg-gradient-to-b  from-sky-300 to-indigo-900 "
            : ""
        } h-screen flex justify-center items-center  `}
      >
        <div className={"  flex flex-col gap-4"}>
          <div
            className={"p-4 border-2 border-amber-300 rounded-2xl flex gap-4"}
          >
            <Input onInter={getWeatherByName} />
            <Button onRandom={getRandomWeather} />
          </div>
          <div
            className={
              "p-4 border-2 border-amber-300 rounded-2xl flex flex-col  "
            }
          >
            {countryData === undefined ? (
              <div className={"self-center"}>
                <MutatingDots
                  visible={true}
                  height="100"
                  width="100"
                  color="#fff"
                  secondaryColor="#fcd34d"
                  radius="12.5"
                  ariaLabel="mutating-dots-loading"
                  wrapperStyle={{}}
                  wrapperClass=""
                />
              </div>
            ) : (
              <WeatherCard countryData={countryData} key={countryData.id} />
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

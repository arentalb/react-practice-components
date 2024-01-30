export function WeatherCard() {
  return (
    <>
      <div
        className={"p-4 border-2 border-amber-300 rounded-2xl flex flex-col  "}
      >
        <h1 className={"text-7xl text-white self-center mb-4"}>21 C </h1>
        <h3 className={"text-6xl text-white self-center mb-6"}>🌦️</h3>

        <h3 className={"text-2xl text-white self-center mb-12 uppercase"}>
          unitied state
        </h3>

        <div className={"flex justify-between"}>
          <p className={"text-2xl text-white"}>💧20%</p>
          <p className={"text-2xl text-white"}>💨8km/h</p>
        </div>
      </div>
    </>
  );
}

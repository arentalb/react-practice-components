import { useEffect, useState } from "react";

const Timer = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const circleRadius = 45;
  const circleCircumference = 2 * Math.PI * circleRadius;

  const hours = currentTime.getHours().toString().padStart(2, "0");
  const minutes = currentTime.getMinutes().toString().padStart(2, "0");
  const seconds = currentTime.getSeconds().toString().padStart(2, "0");

  return (
    <div
      style={{
        width: "200px",
        height: "200px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <svg viewBox="0 0 120 120" fill={"#fff"}>
        <circle
          cx="50"
          cy="50"
          r={circleRadius}
          stroke="#ff0000"
          strokeWidth="10"
        />
        <circle
          cx="50"
          cy="50"
          r={circleRadius}
          stroke="#333"
          strokeWidth="10"
          strokeDasharray={circleCircumference}
          strokeDashoffset={`${
            circleCircumference - (seconds / 60) * circleCircumference
          }`}
        />
        <text
          x="50"
          y="50"
          dominantBaseline="central"
          textAnchor="middle"
          fontSize="20"
          fill="red"
        >
          {`${hours}:${minutes}:${seconds}`}
        </text>
      </svg>
    </div>
  );
};

export default Timer;

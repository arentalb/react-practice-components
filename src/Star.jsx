import { useState } from "react";

const containerStyle = {
  display: "flex",
  alignItems: "center",
  gap: "16px",
};

const numberStyle = {
  fontSize: "20px",
  margin: 0,
};
export default function Star({
  maxRating = 5,
  initialValue = 0,
  color = "#ff0000",
  messages = [],
  onChoose = null,
}) {
  if (initialValue > maxRating) initialValue = maxRating;
  const [rating, setRating] = useState(initialValue);
  const [tempRating, setTempRating] = useState(0);

  function handelEnter(index) {
    setTempRating(index + 1);
  }

  function handelLeave(index) {
    setTempRating(index);
  }

  return (
    <div style={containerStyle}>
      <div>
        {Array.from({ length: maxRating }, (_, index) => (
          <StarIcon
            key={index}
            full={tempRating ? tempRating >= index + 1 : rating >= index + 1}
            onRate={() => {
              setRating(index + 1);
              if (typeof onChoose === "function") {
                onChoose(index + 1);
              }
            }}
            onEnter={() => handelEnter(index)}
            onLeave={() => handelLeave(0)}
            tempRating={tempRating}
            color={color}
          />
        ))}
      </div>
      <p style={numberStyle}>
        {messages.length === maxRating
          ? messages[tempRating ? tempRating - 1 : rating - 1]
          : tempRating || rating || ""}
      </p>
    </div>
  );
}

function StarIcon({ color, onRate, full, onEnter, onLeave, tempRating }) {
  return (
    <span
      onClick={onRate}
      onMouseEnter={() => onEnter()}
      onMouseLeave={() => onLeave()}
    >
      {full ? (
        <svg
          width="25"
          height="24"
          viewBox="0 0 25 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M13.7457 3.51001L15.5057 7.03001C15.7457 7.52001 16.3857 7.99001 16.9257 8.08001L20.1157 8.61001C22.1557 8.95001 22.6357 10.43 21.1657 11.89L18.6857 14.37C18.2657 14.79 18.0357 15.6 18.1657 16.18L18.8757 19.25C19.4357 21.68 18.1457 22.62 15.9957 21.35L13.0057 19.58C12.4657 19.26 11.5757 19.26 11.0257 19.58L8.03566 21.35C5.89566 22.62 4.59566 21.67 5.15566 19.25L5.86566 16.18C5.99566 15.6 5.76566 14.79 5.34566 14.37L2.86566 11.89C1.40566 10.43 1.87566 8.95001 3.91566 8.61001L7.10566 8.08001C7.63566 7.99001 8.27566 7.52001 8.51566 7.03001L10.2757 3.51001C11.2357 1.60001 12.7957 1.60001 13.7457 3.51001Z"
            fill={color}
          />
        </svg>
      ) : (
        <svg
          width="25"
          height="24"
          viewBox="0 0 25 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M13.7457 3.51001L15.5057 7.03001C15.7457 7.52002 16.3857 7.99001 16.9257 8.08001L20.1157 8.61001C22.1557 8.95001 22.6357 10.43 21.1657 11.89L18.6857 14.37C18.2657 14.79 18.0357 15.6 18.1657 16.18L18.8757 19.25C19.4357 21.68 18.1457 22.62 15.9957 21.35L13.0057 19.58C12.4657 19.26 11.5757 19.26 11.0257 19.58L8.03566 21.35C5.89566 22.62 4.59566 21.67 5.15566 19.25L5.86566 16.18C5.99566 15.6 5.76566 14.79 5.34566 14.37L2.86566 11.89C1.40566 10.43 1.87566 8.95001 3.91566 8.61001L7.10566 8.08001C7.63566 7.99001 8.27566 7.52002 8.51566 7.03001L10.2757 3.51001C11.2357 1.60001 12.7957 1.60001 13.7457 3.51001Z"
            stroke={color}
          />
        </svg>
      )}
    </span>
  );
}

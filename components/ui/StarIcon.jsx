import React from "react";

function StarIcon({ filledRatio, size = 24 }) {
  const ratio = Math.max(0, Math.min(1, filledRatio));
  const starWidth = size;
  const fillWidth = starWidth * ratio;

  return (
    <div
      style={{
        position: "relative",
        display: "inline-block",
        width: size,
        height: size,
      }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
        strokeLinejoin="round"
        style={{ position: "absolute", top: 0, left: 0 }}
      >
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={fillWidth}
        height={size}
        viewBox={`0 0 ${fillWidth} 24`}
        fill="currentColor"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          overflow: "hidden",
          clipPath: "inset(0 0 0 0)",
        }}
      >
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    </div>
  );
}

export default function StarRating({ rating, size = 24 }) {
  const filledRatio = rating / 10;

  return <StarIcon filledRatio={filledRatio} size={size} />;
}

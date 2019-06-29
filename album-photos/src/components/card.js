import React from "react";

export default function Card({
  album: { thumbnailUrl, title, albumId },
  borderColor = "black"
}) {
  return (
    <div
      key={albumId}
      style={{
        padding: 15,
        boxShadow: `5px 5px ${borderColor}`,
        border: `2px solid ${borderColor}`,
        margin: 5,
        width: 200
      }}
    >
      <img src={thumbnailUrl} alt={title} />
      <p>{title}</p>
    </div>
  );
}

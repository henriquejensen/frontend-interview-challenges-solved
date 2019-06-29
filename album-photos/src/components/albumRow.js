import React from "react";

import Card from "./card";

export default function AlbumRow({ album, borderColor }) {
  return (
    <div style={{ display: "flex", flexDirection: "row", height: 300 }}>
      {album.map(album => {
        return <Card key={album.id} album={album} borderColor={borderColor} />;
      })}
    </div>
  );
}

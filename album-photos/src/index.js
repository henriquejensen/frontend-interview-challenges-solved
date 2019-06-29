import React from "react";
import ReactDOM from "react-dom";

import AlbumRow from "./components/albumRow";
import { BORDER_COLORS, URL } from "./constants";
import { normalizeAlbums, sortAlbumsDescending } from "./helpers";

import "./styles.css";

class App extends React.Component {
  state = { albums: [] };

  componentDidMount() {
    fetch(URL)
      .then(response => response.json())
      .then(albums => this.setState({ albums: normalizeAlbums(albums) }));
  }

  render() {
    const { albums } = this.state;
    const albumKeys = Object.keys(albums).slice(0, 3);

    return (
      <div className="App">
        {sortAlbumsDescending(albumKeys).map((albumId, index) => {
          const albumSliced = sortAlbumsDescending(albums[albumId]).slice(0, 2);
          return (
            <AlbumRow
              key={albumId}
              album={albumSliced}
              borderColor={BORDER_COLORS[index]}
            />
          );
        })}
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

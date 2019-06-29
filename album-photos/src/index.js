import React from "react";
import ReactDOM from "react-dom";

import AlbumRow from "./components/albumRow";
import { BORDER_COLORS, URL, ALBUMS_MOCK } from "./constants";
import { normalizeAlbums, sortAlbumsDescending } from "./helpers";

import "./styles.css";

class App extends React.Component {
  state = { albums: ALBUMS_MOCK };

  componentDidMount() {
    fetch(URL)
      .then(function(response) {
        return response.json();
      })
      .then(function(myJson) {
        //console.log(myJson);
        this.setState({
          albums: JSON.stringify(myJson)
        });
      });
  }

  render() {
    const { albums } = this.state;
    const albumMapped = normalizeAlbums(albums);
    const albumKeys = Object.keys(albumMapped).slice(0, 3);

    return (
      <div className="App">
        {sortAlbumsDescending(albumKeys).map((albumId, index) => {
          const albumSliced = sortAlbumsDescending(albumMapped[albumId]).slice(
            0,
            2
          );
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

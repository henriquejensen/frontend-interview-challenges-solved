export function normalizeAlbums(albums) {
  return albums.reduce((mappedAlbum, album) => {
    const albumIdArray = mappedAlbum[album.albumId];
    mappedAlbum[album.albumId] = albumIdArray
      ? [...albumIdArray, album]
      : [album];
    return mappedAlbum;
  }, {});
}

export function sortAlbumsDescending(albums) {
  return albums.sort((albumFirst, albumNext) => albumNext.id - albumFirst.id);
}

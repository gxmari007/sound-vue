export function getPlaylistsByPlaylist(state) {
  return state.playlists[state.playlist] || {};
}

export function getPlayingSongId(state) {
  const { player, playlists } = state;

  if (player.songIndex !== null) {
    const playingPlaylistKey = player.selectPlaylists[player.selectPlaylists.length - 1];
    const playlist = playlists[playingPlaylistKey];
    return playlist.items[player.songIndex].id;
  }
  return null;
}

export function getPlayingSong(state) {
  const { player, playlists } = state;

  if (player.songIndex !== null) {
    const playingPlaylistKey = player.selectPlaylists[player.selectPlaylists.length - 1];
    const playlist = playlists[playingPlaylistKey];
    return playlist.items[player.songIndex];
  }
  return null;
}

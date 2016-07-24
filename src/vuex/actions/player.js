import * as types from '../mutationTypes';

export function changePlayTime({ dispatch }, time) {
  dispatch(types.CHANGE_PLAY_TIME, time);
}

function changePlayingSong({ dispatch }, songIndex) {
  dispatch(types.CHANGE_PLAYING_SONG, songIndex);
}

export function playSong({ dispatch, state }, playlist, songIndex) {
  changePlayTime({ dispatch }, 0);

  const { selectPlaylists } = state.player;
  const length = selectPlaylists.length;

  if (length === 0 || selectPlaylists[length - 1] !== playlist) {
    dispatch(types.CHANGE_SELECT_PLAYLISTS, playlist);
  }

  changePlayingSong({ dispatch }, songIndex);
}

export function togglePlaying({ dispatch }, isPlaying) {
  dispatch(types.TOGGLE_IS_PLAYING, isPlaying);
}

export const CHANGE_TYPES = {
  NEXT: 'next',
  PREV: 'prev',
  RANDOM: 'random',
};

export function changeSong({ dispatch, state }, changeType) {
  const { player, playlists } = state;
  const { songIndex, selectPlaylists } = player;
  const currentPlaylist = selectPlaylists[selectPlaylists.length - 1];
  let newSongIndex;

  if (changeType === CHANGE_TYPES.NEXT) {
    newSongIndex = songIndex + 1;
  } else if (changeType === CHANGE_TYPES.PREV) {
    newSongIndex = songIndex - 1;
  } else if (changeType === CHANGE_TYPES.RANDOM) {
    do {
      newSongIndex = Math.floor(Math.random() * playlists[currentPlaylist].items.length - 1);
    } while (newSongIndex === songIndex);
  }

  if (newSongIndex < 0 || newSongIndex >= playlists[currentPlaylist].items.length) {
    return;
  }

  dispatch(types.CHANGE_PLAYING_SONG, newSongIndex);
}

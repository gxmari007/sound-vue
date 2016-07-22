import * as types from '../mutationTypes';

function changePlayTime({ dispatch }, time) {
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

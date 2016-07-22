import { constructUrl } from '../../helpers/songs';
import * as types from '../mutationTypes';
import { genres } from '../../locales/music';

function shouldFetchSongs(playlists, playlist) {
  const activePlaylist = playlists[playlist];
  if (!activePlaylist || !activePlaylist.isFetching && (activePlaylist.nextUrl !== null)) {
    return true;
  }
  return false;
}

function getNextUrl(playlists, playlist) {
  const activePlaylist = playlists[playlist];
  if (!activePlaylist || activePlaylist.nextUrl === null) {
    return constructUrl(playlist);
  }
  return activePlaylist.nextUrl;
}

function requestSongs({ dispatch }, playlist) {
  dispatch({
    type: types.REQUEST_SONGS,
    playlist,
  });
}

function receiveSongs({ dispatch }, playlist, songs, futureUrl, nextUrl) {
  dispatch({
    type: types.RECEIVE_SONGS,
    playlist,
    songs,
    futureUrl,
    nextUrl,
  });
}

function fetchSongs({ dispatch }, url, playlist) {
  requestSongs({ dispatch }, playlist);
  fetch(url)
    .then(response => response.json())
    .then(json => {
      let futureUrl = null;
      let nextUrl = null;

      if (json.future_href) {
        futureUrl = json.future_href;
      }

      if (json.next_href) {
        nextUrl = json.next_href;
      }

      const songs = json.collection
        .map(song => (song.origin ? song.origin : song))
        .filter(song => {
          if (genres.indexOf(playlist) !== -1) {
            return song.streamable && song.kind === 'track' && song.duration < 600000;
          }
          return song.streamable && song.kind === 'track';
        });

      receiveSongs({ dispatch }, playlist, songs, futureUrl, nextUrl);
    })
    .catch(err => { throw err; });
}

export function fetchSongsIfNeeded({ dispatch, state }, playlist) {
  const { playlists } = state;
  if (shouldFetchSongs(playlists, playlist)) {
    const nextUrl = getNextUrl(playlists, playlist);
    fetchSongs({ dispatch }, nextUrl, playlist);
  }
}

export function selectPlaylist({ dispatch, state }, playlist) {
  dispatch({
    type: types.SELECT_PLAYLIST,
    playlist,
  });
  if (!state.playlists[playlist]) {
    fetchSongsIfNeeded({ dispatch, state }, playlist);
  }
}
